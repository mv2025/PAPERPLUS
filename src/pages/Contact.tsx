import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { MapPin, Phone, Mail, MessageCircle, Clock, Building } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-20">
        
        {/* Header */}
        <motion.div 
          variants={staggerContainer} initial="hidden" animate="visible"
          className="max-w-3xl flex flex-col gap-6"
        >
          <motion.div variants={fadeUp}>
            <Typography variant="h1" className="text-navy leading-tight">
              Get in <span className="text-primary italic font-light">Touch.</span>
            </Typography>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Typography variant="lead" className="text-muted">
              Whether you're looking for a custom corporate quote or need assistance with a retail order, our manufacturing and support teams are ready to help.
            </Typography>
          </motion.div>
        </motion.div>

        {/* Interactive Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.a 
            href="https://wa.me/919810001279"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-surface-hover shadow-sm hover:shadow-md hover:border-emerald/30 transition-all group flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 bg-emerald/10 text-emerald rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8" />
            </div>
            <Typography variant="h3" className="text-navy mt-2">WhatsApp</Typography>
            <Typography variant="p" className="text-muted text-sm">Fastest way to reach our sales team for quick quotes and queries.</Typography>
            <span className="text-emerald font-bold mt-2">Chat Now →</span>
          </motion.a>

          <motion.a 
            href="tel:+919810001279"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl border border-surface-hover shadow-sm hover:shadow-md hover:border-navy/30 transition-all group flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 bg-navy/10 text-navy rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8" />
            </div>
            <Typography variant="h3" className="text-navy mt-2">Call Us</Typography>
            <Typography variant="p" className="text-muted text-sm">Speak directly with our B2B manufacturing consultants.</Typography>
            <span className="text-navy font-bold mt-2">+91 98100 01279</span>
          </motion.a>

          <motion.a 
            href="mailto:sales@paperplus.online"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-3xl border border-surface-hover shadow-sm hover:shadow-md hover:border-primary/30 transition-all group flex flex-col items-center text-center gap-4"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8" />
            </div>
            <Typography variant="h3" className="text-navy mt-2">Email</Typography>
            <Typography variant="p" className="text-muted text-sm">Send us your detailed RFQs and custom artwork requirements.</Typography>
            <span className="text-primary font-bold mt-2">sales@paperplus.online</span>
          </motion.a>
        </div>

        {/* Office Layout */}
        <div className="w-full bg-navy rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col gap-10 justify-center">
            <div>
              <Typography variant="h2" className="text-white mb-2">Corporate Office</Typography>
              <Typography variant="p" className="text-sky/70">Visit us to see paper swatches and physical samples.</Typography>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <Typography variant="h4" className="text-white mb-1">Headquarters &amp; Showroom</Typography>
                  <Typography variant="p" className="text-sky/70 text-sm">Paper Plus (ARG Calendars Pvt. Ltd.),<br/>4094, Nai Sarak, Old Delhi, Dai Wara, Chandni Chowk, Delhi, 110006</Typography>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <Typography variant="h4" className="text-white mb-1">Business Hours</Typography>
                  <Typography variant="p" className="text-sky/70 text-sm">Monday - Saturday: 9:00 AM - 7:00 PM<br/>Sunday: Closed</Typography>
                </div>
              </div>
              <div className="flex gap-4">
                <Building className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <Typography variant="h4" className="text-white mb-1">Logistics Coverage</Typography>
                  <Typography variant="p" className="text-sky/70 text-sm">Pan-India delivery via road and air freight partners.</Typography>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 bg-surface-hover relative min-h-[400px]">
            {/* Google Maps Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-sky/10 border-l border-white/10">
              <MapPin className="w-12 h-12 text-navy mb-4 opacity-50" />
              <Typography variant="h4" className="text-navy opacity-50">Interactive Map Integration</Typography>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
