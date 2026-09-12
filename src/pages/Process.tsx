import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Sparkles, CheckCircle2, ChevronDown, Award, ShieldCheck, Factory, Layers, Printer, PackageCheck, Feather } from 'lucide-react';
import { GoldRule, EditorialWatermark, PaperLayer } from '@/design/DecorativeElements';
import { editorialReveal } from '@/animations/signature';

// Foundation Paper Textures
import img1 from '@/assets/foundation/1.jpg';
import img2 from '@/assets/foundation/2.jpg';
import img3 from '@/assets/foundation/3.jpg';

// Product & Manufacturing Assets
import religiousHero from '@/assets/foundation/religious.jpg';
import downloadCharDham from '@/assets/foundation/download (4).jpg';
import asset01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import asset02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import asset21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';

const PAPER_TEXTURES = [
  {
    src: img1,
    label: "Uncoated Ivory 240 GSM",
    desc: "Warm natural texture with organic tactile grain"
  },
  {
    src: img2,
    label: "Textured Linen 300 GSM",
    desc: "Cross-hatched weave for luxury corporate editions"
  },
  {
    src: img3,
    label: "Glossy Art Card 170 GSM",
    desc: "Ultra-smooth surface engineered for HD offset ink reflection"
  }
];

const PROCESS_STEPS = [
  {
    id: 0,
    stage: 'STAGE 01',
    title: 'Paper Stock Selection & Raw Material Sourcing',
    subtitle: 'The Foundation of Quality',
    icon: Layers,
    desc: 'We source pure virgin pulp 250 GSM imported art paper and textured cardstock globally. Every batch undergoes strict humidity testing, ensuring zero curl memory, optimal ink absorption, and deep color saturation.',
    img: religiousHero,
    badge: '250 GSM Virgin Pulp Art Card',
    specs: ['250 GSM Premium Art Paper', '365-Day Zero Curl Memory', 'Humidity & Moisture Tested'],
    highlights: [
      'Pure virgin pulp ensures uniform ink absorption across every single page.',
      'High-pressure gold foil embossing creates raised tactile shlokas and brand logos.',
      'UV barrier coating prevents yellowing from natural indoor ambient light.'
    ]
  },
  {
    id: 1,
    stage: 'STAGE 02',
    title: 'High-Definition 6-Color Offset Printing',
    subtitle: 'Micro-Screen Color Calibration',
    icon: Printer,
    desc: 'Executed on German 6-color offset printing presses. Running CMYK plus 2 custom Pantone metallics at 2400 DPI micro-screening to capture every detail of divine artwork and crisp date numerals.',
    img: asset21,
    badge: '2400 DPI Micro-Screening',
    specs: ['German 6-Color Offset Press', '2400 DPI Ultra HD Resolution', 'Lightfast Fade-Resistant Inks'],
    highlights: [
      'Precision printing cylinders eliminate double-image blurring and register drift.',
      'High-density lightfast inks produce rich, deep jewel tones that stay bright all year.',
      'Automated spectrophotometer inspects every sheet for exact color fidelity.'
    ]
  },
  {
    id: 2,
    stage: 'STAGE 03',
    title: 'Velvet Thermal Film & Protective UV Lamination',
    subtitle: 'Surface Protection & Tactile Touch',
    icon: ShieldCheck,
    desc: 'A micro-thin, velvet-touch thermal lamination film is heat-bonded to the print surface at 140°C. This protects artwork against fingerprints, liquid spills, desk friction, and humidity.',
    img: asset02,
    badge: 'Velvet Soft-Touch Lamination',
    specs: ['Velvet Soft-Touch Lamination', '140°C Thermal Heat Fusion', 'Fingerprint & Water Proof'],
    highlights: [
      'Thermal heat fusion permanently bonds film without air bubbles or peeling edges.',
      'Matte glare reduction makes monthly date grids legible from all viewing angles.',
      'Scratch-resistant barrier keeps desk boxes looking pristine through December.'
    ]
  },
  {
    id: 3,
    stage: 'STAGE 04',
    title: 'Twin-Wire Hinges & Tin Rim Top Binding',
    subtitle: 'Precision Assembly & Finishing',
    icon: Factory,
    desc: 'Wall editions are fitted with machine-crimped steel top tin rims and integrated hanging loops. Desk sets feature heavy-gauge steel Wire-O spiral bindings and paired 400-sheet memo cubes.',
    img: asset01,
    badge: 'Reinforced Steel Wire-O',
    specs: ['Crimped Steel Tin Rim', 'Twin-Loop Steel Wire-O', '400-Sheet Memo Refill'],
    highlights: [
      'Tin rim top holds wall calendars completely straight without bottom sagging.',
      'Precision 360-degree flip hinge turns smoothly without tearing page perforations.',
      'Every unit is hand-inspected before insertion into custom paper envelopes or boxes.'
    ]
  },
  {
    id: 4,
    stage: 'STAGE 05',
    title: 'Quality Assurance & Eco-Friendly Packaging',
    subtitle: 'Final Inspection & Logistics',
    icon: PackageCheck,
    desc: 'Each unit undergoes a 12-point manual quality audit covering registration, foil clarity, binding strength, and sheet count before individual shrink-wrapping and boxed dispatch.',
    img: downloadCharDham,
    badge: '100% Inspected & Sleeved',
    specs: ['12-Point QA Checklist', 'Individual Paper Envelope', 'Pan-India Freight Logistics'],
    highlights: [
      'Manual line inspection ensures zero defective units enter final packaging.',
      'Recyclable paper envelopes and eco-friendly protective packaging materials.',
      'Direct dispatch from Sahibabad factory to corporate clients pan-India.'
    ]
  }
];

