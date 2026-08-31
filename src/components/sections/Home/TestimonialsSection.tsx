import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  { name: "Rahul Sharma", company: "HDFC Bank", role: "Procurement Head", rating: 5, text: "ARG Enterprises delivered 50,000 premium desk calendars on time. The quality of the paper and gold foiling was exceptional." },
  { name: "Priya Desai", company: "Tata Motors", role: "Marketing Director", rating: 5, text: "Our dealers loved the corporate wall calendars this year. The custom packaging made distributing them across India effortless." },
  { name: "Anand Verma", company: "Apollo Hospitals", role: "Admin Lead", rating: 5, text: "Flawless execution. We required very specific religious dates to be highlighted and they accommodated every detail perfectly." }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background border-t border-b border-surface-hover">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <Typography variant="h2" className="text-foreground">
            What Our <span className="text-primary italic">Partners</span> Say
          </Typography>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          {TESTIMONIALS.map((t, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-surface p-8 rounded-2xl border border-surface-hover relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <span key={i} className="text-primary text-lg">★</span>)}
              </div>
              <Typography variant="p" className="text-muted italic mb-8 relative z-10">
                "{t.text}"
              </Typography>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-surface-hover rounded-full flex items-center justify-center font-bold text-primary font-heading">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <Typography variant="large" className="text-foreground text-sm">{t.name}</Typography>
                  <Typography variant="small" className="text-muted text-xs">{t.role} • {t.company}</Typography>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
