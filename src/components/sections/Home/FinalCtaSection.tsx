import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { Button } from '../../ui/Button';
import { FileText } from 'lucide-react';

export const FinalCtaSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-black flex items-center justify-center">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black z-10" />
        <img 
          src="/assets/factory/printing.jpg" 
          alt="Printing Facility" 
          className="w-full h-full object-cover opacity-30 blur-sm"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23111"/></svg>';
          }}
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <Typography variant="h1" className="text-white drop-shadow-lg leading-tight">
            Your Brand Deserves To Be Seen<br />
            <span className="text-primary italic">Every Day Of The Year.</span>
          </Typography>
          
          <Typography variant="lead" className="text-gray-300 max-w-2xl mx-auto">
            Partner with Paper Plus Calendars Pvt. Ltd. for uncompromising quality, bulk manufacturing capabilities, and seamless nationwide logistics. Let's build your next corporate gift.
          </Typography>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-lg shadow-glow" leftIcon={<FileText className="w-5 h-5" />}>
              Request Bulk Quote
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 text-lg border-white/30 text-white hover:bg-white hover:text-black">
              Talk To Our Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
