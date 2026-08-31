import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { SearchOverlay } from '../ui/SearchOverlay';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { Heart, ArrowRightLeft, ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-surface-hover shadow-sm py-3.5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        
        {/* Paper Plus Typography Logo */}
        <a href="/" className="flex-shrink-0 flex items-center gap-2 group">
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-black tracking-tight text-[#14244a] group-hover:text-primary transition-colors">
              PAPER <span className="text-[#e5232e]">PLUS</span>
            </span>
            <span className="text-[9px] font-sans font-extrabold uppercase tracking-[0.3em] text-[#68738b]">
              CALENDARS &amp; PRINT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:block flex-1">
          <MegaMenu />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <SearchOverlay />
          
          <div className="flex items-center gap-1 border-l border-surface-hover pl-3">
            <button className="p-2 text-muted hover:text-primary transition-colors relative" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted hover:text-primary transition-colors relative" aria-label="Compare">
              <ArrowRightLeft className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted hover:text-primary transition-colors relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          <Button size="sm" className="ml-2">Request Quote</Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <MobileNav />
        
      </div>
    </motion.div>
  );
};
