import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '../components/ui/Typography';
import { Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

// Real Product Assets
import asset01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import asset02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import religiousHero from '@/assets/foundation/religious.jpg';
import downloadCharDham from '@/assets/foundation/download (4).jpg';
import asset21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import bigWishLogo from '@/assets/Big Wish LOGO.png';

export default function About() {
  return (
    <div className="w-full bg-[#FAF6EC] pt-32 pb-24 text-[#141F42]">
      {/* Hero Section */}
      <section className="text-center px-6 max-w-6xl mx-auto mb-20">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4 border border-primary/20">
          Paper Plus™ Calendars
        </span>
        <Typography variant="h1" className="text-navy text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Crafting Legacy With <span className="text-primary italic">Paper Plus</span>
        </Typography>
        <Typography variant="lead" className="max-w-3xl mx-auto mb-12 text-[#5C6478]">
          Passing down 85+ years of generational mastery to shape the calendar manufacturing industry with world-class printing innovations, bespoke desk memo boxes, and devotional wall panchang art.
        </Typography>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-[#E8E1D0] rounded-2xl p-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1935</div>
            <div className="text-[#5C6478] font-semibold">Year Established</div>
          </div>
          <div className="bg-white border border-[#E8E1D0] rounded-2xl p-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">85+</div>
            <div className="text-[#5C6478] font-semibold">Years of Mastery</div>
          </div>
          <div className="bg-white border border-[#E8E1D0] rounded-2xl p-8 text-center shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-[#5C6478] font-semibold">Unique Annual Designs</div>
          </div>
        </div>
      </section>

      {/* Story Sections with Authentic Product Imagery */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        {/* Row 1: Printing Technology & Desk Calendar Craftsmanship */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 lg:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DA2030]/10 border border-[#DA2030]/20 text-xs font-extrabold uppercase tracking-widest text-[#DA2030] mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Precision Engineering
            </div>
            <Typography variant="h2" className="text-[#141F42] text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              Pioneering Advanced Printing &amp; Desk Craftsmanship
            </Typography>
            <Typography variant="p" className="text-[#5C6478] text-base sm:text-lg mb-4 leading-relaxed">
              With over 85 years of experience passed down through generations, we manufacture high-grade calendars and bespoke corporate desk sets under our premier brand <strong className="text-[#141F42] font-bold">Paper Plus</strong>.
            </Typography>
            <Typography variant="p" className="text-[#5C6478] text-base sm:text-lg mb-6 leading-relaxed">
              From our flagship 2027 Flip Calendar Memo Boxes to precision thermal lamination, gold foil embossing, and heavy-gauge wire binding, every unit is engineered for daily desk utility all 365 days of the year.
            </Typography>
            <div className="flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                ✓ 400-Sheet Memo Cube
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                ✓ Twin-Wire Spiral Hinges
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                ✓ Metallic Gold Foil Stamping
              </span>
            </div>
          </div>
          <div className="bg-white border border-[#E8E1D0] rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg border border-[#E8E1D0] shadow-sm z-10">
              <img src={bigWishLogo} alt="Big Wish" className="h-4 sm:h-5 w-auto object-contain" />
            </div>
            <img 
              src={asset01} 
              alt="Paper Plus 2027 Flip Calendar Memo Box" 
              className="w-full max-h-[340px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Row 2: 100% Original Devotional & Wall Calendars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 bg-white border border-[#E8E1D0] rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute top-4 left-4 bg-[#DA2030] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow z-10">
              2027 Original Edition
            </div>
            <img 
              src={religiousHero} 
              alt="Paper Plus 750 Pratham Ganesh 2027 Wall Calendar" 
              className="w-full max-h-[340px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md rounded-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DA2030]/10 border border-[#DA2030]/20 text-xs font-extrabold uppercase tracking-widest text-[#DA2030] mb-4">
              <Award className="w-3.5 h-3.5" /> 100% Original Portfolio
            </div>
            <Typography variant="h2" className="text-[#141F42] text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              100% Originality, Every Single Year
            </Typography>
            <Typography variant="p" className="text-[#5C6478] text-base sm:text-lg mb-4 leading-relaxed">
              Paper Plus adheres to a strict policy: <strong className="text-[#141F42] font-bold">we never repeat a design</strong> next year. Every single season, our creative team completely revamps our entire devotional and decorative portfolio from scratch.
            </Typography>
            <Typography variant="p" className="text-[#5C6478] text-base sm:text-lg mb-6 leading-relaxed">
              We eliminate mundane, repetitive imagery, providing homes, corporate offices, and institutions with fresh, vibrant Vedic shloka artwork, gold foil panchang grids, and timeless hanging loops.
            </Typography>
            <div className="flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                ✓ Top Tin Rim &amp; Loop
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                ✓ 100+ Devotional Themes
              </span>
              <span className="px-3.5 py-1.5 bg-white border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                ✓ Individual Envelope Packaging
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Masterclass Section */}
      <HorizontalProcess />

      {/* Leadership Section */}
      <section className="py-24 bg-surface mt-20 border-t border-surface-hover">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Typography variant="h2" className="text-navy mb-4">Leadership & Vision</Typography>
            <Typography variant="lead" className="max-w-2xl mx-auto">
              Guided by heritage, strategic vision, and modern operational excellence.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder */}
            <div className="bg-white rounded-3xl overflow-hidden border border-surface-hover shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="h-48 bg-gradient-to-br from-[#14244a] to-[#1e3466] flex flex-col items-center justify-center relative p-6 border-b border-[#e8dfd0]">
                <div className="w-20 h-20 rounded-full bg-[#faf6ec] border-2 border-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="font-serif font-black text-xl text-[#14244a]">PP</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mt-3">FOUNDER • 1935</span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Founder</div>
                  <Typography variant="h3" className="text-navy mb-4 text-2xl">Late Mr. Anant Ram Gupta</Typography>
                  <Typography variant="small" className="text-muted">Founded Paper Plus Calendars in 1935. Dedicated his entire life to building the company's legacy and standardizing operations with timeless integrity.</Typography>
                </div>
                <div className="mt-6 self-start px-4 py-1.5 bg-surface rounded-full text-[11px] uppercase tracking-wider font-bold text-muted border border-surface-hover">Legacy Founder</div>
              </div>
            </div>

            {/* Director 1 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-surface-hover shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="h-48 bg-gradient-to-br from-[#14244a] to-[#1e3466] flex flex-col items-center justify-center relative p-6 border-b border-[#e8dfd0]">
                <div className="w-20 h-20 rounded-full bg-[#faf6ec] border-2 border-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="font-serif font-black text-2xl text-[#14244a]">RG</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mt-3">DIRECTOR</span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Director</div>
                  <Typography variant="h3" className="text-navy mb-4 text-2xl">Mr. Rajiv Gupta</Typography>
                  <Typography variant="small" className="text-muted">Son of the Founder. Joined early to master the trade. A master tactician who leads technology investment, introducing heavy industrial machinery to the plant.</Typography>
                </div>
                <div className="mt-6 self-start px-4 py-1.5 bg-surface rounded-full text-[11px] uppercase tracking-wider font-bold text-muted border border-surface-hover">Technology & Vision</div>
              </div>
            </div>

            {/* Director 2 */}
            <div className="bg-white rounded-3xl overflow-hidden border border-surface-hover shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
              <div className="h-48 bg-gradient-to-br from-[#14244a] to-[#1e3466] flex flex-col items-center justify-center relative p-6 border-b border-[#e8dfd0]">
                <div className="w-20 h-20 rounded-full bg-[#faf6ec] border-2 border-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <span className="font-serif font-black text-2xl text-[#14244a]">AG</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mt-3">DIRECTOR</span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Director</div>
                  <Typography variant="h3" className="text-navy mb-4 text-2xl">Mr. Ankit Gupta</Typography>
                  <Typography variant="small" className="text-muted">Grandson of the Founder. Joined after completing his MBA to oversee operations, bringing dynamic energy and modern management to order execution.</Typography>
                </div>
                <div className="mt-6 self-start px-4 py-1.5 bg-surface rounded-full text-[11px] uppercase tracking-wider font-bold text-muted border border-surface-hover">Operations & Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const HorizontalProcess = () => {
  const PROCESS_STEPS = [
    {
      id: 0,
      stage: 'STAGE 01',
      title: 'Heavyweight Paper Stock & Gold Foil',
      subtitle: 'Raw Stock Selection',
      desc: 'We select heavy 250 GSM imported art card and textured virgin kraft. Engineered with zero curl memory, holding deep saturated inks and withstanding 140°C hot-stamp metallic gold foil without wrinkling.',
      img: religiousHero,
      badge: '250 GSM Art Stock',
      specs: ['250 GSM Premium', '140°C Hot Stamped', '365-Day Zero Curl']
    },
    {
      id: 1,
      stage: 'STAGE 02',
      title: 'High-Definition 6-Color Offset Printing',
      subtitle: 'Micro-Screen Calibration',
      desc: 'Each production run is executed on German 6-color industrial offset presses. Running CMYK plus 2 custom Pantone metallics at 2400 DPI micro-screening to capture every detail.',
      img: asset21,
      badge: '2400 DPI Micro-Screen',
      specs: ['German 6-Color Press', '2400 DPI Ultra HD', 'Fade-Resistant Inks']
    },
    {
      id: 2,
      stage: 'STAGE 03',
      title: 'Velvet Thermal Film & Protective UV Shield',
      subtitle: 'Surface Protection',
      desc: 'A micro-thin, velvet-touch thermal lamination film is heat-bonded to the print surface. This shields the artwork from fingerprints, desk spills, and humidity throughout the year.',
      img: asset02,
      badge: 'Velvet Anti-Scratch',
      specs: ['Velvet Soft-Touch', 'Thermal Heat Fusion', 'Water & Oil Proof']
    },
    {
      id: 3,
      stage: 'STAGE 04',
      title: 'Twin-Wire Hinges & Tin Rim Top Binding',
      subtitle: 'Assembly & Finishing',
      desc: 'Wall editions receive machine-crimped steel top tin rims with integrated hanging loops. Desk editions are fitted with heavy-gauge steel Wire-O spiral bindings and paired with 400-sheet memo blocks.',
      img: asset01,
      badge: 'Reinforced Steel Wire-O',
      specs: ['Tin Plated Steel Rim', 'Twin-Loop Wire-O', '400 Sheets Pre-Loaded']
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#FAF6EC] border-t border-[#E8E1D0] text-[#141F42]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DA2030]/10 text-[#DA2030] text-xs font-extrabold uppercase tracking-widest mb-3 border border-[#DA2030]/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Craftsmanship Masterclass
          </span>
          <Typography variant="h2" className="text-[#141F42] text-3xl sm:text-4xl font-extrabold mb-3 leading-tight">
            How Every <span className="text-[#DA2030]">Paper Plus</span> Calendar is Engineered
          </Typography>
          <Typography variant="lead" className="text-[#5C6478] text-base sm:text-lg max-w-2xl mx-auto">
            From raw 250 GSM stock and hot-stamped gold foil to precision 6-color presses and steel Wire-O assembly.
          </Typography>
        </div>

        {/* 4 Clean Self-Contained Stage Cards (No Tab Switcher Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div 
              key={step.id}
              className="bg-white border border-[#E8E1D0] rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#DA2030] text-white text-xs font-extrabold uppercase tracking-wider shadow-sm">
                    {step.stage}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#5C6478]">
                    {step.subtitle}
                  </span>
                </div>

                <Typography variant="h3" className="text-xl sm:text-2xl font-extrabold text-[#141F42] mb-3 leading-snug">
                  {step.title}
                </Typography>

                <p className="text-[#5C6478] text-sm sm:text-base leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Specs Pill Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {step.specs.map((spec, i) => (
                    <span key={i} className="px-3 py-1 bg-[#FAF6EC] border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Thumbnail Artwork Container */}
              <div className="bg-[#FAF6EC] border border-[#E8E1D0] rounded-2xl p-4 flex items-center justify-center relative overflow-hidden h-[200px] sm:h-[230px]">
                <span className="absolute top-3 left-3 bg-[#141F42] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow z-10">
                  {step.badge}
                </span>
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-contain drop-shadow-md rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

