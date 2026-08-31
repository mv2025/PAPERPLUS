import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { fadeUp, staggerContainer } from '@/animations/stagger';

const STEPS = [
  { step: '01', title: 'Consultation', desc: 'Understanding your branding goals and MOQ requirements.' },
  { step: '02', title: 'Design & Prototyping', desc: 'Creating 3D renders and physical samples for approval.' },
  { step: '03', title: 'Proof Approval', desc: 'Final sign-off on layouts, dates, and brand colors.' },
  { step: '04', title: 'Offset Printing', desc: 'High-speed, high-fidelity printing on imported machines.' },
  { step: '05', title: 'Finishing & Binding', desc: 'UV coating, gold foiling, and durable wire-o binding.' },
  { step: '06', title: 'Quality Inspection', desc: 'Rigorous manual and automated defect checking.' },
  { step: '07', title: 'Secure Packaging', desc: 'Shrink wrapping and corrugated boxing for safety.' },
  { step: '08', title: 'Dispatch', desc: 'Pan-India logistics ensuring on-time corporate delivery.' },
];

export const JourneySection = () => {
  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden border-b border-surface-hover">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <Typography variant="h2" className="text-foreground mb-4">
            The Manufacturing <span className="text-primary italic">Journey</span>
          </Typography>
          <Typography variant="lead">
            Watch how a simple idea transforms into a premium corporate gift through our meticulous 8-step production process.
          </Typography>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-surface-hover -translate-y-1/2 hidden lg:block" />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10"
          >
            {STEPS.map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="flex flex-col items-center text-center group bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-black/5 hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                {/* Decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-full bg-surface border border-surface-hover flex items-center justify-center mb-3 group-hover:border-primary group-hover:bg-primary/10 transition-colors shadow-sm relative z-10">
                  <span className="font-heading font-bold text-lg text-primary">{item.step}</span>
                </div>
                <Typography variant="large" className="text-foreground mb-1 relative z-10">{item.title}</Typography>
                <Typography variant="small" className="text-muted leading-snug relative z-10">{item.desc}</Typography>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
