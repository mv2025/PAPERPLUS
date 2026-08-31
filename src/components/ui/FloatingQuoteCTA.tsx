import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText } from 'lucide-react';
import { Button } from './Button';

export const FloatingQuoteCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after 300px of scrolling
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block"
        >
          <Button 
            size="lg" 
            className="rounded-full shadow-2xl shadow-primary/20 px-8 bg-surface/90 backdrop-blur-md border border-primary/50 text-foreground hover:bg-primary hover:text-black transition-all group"
            leftIcon={<FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />}
          >
            Request Bulk Quote
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
