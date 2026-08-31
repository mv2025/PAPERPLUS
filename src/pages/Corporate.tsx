import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { Building2, HeartPulse, Building, Car, FileText, CheckCircle2 } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    name: "Corporate & IT",
    description: "Premium desk calendars and executive diaries for employees and key stakeholders, reinforcing brand identity on every desk.",
    features: ["Custom corporate colors", "Logo embossing", "Team milestones"]
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-emerald" />,
    name: "Healthcare & Pharma",
    description: "Specialized wall calendars for clinics and hospitals featuring health tips, doctor schedules, and pharmaceutical branding.",
    features: ["Medical awareness dates", "Doctor directory pages", "Sterile packaging"]
  },
  {
    icon: <Building className="w-8 h-8 text-navy" />,
    name: "Banking & Finance",
    description: "Trust-building premium calendars with financial year planning, tax deadlines, and elegant gold-foiled branding.",
    features: ["Financial year grids", "Tax reminder highlights", "Premium foil stamping"]
  },
  {
    icon: <Car className="w-8 h-8 text-sky" />,
    name: "Automotive & Dealerships",
    description: "High-gloss, large format wall calendars featuring vehicle line-ups to be gifted to new car buyers and service clients.",
    features: ["High-gloss photo paper", "Dealership contact pages", "Maintenance schedules"]
  }
];

export const Corporate = () => {
  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-white border-b border-surface-hover">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl flex flex-col items-center gap-6">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-navy/10 bg-navy/5 text-navy text-sm font-semibold tracking-wide">
              B2B Manufacturing Partner
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography variant="h1" className="text-navy drop-shadow-sm leading-tight">
                Enterprise Solutions For <br />
                <span className="text-primary italic font-light">Industry Leaders.</span>
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Typography variant="lead" className="text-muted max-w-2xl mx-auto">
                We handle high-volume custom manufacturing for India's largest brands. From procurement to Pan-India dispatch, ARG Enterprises is your trusted calendar partner.
              </Typography>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8">
              <Button size="lg" className="h-14 px-10 text-lg shadow-xl shadow-primary/20" leftIcon={<FileText className="w-5 h-5" />}>
                Start Your Bulk Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-navy mb-4">Tailored For Your Industry</Typography>
            <Typography variant="muted" className="max-w-2xl mx-auto">
              Every industry has unique requirements. Our manufacturing lines are equipped to produce specialized products tailored to your specific market.
            </Typography>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {INDUSTRIES.map((ind, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-8 rounded-2xl border border-surface-hover shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                
                <div className="w-16 h-16 bg-surface rounded-xl flex items-center justify-center mb-6">
                  {ind.icon}
                </div>
                <Typography variant="h3" className="text-navy mb-3">{ind.name}</Typography>
                <Typography variant="p" className="text-muted mb-6">{ind.description}</Typography>
                
                <ul className="flex flex-col gap-3">
                  {ind.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm text-foreground font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Logistics Block */}
      <section className="py-24 px-6 bg-navy text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-6 relative z-10"
          >
            <Typography variant="h2" className="text-white">Pan-India Logistics & Supply Chain</Typography>
            <Typography variant="p" className="text-sky/70">
              Manufacturing is only half the battle. We ensure your corporate gifts reach your regional offices, dealer networks, or directly to clients with full tracking and secure packaging.
            </Typography>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <Typography variant="h3" className="text-primary mb-1">100%</Typography>
                <Typography variant="small" className="text-sky/70">Delivery Success</Typography>
              </div>
              <div>
                <Typography variant="h3" className="text-primary mb-1">29</Typography>
                <Typography variant="small" className="text-sky/70">States Covered</Typography>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="w-full aspect-square md:aspect-[4/3] bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
             <Typography variant="muted" className="text-sky/50">Logistics Visualization Placeholder</Typography>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Corporate;
