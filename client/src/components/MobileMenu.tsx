import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPortal } from "react-dom";

interface MobileMenuProps {
  moonshotLink: string;
}

export default function MobileMenu({ moonshotLink }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuContent = isOpen && mounted ? createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        style={{ zIndex: 9998 }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menu Content */}
      <div 
        className="fixed top-0 left-0 right-0 bottom-0 overflow-y-auto"
        style={{ zIndex: 9999 }}
      >
        {/* Close button at top */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMenu}
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X size={32} style={{ color: 'oklch(0.75 0.25 240)' }} />
          </button>
        </div>

        <nav className="container px-6 py-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            <a
              href="#about"
              onClick={closeMenu}
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors py-4 border-b border-white/20"
            >
              ABOUT
            </a>
            <a
              href="#tokenomics"
              onClick={closeMenu}
              className="text-xl font-bold text-white hover:text-pink-400 transition-colors py-4 border-b border-white/20"
            >
              TOKENOMICS
            </a>
            <a
              href="#community"
              onClick={closeMenu}
              className="text-xl font-bold text-white hover:text-green-400 transition-colors py-4 border-b border-white/20"
            >
              COMMUNITY
            </a>
            <a
              href="/verify"
              onClick={closeMenu}
              className="text-xl font-bold text-white hover:text-green-400 transition-colors py-4 border-b border-white/20"
            >
              VERIFY ✓
            </a>
            <a
              href="/faq"
              onClick={closeMenu}
              className="text-xl font-bold text-white hover:text-blue-400 transition-colors py-4 border-b border-white/20"
            >
              FAQ
            </a>
            <a
              href="/HRDLF_Whitepaper.md"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="text-xl font-bold text-white hover:text-yellow-400 transition-colors py-4 border-b border-white/20"
            >
              WHITEPAPER
            </a>

            {/* Mobile CTA Button */}
            <Button
              size="lg"
              className="font-bold mt-6 w-full text-lg py-6"
              style={{
                backgroundColor: 'oklch(0.75 0.25 240)',
                color: 'oklch(0.05 0.01 240)',
                boxShadow: '0 0 20px oklch(0.75 0.25 240)'
              }}
              onClick={() => {
                window.open(moonshotLink, '_blank');
                closeMenu();
              }}
            >
              BUY NOW
            </Button>
          </div>
        </nav>
      </div>
    </>,
    document.body
  ) : null;

  return (
    <>
      {/* Hamburger Button - only visible on mobile */}
      <button
        onClick={toggleMenu}
        className="sm:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        style={{ zIndex: 100 }}
      >
        <Menu size={28} style={{ color: 'oklch(0.75 0.25 240)' }} />
      </button>

      {menuContent}
    </>
  );
}
