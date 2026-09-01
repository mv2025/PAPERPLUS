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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DA2030] mb-3">
              <Sparkles className="w-4 h-4" /> Precision Engineering
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
          <div className="bg-white border border-[#E8E1D0] rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg border border-[#E8E1D0] shadow-sm z-10">
              <img src={bigWishLogo} alt="Big Wish" className="h-4 w-auto object-contain" />
            </div>
            <img 
              src={asset01} 
              alt="Paper Plus 2027 Flip Calendar Memo Box" 
              className="w-full h-[360px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
            />
          </div>
        </div>

        {/* Row 2: 100% Original Devotional & Wall Calendars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white border border-[#E8E1D0] rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute top-4 left-4 bg-[#DA2030] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow z-10">
              2027 Original Edition
            </div>
            <img 
              src={religiousHero} 
              alt="Paper Plus 750 Pratham Ganesh 2027 Wall Calendar" 
              className="w-full h-[380px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md rounded-xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#DA2030] mb-3">
              <Award className="w-4 h-4" /> 100% Original Portfolio
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

      {/* Process Section (Horizontal Scroll) */}
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
                  <span className="font-serif font-black text-2xl text-[#14244a]">ARG</span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary mt-3">FOUNDER • 1935</span>
              </div>
              <div className="p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Founder</div>
                  <Typography variant="h3" className="text-navy mb-4 text-2xl">Late Mr. Anant Ram Gupta</Typography>
                  <Typography variant="small" className="text-muted">Founded ARG Calendars in 1935. Dedicated his entire life to building the company's legacy and standardizing operations with timeless integrity.</Typography>
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);

  useEffect(() => {
    const updateTranslate = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Calculate exact scroll distance needed so last card stops cleanly at screen edge
        setMaxTranslate(Math.max(0, totalWidth - viewportWidth + 64));
      }
    };

    updateTranslate();
    window.addEventListener('resize', updateTranslate);
    return () => window.removeEventListener('resize', updateTranslate);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const totalScrollable = wrapRef.current.scrollHeight - window.innerHeight;
      const raw = -rect.top;
      const p = totalScrollable > 0 ? Math.min(Math.max(raw / totalScrollable, 0), 1) : 0;

      setProgress(p);
      setActiveStep(Math.min(3, Math.floor(p * 4)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (stepIndex: number) => {
    if (!wrapRef.current) return;
    const top = wrapRef.current.offsetTop;
    const totalScrollable = wrapRef.current.scrollHeight - window.innerHeight;
    const targetY = top + (stepIndex / 3) * totalScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <section ref={wrapRef} className="relative h-[300vh] bg-[#FAFAF8] text-[#14161C] border-t border-[#E4E1DA]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-8">
        {/* Process Header */}
        <div className="max-w-6xl mx-auto px-6 w-full mb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-widest text-[#9C7A3C] mb-3">
            <span className="w-5 h-[1px] bg-[#9C7A3C] inline-block" /> Our Process
          </div>
          <Typography variant="h2" className="text-[#14161C] text-3xl sm:text-4xl font-bold mb-3">
            How every calendar is made.
          </Typography>
          <p className="text-[#5B5F6B] text-sm sm:text-base max-w-2xl mb-8">
            Four stages take each calendar from raw stock to a finished product built to last the full year. Scroll to follow the journey.
          </p>

          {/* Interactive Progress Rail */}
          <div className="relative h-10 w-full pt-1">
            <div className="absolute top-2 left-0 right-0 h-[2px] bg-[#E4E1DA]" />
            <div 
              className="absolute top-2 left-0 h-[2px] bg-[#1F3A5F] transition-all duration-150"
              style={{ width: `${progress * 100}%` }}
            />
            <div 
              className="absolute top-[3px] w-3 h-3 bg-[#1F3A5F] rotate-45 transition-all duration-150 -ml-1.5 shadow-md"
              style={{ left: `${progress * 100}%` }}
            />
            <div className="absolute top-5 left-0 right-0 flex justify-between font-mono text-xs text-[#9296A1]">
              {[
                { id: 0, label: '01 Paper' },
                { id: 1, label: '02 Printing' },
                { id: 2, label: '03 Lamination' },
                { id: 3, label: '04 Binding' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToStep(s.id)}
                  className={`transition-colors hover:text-[#1F3A5F] cursor-pointer ${activeStep >= s.id ? 'text-[#1F3A5F] font-bold' : ''}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="w-full overflow-hidden">
          <div 
            ref={trackRef}
            className="flex items-stretch px-6 sm:px-12 gap-8 transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `translate3d(${-progress * maxTranslate}px, 0, 0)` }}
          >
            {/* Panel 1: Paper */}
            <div className={`w-[320px] sm:w-[420px] flex-none p-8 md:p-10 bg-white border rounded-2xl flex flex-col justify-between transition-all duration-300 ${activeStep === 0 ? 'border-[#1F3A5F] shadow-2xl scale-100 opacity-100 ring-2 ring-[#1F3A5F]/10' : 'border-[#E4E1DA] opacity-60 scale-95'}`}>
              <div>
                <div className="font-mono text-xs text-[#9296A1] mb-6 flex justify-between items-center">
                  <span><b className="text-[#1F3A5F] text-sm">01</b> / 04</span>
                  <span className="px-3 py-1 bg-[#FAF6EC] rounded-full text-[11px] font-bold text-[#9C7A3C]">Stage 1</span>
                </div>
                <div className="w-16 h-16 mb-6">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <rect x="14" y="20" width="34" height="38" rx="2" fill="#FFF" stroke="#14161C" strokeWidth="1.5" />
                    <rect x="10" y="14" width="34" height="38" rx="2" fill="#FFF" stroke="#14161C" strokeWidth="1.5" />
                    <rect x="6" y="8" width="34" height="38" rx="2" fill="#FFF" stroke="#1F3A5F" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#14161C] mb-3">Paper Stock Selection</h3>
                <p className="text-sm text-[#5B5F6B] leading-relaxed">
                  Heavyweight 250gsm uncoated stock specially chosen for how evenly it holds ink and maintains paper rigidity across all 12 months.
                </p>
              </div>
            </div>

            {/* Panel 2: Printing */}
            <div className={`w-[320px] sm:w-[420px] flex-none p-8 md:p-10 bg-white border rounded-2xl flex flex-col justify-between transition-all duration-300 ${activeStep === 1 ? 'border-[#1F3A5F] shadow-2xl scale-100 opacity-100 ring-2 ring-[#1F3A5F]/10' : 'border-[#E4E1DA] opacity-60 scale-95'}`}>
              <div>
                <div className="font-mono text-xs text-[#9296A1] mb-6 flex justify-between items-center">
                  <span><b className="text-[#1F3A5F] text-sm">02</b> / 04</span>
                  <span className="px-3 py-1 bg-[#FAF6EC] rounded-full text-[11px] font-bold text-[#9C7A3C]">Stage 2</span>
                </div>
                <div className="w-16 h-16 mb-6">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <rect x="10" y="24" width="44" height="32" rx="2" fill="#FFF" stroke="#14161C" strokeWidth="1.5" />
                    <line x1="16" y1="33" x2="48" y2="33" stroke="#1F3A5F" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="16" y1="41" x2="48" y2="41" stroke="#14161C" strokeWidth="2" strokeLinecap="round" />
                    <line x1="16" y1="49" x2="38" y2="49" stroke="#14161C" strokeWidth="2" strokeLinecap="round" />
                    <rect x="8" y="8" width="48" height="11" rx="2" fill="#1F3A5F" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#14161C] mb-3">Color Precision Printing</h3>
                <p className="text-sm text-[#5B5F6B] leading-relaxed">
                  Each month is set and run through industrial offset presses, color by color, until every detail matches digital color calibration.
                </p>
              </div>
            </div>

            {/* Panel 3: Lamination */}
            <div className={`w-[320px] sm:w-[420px] flex-none p-8 md:p-10 bg-white border rounded-2xl flex flex-col justify-between transition-all duration-300 ${activeStep === 2 ? 'border-[#1F3A5F] shadow-2xl scale-100 opacity-100 ring-2 ring-[#1F3A5F]/10' : 'border-[#E4E1DA] opacity-60 scale-95'}`}>
              <div>
                <div className="font-mono text-xs text-[#9296A1] mb-6 flex justify-between items-center">
                  <span><b className="text-[#1F3A5F] text-sm">03</b> / 04</span>
                  <span className="px-3 py-1 bg-[#FAF6EC] rounded-full text-[11px] font-bold text-[#9C7A3C]">Stage 3</span>
                </div>
                <div className="w-16 h-16 mb-6">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <rect x="10" y="10" width="44" height="44" rx="2" fill="#FFF" stroke="#14161C" strokeWidth="1.5" />
                    <line x1="16" y1="22" x2="48" y2="22" stroke="#1F3A5F" strokeWidth="2" />
                    <line x1="16" y1="30" x2="48" y2="30" stroke="#14161C" strokeWidth="1.5" opacity="0.4" />
                    <line x1="16" y1="38" x2="40" y2="38" stroke="#14161C" strokeWidth="1.5" opacity="0.4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#14161C] mb-3">Thermal Lamination</h3>
                <p className="text-sm text-[#5B5F6B] leading-relaxed">
                  A thin protective matte or gloss film is heat-sealed over every page, shielding the calendar from sunlight, spills, and fingerprints.
                </p>
              </div>
            </div>

            {/* Panel 4: Binding */}
            <div className={`w-[320px] sm:w-[420px] flex-none p-8 md:p-10 bg-white border rounded-2xl flex flex-col justify-between transition-all duration-300 ${activeStep === 3 ? 'border-[#1F3A5F] shadow-2xl scale-100 opacity-100 ring-2 ring-[#1F3A5F]/10' : 'border-[#E4E1DA] opacity-60 scale-95'}`}>
              <div>
                <div className="font-mono text-xs text-[#9296A1] mb-6 flex justify-between items-center">
                  <span><b className="text-[#1F3A5F] text-sm">04</b> / 04</span>
                  <span className="px-3 py-1 bg-[#FAF6EC] rounded-full text-[11px] font-bold text-[#9C7A3C]">Stage 4</span>
                </div>
                <div className="w-16 h-16 mb-6">
                  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                    <rect x="18" y="10" width="38" height="44" rx="2" fill="#FFF" stroke="#14161C" strokeWidth="1.5" />
                    <circle cx="18" cy="19" r="2.5" fill="#FFF" stroke="#14161C" strokeWidth="1.25" />
                    <circle cx="18" cy="32" r="2.5" fill="#FFF" stroke="#14161C" strokeWidth="1.25" />
                    <circle cx="18" cy="45" r="2.5" fill="#FFF" stroke="#14161C" strokeWidth="1.25" />
                    <path d="M9 14 Q19 18 9 22 Q19 26 9 30 Q19 34 9 38 Q19 42 9 46 Q19 50 9 54" fill="none" stroke="#9C7A3C" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#14161C] mb-3">Spiral Wire Binding</h3>
                <p className="text-sm text-[#5B5F6B] leading-relaxed">
                  Sheets are precision-punched and set onto a heavy metallic twin-wire spiral, allowing pages to turn smoothly and lie 100% flat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

