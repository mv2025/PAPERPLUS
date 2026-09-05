import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { SearchOverlay } from '../ui/SearchOverlay';
import { MegaMenu } from './MegaMenu';
import { MobileNav } from './MobileNav';
import { Heart, ArrowRightLeft, ShoppingBag, Search } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';

import paperPlusLogo from '@/assets/Paper Plus LOGO.png';

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
        "relative w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-surface-hover shadow-sm py-3"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        
        {/* Paper Plus Brand Logo Image */}
        <a href="/" className="flex-shrink-0 flex items-center group">
          <img 
            src={paperPlusLogo} 
            alt="Paper Plus Premium Calendars" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:block flex-1">
          <MegaMenu />
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <SearchOverlay />
          <Button size="sm" className="ml-2">Request Quote</Button>
        </div>

        {/* Mobile Actions: Search Icon + Menu Drawer */}
        <div className="flex items-center gap-2 lg:hidden">
          <SearchOverlay trigger={
            <button 
              className="p-2 text-[#14244a] hover:text-[#DA2030] transition-colors rounded-lg border border-[#e8dfd0] bg-white shadow-sm cursor-pointer"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5 text-[#DA2030]" />
            </button>
          } />
          <MobileNav />
        </div>
        
      </div>
    </motion.div>
  );
};
