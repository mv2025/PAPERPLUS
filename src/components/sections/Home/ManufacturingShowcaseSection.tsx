import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { fadeUp } from '@/animations/stagger';

import paperImg from '@/assets/foundation/1.jpg';
import printingImg from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';
import bindingImg from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_31_9872eb025040.jpg';
import packagingImg from '@/assets/foundation/2.jpg';
import dispatchImg from '@/assets/foundation/3.jpg';

const IMAGES = [
  { url: paperImg, title: 'Paper Stock Selection', span: 'col-span-1 row-span-1' },
  { url: printingImg, title: 'Gold Foil & Offset Printing', span: 'col-span-2 row-span-2' },
  { url: bindingImg, title: 'Wire-O & Tin Rim Binding', span: 'col-span-1 row-span-1' },
  { url: packagingImg, title: 'Individual Envelope Packing', span: 'col-span-1 row-span-1' },
  { url: dispatchImg, title: 'PAN-India Dispatch', span: 'col-span-2 row-span-1' },
];

export const ManufacturingShowcaseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#faf6ec] relative border-t border-[#e8dfd0]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12"
        >
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#e5232e] block mb-2">
            IN-HOUSE MANUFACTURING
          </span>
          <Typography variant="h2" className="text-[#14244a] text-4xl font-extrabold mb-3">
            Inside the <span className="text-[#e5232e] italic">Facility</span>
          </Typography>
          <Typography variant="lead" className="max-w-2xl text-[#68738b] text-base">
            Take a visual tour of our state-of-the-art printing infrastructure, raw paper stocks, gold foil stamping, and packaging process.
          </Typography>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden group border border-[#e8dfd0] shadow-sm ${img.span}`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <Typography variant="large" className="text-white font-extrabold text-lg drop-shadow-md">
                  {img.title}
                </Typography>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
