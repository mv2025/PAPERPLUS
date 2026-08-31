import React from 'react';
import { motion } from 'framer-motion';

export const RegistrationMark = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-8 h-8 flex items-center justify-center opacity-40 pointer-events-none ${className}`}>
    <div className="absolute w-[1px] h-full bg-navy/50" />
    <div className="absolute h-[1px] w-full bg-navy/50" />
    <div className="absolute w-4 h-4 rounded-full border border-navy/50" />
  </div>
);

export const GoldRule = ({ className = "", vertical = false }: { className?: string, vertical?: boolean }) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    className={`bg-primary/40 origin-left ${vertical ? 'w-[1px] h-full origin-top' : 'h-[1px] w-full'} ${className}`} 
  />
);

export const CalendarGridBackground = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`} style={{
    backgroundImage: `linear-gradient(to right, rgba(31,58,95,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,58,95,0.03) 1px, transparent 1px)`,
    backgroundSize: '100px 100px'
  }} />
);

export const EditorialWatermark = ({ text, className = "" }: { text: string, className?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className={`absolute text-[15vw] font-bold leading-none text-navy/[0.02] uppercase tracking-tighter pointer-events-none select-none ${className}`}
  >
    {text}
  </motion.div>
);

export const PaperLayer = ({ className = "" }: { className?: string }) => (
  <div className={`absolute bg-white shadow-xl shadow-navy/5 border border-surface-hover/50 ${className}`} />
);
