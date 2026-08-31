import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { DownloadCloud, FileText, FileBadge, Box } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/animations/stagger';

const RESOURCES = [
  {
    category: "Product Specifications",
    icon: <FileText className="w-6 h-6 text-primary" />,
    items: [
      { name: "Paper Quality & GSM Guide", size: "1.2 MB", ext: "PDF" },
      { name: "Printing Methods & Capabilities", size: "3.4 MB", ext: "PDF" },
      { name: "Standard Product Dimensions", size: "0.8 MB", ext: "PDF" }
    ]
  },
  {
    category: "Corporate Information",
    icon: <FileBadge className="w-6 h-6 text-navy" />,
    items: [
      { name: "Company Profile 2027", size: "5.1 MB", ext: "PDF" },
      { name: "GST & Manufacturing Certifications", size: "2.3 MB", ext: "PDF" },
      { name: "B2B Vendor Onboarding Kit", size: "4.0 MB", ext: "ZIP" }
    ]
  },
  {
    category: "Artwork & Templates",
    icon: <Box className="w-6 h-6 text-emerald" />,
    items: [
      { name: "Wall Calendar Design Templates", size: "12.5 MB", ext: "AI" },
      { name: "Desk Calendar Bleed Guidelines", size: "1.5 MB", ext: "PDF" },
      { name: "Custom Logo Placement Guide", size: "2.1 MB", ext: "PDF" }
    ]
  }
];

export const Downloads = () => {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer} initial="hidden" animate="visible"
          className="max-w-3xl flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide w-fit">
            Resource Center
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography variant="h1" className="text-navy leading-tight">
              Downloads & <span className="text-primary italic font-light">Resources.</span>
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography variant="lead" className="text-muted">
              Everything your procurement and design teams need. Access our technical specifications, company profiles, and design templates.
            </Typography>
          </motion.div>
        </motion.div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RESOURCES.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-surface-hover shadow-sm"
            >
              <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-6">
                {section.icon}
              </div>
              <Typography variant="h4" className="text-navy mb-6">{section.category}</Typography>
              
              <div className="flex flex-col gap-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group flex items-center justify-between p-4 rounded-xl border border-surface-hover hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors">{item.name}</span>
                      <span className="text-xs text-muted">{item.size} • {item.ext}</span>
                    </div>
                    <DownloadCloud className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Downloads;
