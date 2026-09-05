import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { editorialReveal } from '@/animations/signature';

// Real Horizontal Desk Calendar Assets (Fill horizontal card ratio without empty side gaps)
import desk04 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_04_d63402e89e59.png';
import desk21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import desk22 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_22_fc7a9002813f.png';
import desk23 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_23_3d59a55e4cf3.png';
import desk24 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_24_b169f7ce24ef.png';
import desk25 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_25_c9168ddbe608.png';
import desk27 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';

export const ProductShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Magnifying Glass State for February
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [magnifyPos, setMagnifyPos] = useState({ x: 0, y: 0 });

  const handleMagnifierMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMagnifyPos({ x, y });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const stageScale = useTransform(scrollYProgress, [0, 0.2, 0.8], [0.9, 1, 1]);
  
  const coverRotation = useTransform(scrollYProgress, [0.05, 0.3], [0, -160]);
  const lightSweepX = useTransform(scrollYProgress, [0, 0.2], ['-100%', '200%']);
  
  const cover1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.18], [1, 1, 0]);
  const cover2Opacity = useTransform(scrollYProgress, [0.18, 0.23, 0.28], [0, 1, 0]);
  const cover3Opacity = useTransform(scrollYProgress, [0.28, 0.33], [0, 1]);

  const janRotation = useTransform(scrollYProgress, [0.38, 0.62], [0, -160]);
  const febRotation = useTransform(scrollYProgress, [0.68, 0.92], [0, -160]);

  // Opacity transforms for 100% PURE SOLID WHITE backfaces when flipped past 90deg
  const coverFrontOpacity = useTransform(coverRotation, [0, -89, -90, -160], [1, 1, 0, 0]);
  const coverBackOpacity = useTransform(coverRotation, [0, -89, -90, -160], [0, 0, 1, 1]);

  const janFrontOpacity = useTransform(janRotation, [0, -89, -90, -160], [1, 1, 0, 0]);
  const janBackOpacity = useTransform(janRotation, [0, -89, -90, -160], [0, 0, 1, 1]);

  const febFrontOpacity = useTransform(febRotation, [0, -89, -90, -160], [1, 1, 0, 0]);
  const febBackOpacity = useTransform(febRotation, [0, -89, -90, -160], [0, 0, 1, 1]);

  return (
    <>
      {/* MOBILE DISPLAY (Clean, Compact, Zero Vertical Gaps on Mobile Screens) */}
      <section className="md:hidden relative w-full bg-[#0A0D14] py-12 px-6 text-white border-t border-white/10">
        <div className="max-w-md mx-auto text-center flex flex-col items-center">
          <span className="text-[#e5232e] font-bold tracking-[0.25em] uppercase text-xs mb-2 block">
            03. The Finished Object
          </span>
          <Typography variant="h2" className="text-white text-3xl font-extrabold mb-6">
            Executive Desk Series
          </Typography>

          <div className="relative w-full aspect-[16/11] shadow-2xl rounded-2xl overflow-hidden border border-white/15 bg-[#faf8f5] mb-6">
            <img 
              src={desk25} 
              alt="2027 Corporate Executive Desk Edition" 
              className="w-full h-full object-cover p-2 rounded-xl"
            />
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1 rounded-md border border-[#e8dfd0] shadow-sm">
              <span className="text-[#14244a] text-xs font-bold">2027 Corporate Executive Edition</span>
            </div>
          </div>

          <a href="/desk-calendar" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e5232e] text-white text-xs font-extrabold uppercase tracking-wider shadow-lg shadow-[#e5232e]/30">
            Explore Desk Series
          </a>
        </div>
      </section>

      {/* DESKTOP DISPLAY (3D Sticky Scroll Showcase for Desktop screens) */}
      <section ref={containerRef} className="hidden md:block relative w-full bg-[#0A0D14] h-[320vh] text-white">
        
        {/* STICKY STAGE */}
        <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Layer 1: Atmospheric Glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
          <div className="absolute w-[600px] h-[600px] bg-sky/5 rounded-full blur-[120px] mix-blend-screen translate-y-1/4" />
        </div>

        {/* Section Header */}
        <div className="absolute top-16 md:top-36 left-0 w-full px-4 md:px-6 z-40 text-center pointer-events-none">
          <motion.div variants={editorialReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Typography variant="small" className="text-primary font-bold tracking-[0.3em] uppercase mb-2 md:mb-4 block drop-shadow-md">
              03. The Finished Object
            </Typography>
            <Typography variant="h1" className="text-white text-4xl md:text-7xl lg:text-[8rem] font-light tracking-tighter opacity-10 mix-blend-overlay">
              PRODUCTS
            </Typography>
          </motion.div>
        </div>

        {/* Layer 4: The Product Stage */}
        <motion.div style={{ scale: stageScale }} className="relative z-20 w-full max-w-4xl flex items-center justify-center perspective-1000 mt-12 md:mt-20 px-4">
          
          {/* Shadow */}
          <div className="absolute bottom-[-10%] w-[80%] h-[20%] bg-white/5 blur-[40px] rounded-[100%] transform scale-y-50" />

          {/* THE CALENDAR OBJECT */}
          <div className="relative w-[290px] sm:w-[380px] md:w-[500px] lg:w-[620px] aspect-[16/11] transform-style-3d shadow-2xl shadow-black/60 bg-[#faf8f5] rounded-xl overflow-hidden border border-black/10">
            
            {/* March Page (Bottom Layer - Final Destination) */}
            <div className="absolute inset-0 bg-[#faf8f5] rounded-xl overflow-hidden flex flex-col z-0">
              <div className="w-full h-full bg-[#faf8f5] p-2 flex items-center justify-center">
                <img 
                  src={desk25} 
                  alt="March 2027 Corporate Executive Edition" 
                  className="w-full h-full object-cover rounded-lg shadow-sm"
                />
              </div>
              <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md border border-[#e8dfd0]">
                <span className="text-[#14244a] text-xs font-bold">March 2027 • Corporate Executive Edition</span>
              </div>
            </div>

            {/* February Page (Middle Layer) */}
            <motion.div 
              className="absolute inset-0 origin-top transform-style-3d rounded-xl z-10 bg-[#faf8f5]"
              style={{ rotateX: febRotation }}
            >
              {/* Backside (100% PURE SOLID BLANK WHITE SHEET - Activated when flipped past 90deg) */}
              <motion.div 
                className="absolute inset-0 bg-white rounded-xl z-30 border-b border-black/10" 
                style={{ opacity: febBackOpacity }}
              />
              
              {/* Front side (Artwork - Active when unflipped) */}
              <motion.div 
                className="absolute inset-0 bg-[#faf8f5] rounded-xl overflow-hidden flex flex-col border border-black/10 z-10"
                style={{ opacity: febFrontOpacity }}
              >
                <div 
                  className="relative w-full h-full cursor-crosshair group overflow-hidden bg-[#faf8f5] p-2"
                  onMouseEnter={() => setIsMagnifying(true)}
                  onMouseLeave={() => setIsMagnifying(false)}
                  onMouseMove={handleMagnifierMove}
                >
                  <img 
                    src={desk23} 
                    alt="February 2027 Sacred Harmony Edition" 
                    className="w-full h-full object-cover rounded-lg shadow-sm"
                  />
                  
                  {isMagnifying && (
                    <div 
                      className="absolute w-40 h-40 md:w-56 md:h-56 rounded-full border border-white/20 shadow-2xl pointer-events-none z-50 bg-white"
                      style={{
                        left: `${magnifyPos.x}%`,
                        top: `${magnifyPos.y}%`,
                        transform: 'translate(-50%, -50%)',
                        backgroundImage: `url('${desk23}')`,
                        backgroundPosition: `${magnifyPos.x}% ${magnifyPos.y}%`,
                        backgroundSize: '250%',
                        backgroundRepeat: 'no-repeat'
                      }}
                    />
                  )}
                  <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md border border-[#e8dfd0]">
                    <span className="text-[#14244a] text-xs font-bold">February 2027 • Sacred Harmony Edition</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* January Page */}
            <motion.div 
              className="absolute inset-0 origin-top transform-style-3d rounded-xl z-20"
              style={{ rotateX: janRotation }}
            >
              {/* Backside (100% PURE SOLID BLANK WHITE SHEET - Activated when flipped past 90deg) */}
              <motion.div 
                className="absolute inset-0 bg-white rounded-xl z-30 border-b border-black/10" 
                style={{ opacity: janBackOpacity }}
              />
              
              {/* Front side (Artwork - Active when unflipped) */}
              <motion.div 
                className="absolute inset-0 bg-[#faf8f5] rounded-xl overflow-hidden flex flex-col border border-black/10 z-10"
                style={{ opacity: janFrontOpacity }}
              >
                <div className="w-full h-full bg-[#faf8f5] p-2 overflow-hidden flex items-center justify-center relative">
                  <img 
                    src={desk22} 
                    alt="January 2027 Shree Ganesha Edition" 
                    className="w-full h-full object-cover rounded-lg shadow-sm"
                  />
                  <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md border border-[#e8dfd0]">
                    <span className="text-[#14244a] text-xs font-bold">January 2027 • Shree Ganesha Edition</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* The Animated Cover */}
            <motion.div 
              className="absolute inset-0 origin-top transform-style-3d rounded-xl z-30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#faf8f5]"
              style={{ rotateX: coverRotation }}
            >
              {/* Backside of the cover (100% PURE SOLID BLANK WHITE SHEET - Activated when flipped past 90deg) */}
              <motion.div 
                className="absolute inset-0 bg-white rounded-xl z-30 border-b border-black/10" 
                style={{ opacity: coverBackOpacity }}
              />
              
              {/* Front side of the cover (Artwork - Active when unflipped) */}
              <motion.div 
                className="absolute inset-0 bg-[#faf8f5] border border-white/10 overflow-hidden z-10"
                style={{ opacity: coverFrontOpacity }}
              >
                <motion.div style={{ opacity: cover1Opacity }} className="absolute inset-0 flex items-center justify-center p-2 bg-[#faf8f5]">
                  <img src={desk21} alt="Maha Ganpati 2027 Executive Cover" className="w-full h-full object-cover rounded-lg shadow-sm" />
                </motion.div>
                
                <motion.div style={{ opacity: cover2Opacity }} className="absolute inset-0 bg-[#faf8f5] flex items-center justify-center p-2">
                  <img src={desk04} alt="Golden Temple Vista Executive Cover" className="w-full h-full object-cover rounded-lg shadow-sm" />
                </motion.div>
                
                <motion.div style={{ opacity: cover3Opacity }} className="absolute inset-0 bg-[#faf8f5] flex items-center justify-center p-2">
                  <img src={desk24} alt="Devotional Harmony Executive Cover" className="w-full h-full object-cover rounded-lg shadow-sm" />
                </motion.div>

                <motion.div 
                  className="absolute inset-y-0 w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                  style={{ x: lightSweepX }}
                />
              </motion.div>
            </motion.div>
            
            {/* Wire Binding Rings */}
            <div className="absolute -top-4 left-0 w-full h-6 flex justify-around px-6 z-40 pointer-events-none">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="w-2.5 h-full bg-gradient-to-b from-gray-300 via-white to-gray-500 rounded-full shadow-sm" />
              ))}
            </div>

          </div>
        </motion.div>
      </div>
      </section>

      {/* LIFESTYLE SHOT: Real Executive Desk Calendar Artwork */}
      <section className="relative w-full bg-[#0A0D14] z-30 pb-12 md:pb-24 pt-8 md:pt-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section Header (Above Image for Zero Overlap) */}
          <div className="mb-6 md:mb-8">
            <Typography variant="small" className="text-[#e5232e] font-bold tracking-[0.3em] uppercase mb-2 block drop-shadow-md">
              The Environment
            </Typography>
            <Typography variant="h2" className="text-white text-3xl md:text-4xl lg:text-5xl font-light leading-tight">
              Crafted for the <span className="italic font-normal text-white/90">executive desk.</span>
            </Typography>
          </div>

          {/* Clean Artwork Image Showcase (Unobstructed View) */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121622] p-4 sm:p-6 md:p-8 flex items-center justify-center shadow-2xl">
            <img 
              src={desk27} 
              alt="Executive Corporate Calendar Series 2027" 
              className="w-full h-auto max-h-[520px] object-contain rounded-xl"
            />
          </div>

        </div>
      </section>
    </>
  );
};
