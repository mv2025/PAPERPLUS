import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, animate, useMotionValue } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { RegistrationMark } from '@/design/DecorativeElements';
import { ArrowRight } from 'lucide-react';

// Real Calendar & Printing Craft Assets
import pressHero from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';
import paperStockImg from '@/assets/foundation/1.jpg';
import foilCraftImg from '@/assets/foundation/download (13).jpg';

const AnimatedCounter = ({ from, to }: { from: number, to: number }) => {
  const count = useMotionValue(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 3, ease: [0.16, 1, 0.3, 1] });
    }
  }, [inView, count, to]);

  useEffect(() => {
    return count.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toLocaleString();
      }
    });
  }, [count]);

  return <span ref={ref}>{from}</span>;
};

export const PrintingPrecisionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const machineScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const machineY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section ref={containerRef} className="relative w-full bg-navy py-8 md:py-12 overflow-hidden text-white scroll-mt-28">
      
      {/* Blueprint Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="1" />
          <circle cx="50%" cy="50%" r="300" stroke="white" strokeWidth="1" fill="none" strokeDasharray="10,10" />
        </svg>
      </div>

      <div className="absolute top-10 right-10 z-0"><RegistrationMark className="invert opacity-10 scale-125" /></div>
      <div className="absolute bottom-10 left-10 z-0"><RegistrationMark className="invert opacity-10 scale-125" /></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="small" className="text-primary font-bold tracking-[0.2em] uppercase mb-1 block text-xs">
              02. Engineering &amp; Execution
            </Typography>
            <Typography variant="h2" className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Absolute <span className="italic font-light text-primary">Precision.</span>
            </Typography>
          </motion.div>
        </div>

        {/* Dominant Layout Container */}
        <div className="flex flex-col gap-5">
          
          {/* Main Printing Press Image */}
          <div className="relative w-full h-[260px] md:h-[320px] lg:h-[340px] bg-surface-hover overflow-hidden rounded-xl group shadow-lg">
            
            {/* Paper Sliding Away Reveal */}
            <motion.div 
              className="absolute inset-0 bg-[#FBF9F6] z-30 origin-right shadow-[-20px_0_40px_rgba(0,0,0,0.2)]"
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
            />

            {/* Subtle Machine Parallax */}
            <motion.div style={{ scale: machineScale, y: machineY }} className="absolute inset-0">
              <img 
                src={pressHero} 
                alt="Heidelberg Offset Press Calendar Craft" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80"
                style={{ clipPath: 'inset(11% 0 0 0)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent" />
            </motion.div>

            <div className="relative z-20 h-full p-4 sm:p-6 md:p-8 flex flex-col justify-between pointer-events-none">
              
              {/* Registration Mark Overlay */}
              <div className="flex justify-between items-start">
                <RegistrationMark className="invert opacity-30" />
                <span className="font-mono text-[10px] text-primary/90 tracking-widest uppercase border border-primary/30 px-2.5 py-0.5 bg-navy/60 backdrop-blur-sm rounded">
                  OFFSET PRESS // HD-102
                </span>
              </div>

              {/* Engineering Label - German Offset Unit (Top Left Blur Box) */}
              <motion.div 
                className="absolute top-12 left-3 sm:top-14 sm:left-6 max-w-[48%] sm:max-w-none"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="backdrop-blur-md bg-navy/80 sm:bg-white/5 border border-white/20 sm:border-white/10 rounded-lg p-2 sm:p-3 shadow-lg">
                  <Typography variant="small" className="text-primary font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase block text-[9px] sm:text-[10px] mb-0.5">
                    German Offset Unit
                  </Typography>
                  <Typography variant="h4" className="text-white text-[11px] sm:text-sm font-bold font-mono leading-tight">
                    Heidelberg Precision Tech
                  </Typography>
                </div>
              </motion.div>

              {/* Engineering Label - Registration Rollers (Bottom Right on Mobile, Top Right on Desktop) */}
              <motion.div 
                className="absolute bottom-3 right-3 sm:bottom-auto sm:top-14 sm:right-6 text-right max-w-[48%] sm:max-w-none"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="backdrop-blur-md bg-navy/80 sm:bg-white/5 border border-white/20 sm:border-white/10 rounded-lg p-2 sm:p-3 shadow-lg">
                  <Typography variant="small" className="text-primary font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase block text-[9px] sm:text-[10px] mb-0.5">
                    Registration Rollers
                  </Typography>
                  <Typography variant="h4" className="text-white text-[11px] sm:text-sm font-bold font-mono leading-tight">
                    Micron-level Alignment
                  </Typography>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Grid - Supporting Evidence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Pantone Guide */}
            <motion.div 
              className="relative h-[160px] md:h-[190px] bg-surface-hover rounded-xl group overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src={paperStockImg} 
                alt="High GSM Uncoated Ivory Paper Stock" 
                className="absolute inset-0 w-full h-full object-cover origin-bottom transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 p-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg transform transition-transform duration-500 group-hover:-translate-y-1">
                <Typography variant="small" className="text-primary font-bold tracking-[0.2em] uppercase block text-[10px] mb-0.5">Color Matching</Typography>
                <Typography variant="h4" className="text-white text-lg font-bold">Pantone Calibration</Typography>
                <Typography variant="small" className="text-sky/70 block font-mono text-[11px]">Absolute color fidelity across runs.</Typography>
              </div>
            </motion.div>

            {/* CMYK Macro */}
            <motion.div 
              className="relative h-[160px] md:h-[190px] bg-surface-hover rounded-xl group overflow-hidden shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src={foilCraftImg} 
                alt="Gold Foil Stamping & Precision Craft" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 p-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-lg transform transition-transform duration-500 group-hover:-translate-y-1">
                <Typography variant="small" className="text-primary font-bold tracking-[0.2em] uppercase block text-[10px] mb-0.5">Microscopic Accuracy</Typography>
                <Typography variant="h4" className="text-white text-lg font-bold">CMYK &amp; Foil Registration</Typography>
                <Typography variant="small" className="text-sky/70 block font-mono text-[11px]">Zero ghosting. Perfect hot-foil stamping.</Typography>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Sequence Completion */}
        <motion.div 
          className="flex justify-end mt-1"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="/products" className="group flex items-center gap-3 text-white hover:text-primary transition-colors">
            <span className="font-bold uppercase tracking-widest text-xs">Explore Our Collection</span>
            <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors relative overflow-hidden">
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:text-navy transition-colors" />
            </div>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
};
