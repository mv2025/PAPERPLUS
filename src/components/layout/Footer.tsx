import React from 'react';
import { Typography } from '../ui/Typography';
import { MapPin, Phone, Mail } from 'lucide-react';

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
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-2">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#E5232E] hover:text-white hover:border-[#E5232E] transition-all text-white shadow-sm" title="Instagram" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#E5232E] hover:text-white hover:border-[#E5232E] transition-all text-white shadow-sm" title="Facebook" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.706 5H18V0h-3.808C10.511 0 9 1.494 9 4.833V8z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#E5232E] hover:text-white hover:border-[#E5232E] transition-all text-white shadow-sm" title="LinkedIn" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919810001279" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#E5232E] hover:text-white hover:border-[#E5232E] transition-all text-white shadow-sm" title="WhatsApp" aria-label="WhatsApp">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </a>
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
          <div className="lg:col-span-4 flex flex-col">
            <Typography variant="small" className="text-white font-bold mb-6 uppercase tracking-wider">
              Contact Us
            </Typography>
            <ul className="flex flex-col gap-4 text-sm text-sky/70">
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#E5232E] flex-shrink-0 group-hover:bg-[#E5232E] group-hover:text-white transition-colors mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">Headquarters</span>
                  <span className="leading-relaxed">
                    Paper Plus Calendars Pvt. Ltd., <br />
                    4094, Nai Sarak, Old Delhi, Dai Wara, <br />
                    Chandni Chowk, Delhi, 110006
                  </span>
                </div>
              </li>
              
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#E5232E] flex-shrink-0 group-hover:bg-[#E5232E] group-hover:text-white transition-colors shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">Phone Support</span>
                  <a href="tel:+919810001279" className="hover:text-white transition-colors font-medium">
                    +91 98100 01279
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#E5232E] flex-shrink-0 group-hover:bg-[#E5232E] group-hover:text-white transition-colors shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-[11px] uppercase tracking-wider mb-0.5">Email Inquiry</span>
                  <a href="mailto:sales@paperplus.online" className="hover:text-white transition-colors font-medium">
                    sales@paperplus.online
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography variant="small" className="text-sky/50 text-xs">
            © {new Date().getFullYear()} Paper Plus Calendars Pvt. Ltd. All rights reserved.
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
