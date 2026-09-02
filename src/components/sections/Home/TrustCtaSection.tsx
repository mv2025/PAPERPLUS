import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { editorialReveal } from '@/animations/signature';
import { RegistrationMark } from '@/design/DecorativeElements';

export const TrustCtaSection = () => {
  return (
    <section className="relative w-full bg-navy py-16 md:py-20 lg:py-12 md:py-16 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('/assets/textures/paper-texture.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="absolute top-10 left-10"><RegistrationMark className="invert opacity-20" /></div>
      <div className="absolute top-10 right-10"><RegistrationMark className="invert opacity-20" /></div>
      <div className="absolute bottom-10 left-10"><RegistrationMark className="invert opacity-20" /></div>
      <div className="absolute bottom-10 right-10"><RegistrationMark className="invert opacity-20" /></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center gap-10">
        
        <motion.div variants={editorialReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography variant="small" className="text-primary font-bold tracking-[0.2em] uppercase mb-6 block">
            05. The Final Step
          </Typography>
          <Typography variant="h2" className="text-white text-5xl lg:text-7xl leading-tight mb-8">
            Let's Build <br className="hidden md:block" />
            <span className="italic font-light">Your Vision.</span>
          </Typography>
          <Typography variant="p" className="text-sky/70 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            From the initial paper selection to the final gold foil stamp, experience manufacturing excellence with Paper Plus.
          </Typography>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col sm:flex-row gap-6 mt-8"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-hover to-primary rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <Button size="lg" className="relative h-16 px-12 text-lg rounded-full bg-white text-navy hover:bg-white border-0 font-bold">
              Start Your Consultation
            </Button>
          </div>
          <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-white/20 text-white hover:bg-white hover:text-navy">
            View Digital Showroom
          </Button>
        </motion.div>

      </div>
    </section>
  );
};