export const Process = () => {
  const [expandedStage, setExpandedStage] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#FAF6EC] pt-24 sm:pt-28 pb-20 sm:pb-24 text-[#141F42] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <section className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DA2030]/10 text-[#DA2030] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#DA2030]/20 shadow-sm">
            <Feather className="w-4 h-4" /> The Master Printer's Art
          </span>
          
          <Typography variant="h1" className="text-[#141F42] text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            How Every <span className="font-serif italic font-normal text-[#DA2030]">Paper Plus</span> Calendar is Crafted
          </Typography>
          
          <p className="text-[#5C6478] text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            From raw virgin pulp paper selection and 6-color offset printing to 140°C thermal velvet lamination and precision steel Wire-O binding — discover 85+ years of print mastery.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="bg-white border border-[#E8E1D0] px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-sm flex items-center gap-3">
              <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-[#DA2030]" />
              <span className="text-xs font-bold text-[#141F42]">Sahibabad Factory Unit</span>
            </div>
            <div className="bg-white border border-[#E8E1D0] px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-sm flex items-center gap-3">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#DA2030]" />
              <span className="text-xs font-bold text-[#141F42]">85+ Years Print Mastery</span>
            </div>
            <div className="bg-white border border-[#E8E1D0] px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl shadow-sm flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#DA2030]" />
              <span className="text-xs font-bold text-[#141F42]">100% Quality Audited</span>
            </div>
          </div>
        </section>

        {/* Exclusive Foundation Paper Texture Section */}
        <section className="relative w-full bg-[#FBF9F6] py-12 sm:py-16 rounded-3xl border border-[#E8DFD0] mb-16 sm:mb-20 overflow-hidden shadow-lg">
          <EditorialWatermark text="CRAFT" className="top-6 -left-6 text-[#141F42]/[0.03]" />
          
          <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-5 sm:gap-6">
              <GoldRule className="w-16" />
              
              <motion.div variants={editorialReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-[#DA2030] font-bold tracking-[0.2em] uppercase text-xs mb-2 block">
                  01. THE FOUNDATION
                </span>
                <Typography variant="h2" className="text-[#141F42] text-2xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                  It begins with the <br />
                  <span className="font-serif italic font-normal text-[#DA2030]">perfect paper.</span>
                </Typography>
                <p className="text-[#5C6478] text-sm sm:text-base leading-relaxed mb-4">
                  We source only the finest uncoated ivory, gloss art card, and textured linen stocks globally. The tactile feel of a calendar is the first point of contact with your brand, and we ensure it communicates absolute quality.
                </p>
                <p className="text-[#5C6478] text-sm sm:text-base leading-relaxed">
                  Every batch undergoes strict humidity and tension testing before it ever sees a drop of ink, ensuring flawless registration and zero warp throughout the year.
                </p>
              </motion.div>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-white border border-[#E8E1D0] rounded-full text-xs font-semibold text-[#141F42] shadow-xs">
                  • 240 GSM Uncoated Ivory
                </span>
                <span className="px-3 py-1 bg-white border border-[#E8E1D0] rounded-full text-xs font-semibold text-[#141F42] shadow-xs">
                  • 300 GSM Linen Weave
                </span>
                <span className="px-3 py-1 bg-white border border-[#E8E1D0] rounded-full text-xs font-semibold text-[#141F42] shadow-xs">
                  • 170 GSM Gloss Art Card
                </span>
              </div>
            </div>

            {/* Right Paper Collage */}
            <div className="w-full md:w-1/2 relative h-[260px] sm:h-[340px] lg:h-[400px]">
              <PaperLayer className="hidden sm:block w-[80%] h-[90%] -left-4 top-10 rotate-[-2deg] bg-[#FAF6EC] shadow-xl" />
              <PaperLayer className="hidden sm:block w-[85%] h-[95%] left-4 top-4 rotate-[1deg] bg-[#FAF6EC] shadow-xl" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 bg-[#FAF6EC] rounded-2xl shadow-xl z-10 p-2.5 sm:p-3 flex overflow-hidden border border-[#E8DFD0]"
              >
                <div className="w-full h-full grid grid-cols-2 grid-rows-3 gap-2 sm:gap-3">
                  
                  {/* Macro Paper Image 1 */}
                  <div className="col-span-2 row-span-2 relative overflow-hidden bg-[#F5EEDC] rounded-lg group">
                    <img 
                      src={PAPER_TEXTURES[0].src} 
                      alt="Uncoated Ivory Paper Texture" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#141F42]/70 to-transparent opacity-90 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 text-white">
                      <span className="text-xs font-bold tracking-widest uppercase block text-white">Uncoated Ivory 240GSM</span>
                      <span className="text-[10px] font-mono text-white/80">Macro Paper Texture</span>
                    </div>
                  </div>

                  {/* Texture Image 2 */}
                  <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#F5EEDC] rounded-lg group">
                    <img 
                      src={PAPER_TEXTURES[1].src} 
                      alt="Linen Texture" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#141F42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 text-white text-[9px] font-bold tracking-wider uppercase drop-shadow">
                      Textured Linen
                    </div>
                  </div>

                  {/* Texture Image 3 */}
                  <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#F5EEDC] rounded-lg group">
                    <img 
                      src={PAPER_TEXTURES[2].src} 
                      alt="Art Card" 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#141F42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute bottom-2 left-2 text-white text-[9px] font-bold tracking-wider uppercase drop-shadow">
                      Gloss Art Card
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Typography variant="h2" className="text-[#141F42] text-2xl sm:text-4xl font-extrabold mb-3">
              5 Precision Steps to <span className="font-serif italic font-normal text-[#DA2030]">Perfection</span>
            </Typography>
            <p className="text-[#5C6478] text-sm sm:text-base max-w-xl mx-auto">
              Click any stage below to inspect our industrial machinery specifications, quality benchmarks, and finishing standards.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {PROCESS_STEPS.map((step) => {
              const isExpanded = expandedStage === step.id;
              const IconComp = step.icon;
              return (
                <div 
                  key={step.id}
                  className={`bg-white border rounded-3xl overflow-hidden transition-all duration-300 shadow-md ${
                    isExpanded ? 'border-[#DA2030]/60 ring-2 ring-[#DA2030]/20 shadow-xl' : 'border-[#E8E1D0] hover:border-[#141F42]/40'
                  }`}
                >
                  <button
                    onClick={() => setExpandedStage(isExpanded ? null : step.id)}
                    className={`w-full min-h-[84px] p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer active:scale-98 touch-manipulation ${
                      isExpanded ? 'bg-[#141F42] text-white' : 'bg-white text-[#141F42] hover:bg-[#FAF6EC]/60'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isExpanded ? 'bg-[#DA2030] text-white' : 'bg-[#FAF6EC] text-[#141F42] border border-[#E8E1D0]'
                      }`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-widest block mb-0.5 ${
                          isExpanded ? 'text-[#DA2030]' : 'text-[#8D96A8]'
                        }`}>
                          {step.stage} • {step.subtitle}
                        </span>
                        <h3 className={`text-base sm:text-xl font-extrabold leading-snug ${isExpanded ? 'text-white' : 'text-[#141F42]'}`}>
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`text-xs font-bold hidden sm:inline-block ${isExpanded ? 'text-[#DA2030]' : 'text-[#8D96A8]'}`}>
                        {isExpanded ? 'Collapse' : 'View Details'}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'bg-[#DA2030] text-white rotate-180 shadow-md' : 'bg-[#FAF6EC] text-[#141F42] border border-[#E8E1D0]'
                      }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 sm:p-10 bg-white border-t border-[#E8E1D0] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          <div className="lg:col-span-7">
                            <p className="text-[#5C6478] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                              {step.desc}
                            </p>

                            <div className="space-y-3 mb-6">
                              {step.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-[#DA2030] flex-shrink-0 mt-0.5" />
                                  <span className="text-xs sm:text-sm font-semibold text-[#141F42]">{h}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {step.specs.map((spec, i) => (
                                <span key={i} className="px-3.5 py-1.5 bg-[#FAF6EC] border border-[#E8E1D0] rounded-full text-xs font-bold text-[#141F42]">
                                  ✓ {spec}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="lg:col-span-5 bg-[#FAF6EC] border border-[#E8E1D0] rounded-2xl p-6 flex items-center justify-center relative min-h-[220px]">
                            <span className="absolute top-3 left-3 bg-[#141F42] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow z-10">
                              {step.badge}
                            </span>
                            <img src={step.img} alt={step.title} className="w-full max-h-[200px] object-contain drop-shadow-md rounded-xl" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call To Action */}
        <section className="max-w-4xl mx-auto bg-[#141F42] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <Typography variant="h2" className="text-white text-2xl sm:text-4xl font-extrabold mb-4 leading-snug">
              Need Custom Branding or Factory Swatch Samples?
            </Typography>
            <p className="text-[#8D96A8] text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
              Visit our Delhi office or Sahibabad manufacturing unit to inspect raw paper swatches, hot-stamping foil dies, and production samples in person.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/quote" className="px-8 py-3.5 rounded-full bg-[#DA2030] text-white font-bold hover:bg-[#c41b2a] transition-all shadow-lg text-sm sm:text-base">
                Request Custom Bulk Quote
              </a>
              <a href="/contact" className="px-8 py-3.5 rounded-full border-2 border-white/80 text-white font-bold hover:bg-white hover:text-[#141F42] transition-all text-sm sm:text-base">
                Contact Factory Sales
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Process;

