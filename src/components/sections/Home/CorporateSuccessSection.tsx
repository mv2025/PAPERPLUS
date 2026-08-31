import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { editorialReveal } from '@/animations/signature';
import { GoldRule } from '@/design/DecorativeElements';
import { Building2, Globe2, Briefcase } from 'lucide-react';

export const CorporateSuccessSection = () => {
  return (
    <section className="relative w-full bg-background py-12 md:py-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <motion.div variants={editorialReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl">
            <Typography variant="small" className="text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
              04. Corporate Trust
            </Typography>
            <Typography variant="h2" className="text-navy text-4xl lg:text-5xl leading-tight mb-6">
              Partner to India's <br />
              <span className="italic font-light">Leading Brands.</span>
            </Typography>
            <Typography variant="p" className="text-muted text-lg">
              We don't just manufacture calendars; we build brand touchpoints that sit on executive desks for 365 days a year. 
              Our corporate fulfillment handles everything from design to pan-India distribution.
            </Typography>
          </motion.div>
          <GoldRule className="w-24 mt-8" />
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {[
            {
              icon: <Building2 className="w-8 h-8 text-primary" />,
              title: "Enterprise Volume",
              desc: "Capacity to manufacture and fulfill orders exceeding 100,000 units with strict timeline adherence."
            },
            {
              icon: <Briefcase className="w-8 h-8 text-navy" />,
              title: "Bespoke Customization",
              desc: "From custom die-cuts to personalized employee names hot-foiled on every individual piece."
            },
            {
              icon: <Globe2 className="w-8 h-8 text-emerald" />,
              title: "Pan-India Fulfillment",
              desc: "Secure packaging and direct-to-branch logistics ensuring your calendars reach every office intact."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-surface-hover hover:shadow-lg transition-shadow duration-500 flex flex-col gap-4 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <Typography variant="h4" className="text-navy mt-4">{item.title}</Typography>
              <Typography variant="p" className="text-muted text-sm leading-relaxed">{item.desc}</Typography>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
};
