import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ChevronRight, Sparkles, Calendar, Award, ShieldCheck } from 'lucide-react';

// Real Calendar Assets
import religiousHero from '@/assets/foundation/religious.jpg';
import mangalGanesh from '@/assets/foundation/download.jpg';
import deskCalendar01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import durgaVeda from '@/assets/foundation/download (13).jpg';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yCardsLeft = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCardsRight = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#faf6ec] text-[#243252]"
    >
      {/* Warm Ambient Golden Lighting & Paper Grain Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-[#faf6ec] to-[#f5eedc] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-200/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-300/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/90 border border-[#e8dfd0] px-4 py-2 rounded-full shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#e5232e]" />
            <span className="text-xs font-extrabold tracking-widest uppercase text-[#14244a]">
              2027 PREMIUM CALENDAR MANUFACTURER
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography variant="h1" className="text-[#14244a] text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Mastering The Art of <br className="hidden sm:block" />
              <span className="text-[#e5232e] italic font-serif">2027 Calendars.</span>
            </Typography>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#59657b] text-base sm:text-lg lg:text-xl font-medium max-w-xl leading-relaxed mb-8"
          >
            India’s trusted manufacturing partner for corporate gifting, devotional wall collections, and executive desk series. Precision gold foil, high GSM paper, and custom branding.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
          >
            <a href="/religious-theme" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#e5232e] text-white font-bold hover:bg-[#c9172a] shadow-xl shadow-[#e5232e]/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-base">
                Explore 2027 Wall Collection <ChevronRight className="w-5 h-5" />
              </button>
            </a>
            <a href="/desk-calendar" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#14244a] text-[#14244a] font-bold hover:bg-[#14244a] hover:text-white transition-all hover:-translate-y-1 text-base">
                Executive Desk Series
              </button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e8dfd0] w-full max-w-lg"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#e5232e] flex-shrink-0" />
              <span className="text-xs font-bold text-[#14244a]">100% In-House Factory</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#e5232e] flex-shrink-0" />
              <span className="text-xs font-bold text-[#14244a]">Custom Gold Foil</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#e5232e] flex-shrink-0" />
              <span className="text-xs font-bold text-[#14244a]">PAN-India Bulk Delivery</span>
            </div>
          </motion.div>

        </div>

        {/* Right Floating 3D Real Calendar Cards Showcase */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[560px]">
          
          {/* Subtle Ambient Circle Ring */}
          <div className="absolute w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-[#e5232e]/20 bg-white/40 backdrop-blur-sm" />
          
          {/* Card 1: Ganesha Panchram (Main Featured Floating Card) */}
          <motion.div 
            style={{ y: yCardsLeft }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-30 w-[240px] sm:w-[280px] bg-white p-3 rounded-2xl shadow-2xl border-4 border-white rotate-[-3deg] hover:rotate-0 transition-transform duration-500 cursor-pointer"
            onClick={() => window.location.href = '/religious-theme'}
          >
            <div className="relative aspect-[3/4] bg-white overflow-hidden rounded-xl">
              <img src={religiousHero} alt="2027 Panchram Ganesha Wall Calendar" className="w-full h-full object-contain" />
              <span className="absolute top-2 left-2 bg-[#e5232e] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                2027 HOT
              </span>
            </div>
            <div className="mt-3 px-1 text-left">
              <h4 className="text-xs font-extrabold text-[#14244a]">Panchram Ganesh 2027</h4>
              <p className="text-[10px] text-[#68738b]">Gold Foil Panchang Wall Edition</p>
            </div>
          </motion.div>

          {/* Card 2: Executive Desk Box (Stacked Secondary Floating Card) */}
          <motion.div 
            style={{ y: yCardsRight }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-6 right-0 sm:-right-4 z-20 w-[200px] sm:w-[230px] bg-white p-3 rounded-2xl shadow-xl border-2 border-[#e8dfd0] rotate-[6deg] hover:rotate-0 transition-transform duration-500 cursor-pointer"
            onClick={() => window.location.href = '/desk-calendar'}
          >
            <div className="relative aspect-[4/3] bg-white overflow-hidden rounded-xl p-1">
              <img src={deskCalendarHero01(deskCalendar01)} alt="Executive Desk Series" className="w-full h-full object-contain" />
              <span className="absolute top-2 right-2 bg-[#14244a] text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase">
                EXECUTIVE
              </span>
            </div>
            <div className="mt-2 text-left">
              <h4 className="text-[11px] font-bold text-[#14244a]">Desktop Memo Box</h4>
              <p className="text-[9px] text-[#68738b]">Twin Flip Corporate Desk Set</p>
            </div>
          </motion.div>

          {/* Card 3: Mangal Ganesh (Bottom Left Accent Card) */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-4 left-0 sm:-left-6 z-40 w-[180px] sm:w-[210px] bg-white p-2.5 rounded-2xl shadow-xl border border-[#e8dfd0] rotate-[-8deg] hover:rotate-0 transition-transform duration-500 cursor-pointer hidden sm:block"
            onClick={() => window.location.href = '/religious-theme'}
          >
            <div className="relative aspect-[3/4] bg-white overflow-hidden rounded-lg">
              <img src={mangalGanesh} alt="Mangal Ganesh 2027" className="w-full h-full object-contain" />
            </div>
            <div className="mt-2 text-left">
              <h4 className="text-[11px] font-bold text-[#14244a]">Mangal Ganesh 2027</h4>
              <p className="text-[9px] text-[#68738b]">Devotional Wall Series</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

function deskCalendarHero01(img: string) {
  return img;
}
