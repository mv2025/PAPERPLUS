import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { DownloadCloud, Eye, BookOpen } from 'lucide-react';

const CATALOGUES = [
  {
    year: '2027',
    title: 'Corporate Collection',
    description: 'Our flagship line of premium wall and desk calendars designed for executive gifting.',
    image: '/assets/catalogues/corporate-2027.jpg'
  },
  {
    year: '2027',
    title: 'Religious & Heritage',
    description: 'Beautifully illustrated calendars featuring Indian heritage, deities, and spiritual motifs.',
    image: '/assets/catalogues/heritage-2027.jpg'
  },
  {
    year: '2027',
    title: 'Eco-Friendly Series',
    description: 'Sustainable calendars printed on 100% recycled kraft and seed paper.',
    image: '/assets/catalogues/eco-2027.jpg'
  }
];

export const Catalogues = () => {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-20">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer} initial="hidden" animate="visible"
          className="max-w-3xl flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Typography variant="h1" className="text-navy leading-tight">
              Digital <span className="text-primary italic font-light">Showroom.</span>
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography variant="lead" className="text-muted">
              Explore our latest manufacturing capabilities. View online via our interactive flipbook, download PDFs for offline sharing, or request physical copies for your procurement team.
            </Typography>
          </motion.div>
        </motion.div>

        {/* Featured Catalogue */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-white rounded-3xl overflow-hidden border border-surface-hover shadow-lg shadow-navy/5 flex flex-col lg:flex-row group"
        >
          <div className="w-full lg:w-1/2 aspect-video lg:aspect-auto bg-surface-hover relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-navy/10 to-transparent mix-blend-multiply z-10" />
            <img 
              src="/assets/catalogues/featured-cover.jpg" 
              alt="2027 Master Catalogue"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23EAF4FF"/></svg>';
              }}
            />
          </div>
          <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald/10 text-emerald text-xs font-bold tracking-widest uppercase w-fit">
              Featured Release
            </div>
            <Typography variant="h2" className="text-navy">2027 Master Catalogue</Typography>
            <Typography variant="p" className="text-muted text-lg">
              The complete overview of our manufacturing capabilities. Includes all 450+ calendar designs, material swatches, printing methodologies, and full customization guidelines for corporate bulk orders.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-navy hover:bg-navy/90 text-white" leftIcon={<Eye className="w-4 h-4" />}>
                View Interactive Flipbook
              </Button>
              <Button size="lg" variant="outline" leftIcon={<DownloadCloud className="w-4 h-4" />}>
                Download PDF
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Collection Grid */}
        <div className="flex flex-col gap-10">
          <Typography variant="h3" className="text-navy">Explore Collections</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATALOGUES.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col gap-6"
              >
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface relative border border-surface-hover shadow-sm">
                  <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white text-navy flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <DownloadCloud className="w-5 h-5" />
                    </button>
                  </div>
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23F5F7FA"/></svg>';
                    }}
                  />
                </div>
                <div className="flex flex-col gap-2 px-2">
                  <span className="text-primary text-sm font-bold">{cat.year}</span>
                  <Typography variant="h4" className="text-navy">{cat.title}</Typography>
                  <Typography variant="p" className="text-muted text-sm">{cat.description}</Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Physical Copy Request */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-navy rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-6 relative overflow-hidden"
        >
          <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full" />
          <div className="absolute -right-20 bottom-0 w-64 h-64 bg-emerald/20 blur-3xl rounded-full" />
          
          <BookOpen className="w-12 h-12 text-primary relative z-10 mb-2" />
          <Typography variant="h2" className="text-white relative z-10">Prefer a physical copy?</Typography>
          <Typography variant="p" className="text-sky/70 max-w-xl relative z-10">
            We are happy to dispatch our printed Master Catalogue and premium paper swatches directly to your procurement office anywhere in India.
          </Typography>
          <Button size="lg" className="mt-4 relative z-10 bg-primary hover:bg-primary-hover text-navy shadow-lg shadow-primary/20">
            Request Physical Catalogue
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default Catalogues;
