import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { Button } from '../../ui/Button';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { Briefcase, FileText } from 'lucide-react';

const INDUSTRIES = [
  "Healthcare", "Education", "Banking & Finance", 
  "Automotive", "Government", "Hospitality", 
  "Real Estate", "Retail"
];

export const CorporateSolutionsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-surface relative border-b border-surface-hover">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-2xl overflow-hidden bg-background shadow-2xl"
        >
          <img 
            src="/assets/gallery/corporate-placeholder.jpg" 
            alt="Corporate Solutions" 
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23222"/></svg>';
            }}
          />
          <div className="absolute inset-0 border-[8px] border-primary/20 rounded-2xl m-4 pointer-events-none" />
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 backdrop-blur-md p-8 rounded-full border border-white/10">
            <Briefcase className="w-16 h-16 text-primary" />
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Typography variant="h2" className="text-foreground">
              Empowering Organizations.<br />
              <span className="text-primary italic">Across Every Sector.</span>
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Typography variant="lead">
              We specialize in fulfilling high-volume custom orders tailored to your brand identity. From dedicated account management to nationwide logistics, we are the preferred partner for India's largest organizations.
            </Typography>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 mt-4">
            {INDUSTRIES.map((ind, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Typography variant="small" className="text-muted">{ind}</Typography>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button size="lg" leftIcon={<FileText className="w-5 h-5" />}>
              Get Custom Quotation
            </Button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
