import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { Button } from '../../ui/Button';
import { fadeUp } from '@/animations/stagger';
import { BookOpen, Download } from 'lucide-react';

export const DigitalCatalogueSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background border-b border-surface-hover">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto flex flex-col items-center gap-6"
        >
          <Typography variant="muted" className="uppercase tracking-widest font-semibold text-primary">
            Digital Experience
          </Typography>
          <Typography variant="h2" className="text-foreground">
            Explore the 2027 Catalogue
          </Typography>
          <Typography variant="lead">
            Experience our entire collection interactively. Flip through our digital catalogue to discover new designs, paper selections, and customization options.
          </Typography>

          <div className="relative w-full h-[250px] sm:h-[300px] lg:h-[350px] max-w-4xl bg-surface border border-surface-hover rounded-2xl overflow-hidden mt-6 group cursor-pointer shadow-2xl">
            <img 
              src="/assets/hero/catalogue-placeholder.jpg" 
              alt="Digital Catalogue Preview" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23222"/></svg>';
              }}
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/50 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <Typography variant="large" className="text-white drop-shadow-md">
                Click to View Interactive Flipbook
              </Typography>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Button size="lg" variant="secondary" leftIcon={<Download className="w-5 h-5" />}>
              Download PDF (15MB)
            </Button>
            <Button size="lg" variant="outline">
              Request Printed Catalogue
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
