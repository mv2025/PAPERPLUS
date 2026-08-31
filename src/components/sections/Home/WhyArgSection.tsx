import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { ShieldCheck, Truck, Sparkles, Building2, Layers, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  { icon: <Sparkles />, title: "Precision Manufacturing", desc: "State-of-the-art offset and digital printing for crisp, flawless visuals." },
  { icon: <Layers />, title: "Premium Materials", desc: "Curated selection of high GSM art papers, matte finishes, and gold foiling." },
  { icon: <Building2 />, title: "Corporate Customization", desc: "End-to-end branding solutions tailored for large organizations." },
  { icon: <Truck />, title: "Reliable Nationwide Delivery", desc: "Secure packaging and optimized logistics reaching 100+ cities." },
  { icon: <CheckCircle2 />, title: "Quality Assurance", desc: "Rigorous 3-step inspection process before any batch is dispatched." },
  { icon: <ShieldCheck />, title: "Long-Term Partnerships", desc: "Dedicated B2B account managers ensuring seamless annual reorders." }
];

export const WhyArgSection = () => {
  return (
    <section className="py-12 md:py-16 bg-surface-hover relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Editorial Text Block */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Typography variant="muted" className="uppercase tracking-widest font-semibold text-primary mb-2">
              The Paper Plus Advantage
            </Typography>
            <Typography variant="h2" className="text-foreground">
              Built on Quality.<br />
              <span className="text-primary italic">Scaled for Business.</span>
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography variant="lead">
              We don't just print calendars; we engineer year-long brand experiences. Our manufacturing facility combines traditional craftsmanship with cutting-edge German printing technology.
            </Typography>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
            {FEATURES.map((feat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex gap-4">
                <div className="text-primary mt-1">{feat.icon}</div>
                <div>
                  <Typography variant="large" className="text-foreground mb-1">{feat.title}</Typography>
                  <Typography variant="small" className="text-muted leading-relaxed">{feat.desc}</Typography>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Editorial Image Composition */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-black"
        >
          <img 
            src="/assets/factory/printing-placeholder.jpg" 
            alt="Printing Process" 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23171717"/></svg>';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
            <Typography variant="h4" className="text-white mb-2">ISO 9001:2015 Certified</Typography>
            <Typography variant="small" className="text-gray-300">
              Our facilities adhere to the highest international quality management standards.
            </Typography>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
