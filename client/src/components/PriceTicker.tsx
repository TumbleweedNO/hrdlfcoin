import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface PriceData {
  price: string;
  marketCap: string;
  priceChange24h: number;
  isLoading: boolean;
  error: boolean;
}

export default function PriceTicker() {
  const [priceData, setPriceData] = useState<PriceData>({
    price: "$0.00000506861",
    marketCap: "$5.1K",
    priceChange24h: 0,
    isLoading: true,
    error: false,
  });

  const contractAddress = "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";

  const fetchPrice = async () => {
    try {
      const response = await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${contractAddress}`
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch price data");
      }

      const data = await response.json();
      
      // DexScreener returns an array of pairs for the token
      if (data.pairs && data.pairs.length > 0) {
        const pair = data.pairs[0]; // Get the first (usually most liquid) pair
        
        setPriceData({
          price: `$${parseFloat(pair.priceUsd).toFixed(11)}`,
          marketCap: formatMarketCap(pair.fdv || pair.marketCap),
          priceChange24h: parseFloat(pair.priceChange?.h24 || 0),
          isLoading: false,
          error: false,
        });
      } else {
        // No pairs found, use fallback data
        setPriceData(prev => ({ ...prev, isLoading: false, error: false }));
      }
    } catch (error) {
      console.error("Error fetching price:", error);
      setPriceData(prev => ({ ...prev, isLoading: false, error: true }));
    }
  };

  const formatMarketCap = (value: number | undefined): string => {
    if (!value) return "$5.1K";
    
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(2)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    } else {
      return `$${value.toFixed(0)}`;
    }
  };

  useEffect(() => {
    // Fetch immediately on mount
    fetchPrice();

    // Then fetch every 30 seconds
    const interval = setInterval(fetchPrice, 30000);

    return () => clearInterval(interval);
  }, []);

  const getPriceChangeColor = () => {
    if (priceData.priceChange24h > 0) return 'oklch(0.85 0.28 145)'; // neon-green
    if (priceData.priceChange24h < 0) return 'oklch(0.65 0.30 340)'; // neon-pink
    return 'oklch(0.75 0.25 240)'; // neon-blue
  };

  const getPriceChangeIcon = () => {
    if (priceData.priceChange24h > 0) return <TrendingUp size={16} />;
    if (priceData.priceChange24h < 0) return <TrendingDown size={16} />;
    return <Activity size={16} />;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
      {/* Current Price */}
      <div className="bg-card/50 backdrop-blur-sm border-2 neon-border px-6 py-4 rounded-lg min-w-[280px]" style={{ borderColor: 'oklch(0.75 0.25 240 / 0.5)' }}>
        <div className="flex items-center justify-between mb-1">
          <div className="mono text-sm text-muted-foreground">CURRENT PRICE</div>
          {priceData.isLoading && (
            <div className="animate-pulse flex items-center gap-1">
              <Activity size={14} style={{ color: 'oklch(0.75 0.25 240)' }} />
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="text-3xl font-black neon-glow" style={{ color: 'oklch(0.85 0.28 145)' }}>
            {priceData.price}
          </div>
          {priceData.priceChange24h !== 0 && (
            <div 
              className="flex items-center gap-1 text-sm font-bold"
              style={{ color: getPriceChangeColor() }}
            >
              {getPriceChangeIcon()}
              <span>{Math.abs(priceData.priceChange24h).toFixed(2)}%</span>
            </div>
          )}
        </div>
      </div>

      {/* Market Cap */}
      <div className="bg-card/50 backdrop-blur-sm border-2 neon-border px-6 py-4 rounded-lg min-w-[200px]" style={{ borderColor: 'oklch(0.65 0.30 340 / 0.5)' }}>
        <div className="mono text-sm text-muted-foreground mb-1">MARKET CAP</div>
        <div className="text-3xl font-black neon-glow" style={{ color: 'oklch(0.65 0.30 340)' }}>
          {priceData.marketCap}
        </div>
      </div>
    </div>
  );
}
