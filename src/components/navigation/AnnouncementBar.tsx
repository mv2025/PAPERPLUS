import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MESSAGES = [
  "2027 Calendar Collection Now Available",
  "Premium Corporate Branding Available",
  "Pan India Delivery",
  "Get Custom Bulk Quotes in 24 Hours",
  "GST Billing Provided"
];

export const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-[#0f172a] text-amber-300 text-xs font-semibold tracking-wider uppercase py-2 px-4 flex items-center justify-center overflow-hidden h-9 border-b border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute flex-1 text-center truncate px-8 font-bold tracking-widest"
        >
          {MESSAGES[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/60 hover:text-white hover:bg-white/10 rounded-md transition-colors"
        aria-label="Dismiss announcement"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
