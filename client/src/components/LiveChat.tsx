import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  sender: "user" | "support";
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hey! 👋 Welcome to HRDLF. Got questions about the token, Agent Mode course, or anything else? I'm here to help!",
      sender: "support",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const autoRespond = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("$")) {
      return "Current HRDLF price updates every 30 seconds at the top of the page! You can also check live prices on Moonshot.com or Solscan. 📈";
    }
    if (lowerMessage.includes("buy") || lowerMessage.includes("purchase")) {
      return "You can buy HRDLF on Moonshot.com! Just click the 'BUY NOW' button at the top of the page. Need help with the process? Check out our FAQ page! 🚀";
    }
    if (lowerMessage.includes("agent mode") || lowerMessage.includes("course")) {
      return "Agent Mode is our AI automation course for apparel brands and mobile apps! It's currently $27 (54% off from $59). Click 'LEARN AGENT MODE' to enroll and get lifetime access. 🤖";
    }
    if (lowerMessage.includes("whitepaper") || lowerMessage.includes("tokenomics")) {
      return "Check out our whitepaper for full tokenomics details! You can find it in the navigation menu or scroll down to the Tokenomics section. 📄";
    }
    if (lowerMessage.includes("gear") || lowerMessage.includes("merch") || lowerMessage.includes("apparel")) {
      return "Get exclusive Hardlife Apparel gear at HRDLF.com! Click 'GET YOUR GEAR' button to shop the collection. 👕";
    }
    if (lowerMessage.includes("wallet") || lowerMessage.includes("solana")) {
      return "HRDLF is on Solana! You'll need a Solana wallet like Phantom or Solflare. Once set up, you can buy on Moonshot.com. Need more help? Check our FAQ! 💼";
    }
    if (lowerMessage.includes("aml") || lowerMessage.includes("compliance") || lowerMessage.includes("legal")) {
      return "We're fully compliant with Norwegian AML/CTF regulations (Finanstilsynet, Skatteetaten, Økokrim). Check the footer for full compliance details! ⚖️";
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("support")) {
      return "For direct support, email us or reach out on Twitter @HardLifeApparel. We typically respond within 24 hours! 📧";
    }
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're welcome! Anything else I can help with? 😊";
    }
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hey there! 👋 How can I help you with HRDLF today?";
    }
    
    // Default response
    return "Great question! For detailed info, check out our FAQ page or whitepaper. You can also reach out to our team on Twitter @HardLifeApparel for personalized support! 💬";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = autoRespond(inputValue);
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "support",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl neon-glow"
        style={{
          backgroundColor: 'oklch(0.75 0.25 240)',
          color: 'oklch(0.05 0.01 240)',
          boxShadow: '0 0 30px oklch(0.75 0.25 240)'
        }}
        aria-label="Open live chat"
      >
        <MessageCircle size={28} />
      </Button>
    );
  }

  return (
    <Card 
      className="fixed bottom-6 right-6 z-50 w-96 shadow-2xl border-2"
      style={{ 
        borderColor: 'oklch(0.75 0.25 240)',
        maxHeight: isMinimized ? '60px' : '600px',
        transition: 'max-height 0.3s ease'
      }}
    >
      <CardHeader 
        className="p-4 cursor-pointer"
        style={{ 
          backgroundColor: 'oklch(0.75 0.25 240)',
          color: 'oklch(0.05 0.01 240)'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <div>
              <div className="font-black text-sm">HRDLF Support</div>
              <div className="text-xs opacity-80">Online • Typically replies instantly</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="h-8 w-8 p-0 hover:bg-white/20"
            >
              <Minimize2 size={16} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-white/20"
            >
              <X size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>

      {!isMinimized && (
        <CardContent className="p-0 flex flex-col" style={{ height: '540px' }}>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "text-white"
                      : "bg-muted text-foreground"
                  }`}
                  style={
                    message.sender === "user"
                      ? {
                          backgroundColor: 'oklch(0.75 0.25 240)',
                          color: 'oklch(0.05 0.01 240)'
                        }
                      : {}
                  }
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-neon-blue text-foreground"
                style={{ borderColor: 'oklch(0.75 0.25 240 / 0.3)' }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="neon-glow"
                style={{
                  backgroundColor: 'oklch(0.75 0.25 240)',
                  color: 'oklch(0.05 0.01 240)',
                  boxShadow: '0 0 20px oklch(0.75 0.25 240)'
                }}
              >
                <Send size={18} />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by HRDLF AI • Instant responses
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
