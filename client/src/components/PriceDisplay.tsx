import { useState, useEffect } from "react";

interface PriceDisplayProps {
  type: "price" | "marketcap";
}

export default function PriceDisplay({ type }: PriceDisplayProps) {
  const [value, setValue] = useState(
    type === "price" ? "$0.00000506861" : "$5.1K"
  );

  const contractAddress = "B3DAsrBArk4N8q4CudxEQmi76hzQVHfd3RzhEzTmoon";

  const fetchPrice = async () => {
    try {
      const response = await fetch(
        `https://api.dexscreener.com/latest/dex/tokens/${contractAddress}`
      );
      
      if (!response.ok) return;

      const data = await response.json();
      
      if (data.pairs && data.pairs.length > 0) {
        const pair = data.pairs[0];
        
        if (type === "price") {
          setValue(`$${parseFloat(pair.priceUsd).toFixed(11)}`);
        } else {
          const mcValue = pair.fdv || pair.marketCap;
          if (mcValue >= 1000000) {
            setValue(`$${(mcValue / 1000000).toFixed(2)}M`);
          } else if (mcValue >= 1000) {
            setValue(`$${(mcValue / 1000).toFixed(1)}K`);
          } else {
            setValue(`$${mcValue.toFixed(0)}`);
          }
        }
      }
    } catch (error) {
      // Silently fail and keep fallback value
      console.error("Error fetching price:", error);
    }
  };

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  return <>{value}</>;
}
