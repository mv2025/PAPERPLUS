import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { editorialReveal } from '@/animations/signature';
import { GoldRule, EditorialWatermark, PaperLayer } from '@/design/DecorativeElements';

import img1 from '@/assets/foundation/1.jpg';
import img2 from '@/assets/foundation/2.jpg';
import img3 from '@/assets/foundation/3.jpg';

const PAPER_TEXTURES = [
  {
    src: img1,
    label: "Uncoated Ivory 240GSM"
  },
  {
    src: img2,
    label: "Textured Linen 300GSM"
  },
  {
    src: img3,
    label: "Glossy Art Card 170GSM"
  }
];

export const CraftsmanshipSection = () => {

  return (
    <section className="relative w-full bg-[#FBF9F6] py-16 md:py-12 md:py-16 lg:py-16 md:py-20 overflow-hidden border-t border-surface-hover/50">
      <EditorialWatermark text="CRAFT" className="top-10 -left-10 text-navy/[0.04]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        
        {/* Editorial Imagery Collage (Asymmetrical) */}
        <div className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px]">
          {/* Decorative Layers - hidden on mobile to prevent white block overlays */}
          <PaperLayer className="hidden sm:block w-[80%] h-[90%] -left-4 top-10 rotate-[-2deg] bg-[#FAF6EC] shadow-xl shadow-navy/5" />
          <PaperLayer className="hidden sm:block w-[85%] h-[95%] left-4 top-4 rotate-[1deg] bg-[#FAF6EC] shadow-xl shadow-navy/5" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 bg-[#FAF6EC] rounded-2xl shadow-xl shadow-navy/10 z-10 p-2 sm:p-3 flex overflow-hidden border border-[#E8DFD0]"
          >
            <div className="w-full h-full grid grid-cols-2 grid-rows-3 gap-2 sm:gap-3">
              
              {/* Large Macro Paper */}
              <div className="col-span-2 row-span-2 relative overflow-hidden bg-[#F5EEDC] rounded-lg group">
                <img 
                  src={PAPER_TEXTURES[0].src} 
                  alt="Large Macro Paper" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-bold tracking-widest uppercase block">Uncoated Ivory</span>
                  <span className="text-[10px] font-mono text-white/80">Macro Texture</span>
                </div>
              </div>

              {/* Cotton Texture */}
              <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#F5EEDC] rounded-lg group">
                <img 
                  src={PAPER_TEXTURES[1].src} 
                  alt="Cotton Texture" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Paper Layers */}
              <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#F5EEDC] rounded-lg group">
                <img 
                  src={PAPER_TEXTURES[2].src} 
                  alt="Paper Layers" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <GoldRule className="w-16" />
          
          <motion.div variants={editorialReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Typography variant="small" className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
              01. The Foundation
            </Typography>
            <Typography variant="h2" className="text-navy text-4xl lg:text-5xl leading-tight mb-6">
              It begins with the <br />
              <span className="italic font-light">perfect paper.</span>
            </Typography>
            <Typography variant="p" className="text-muted text-lg leading-relaxed mb-6">
              We source only the finest uncoated, gloss, and specialty textured papers globally. The tactile feel of a calendar is the first point of contact with your brand, and we ensure it communicates absolute quality.
            </Typography>
            <Typography variant="p" className="text-muted text-lg leading-relaxed">
              Every batch undergoes strict humidity and tension testing before it ever sees a drop of ink, ensuring flawless registration and zero warp throughout the year.
            </Typography>
          </motion.div>

          {/* Micro interaction link */}
          <motion.a 
            href="/manufacturing" 
            variants={editorialReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="inline-flex items-center gap-4 text-navy font-bold uppercase tracking-widest text-sm group mt-4 w-fit"
          >
            <span className="group-hover:text-primary transition-colors">Explore Materials</span>
            <div className="w-8 h-[1px] bg-navy group-hover:w-12 group-hover:bg-primary transition-all duration-300" />
          </motion.a>
        </div>

      </div>
    </section>
  );
};
