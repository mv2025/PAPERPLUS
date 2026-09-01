import React from 'react';
import { Typography } from '../ui/Typography';
import { Globe, Camera, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

import paperPlusLogo from '@/assets/Paper Plus LOGO.png';

const FOOTER_SECTIONS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Manufacturing", href: "/products" },
      { label: "Corporate Solutions", href: "/corporate" },
      { label: "Get Quote", href: "/quote" }
    ]
  },
  {
    title: "Products",
    links: [
      { label: "Wall Calendars", href: "/products?category=wall" },
      { label: "Desk Calendars", href: "/products?category=desk" },
      { label: "Corporate Series", href: "/corporate" },
      { label: "Religious Theme", href: "/religious-theme" }
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-navy pt-24 pb-12 relative overflow-hidden text-white">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <a href="/" className="inline-flex flex-col group transition-transform duration-300 hover:scale-105 origin-left w-fit">
              <div className="flex items-start">
                <span className="font-serif text-3xl sm:text-4xl font-black tracking-tight text-[#E5232E] leading-none">
                  Paper Plus
                </span>
                <span className="text-[10px] font-sans font-bold text-white/90 ml-0.5 mt-0.5">TM</span>
              </div>
              <span className="font-serif text-sm tracking-wider text-white font-medium mt-1">
                Premium Calendars
              </span>
            </a>
            <Typography variant="muted" className="text-sky/70 pr-4">
              Premium calendar manufacturing and corporate gifting solutions. Delivering quality across India with precision and care.
            </Typography>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-navy hover:border-primary transition-all text-white"><Camera className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-navy hover:border-primary transition-all text-white"><Globe className="w-4 h-4" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-navy hover:border-primary transition-all text-white"><MessageCircle className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="lg:col-span-2">
              <Typography variant="small" className="text-white font-bold mb-6 uppercase tracking-wider">
                {section.title}
              </Typography>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-sky/70 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                      <span className="w-0 h-[1px] bg-primary group-hover:w-3 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Typography variant="small" className="text-white font-bold mb-2 uppercase tracking-wider">
              Contact Us
            </Typography>
            <div className="flex flex-col gap-4 text-sm text-sky/70">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>ARG Calendars Pvt. Ltd., <br/>Industrial Area, New Delhi, India 110020</span>
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+918860477341">+91 88604 77341</a>
              </p>
              <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:sales@paperplus.online">sales@paperplus.online</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography variant="small" className="text-sky/50 text-xs">
            © {new Date().getFullYear()} ARG Calendars Pvt. Ltd. All rights reserved.
          </Typography>
          <div className="flex items-center gap-6 text-xs text-sky/50">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
