import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Sparkles, CheckCircle2, ChevronDown, Award, ShieldCheck, Factory, Layers, Printer, PackageCheck } from 'lucide-react';

// Product & Manufacturing Assets
import religiousHero from '@/assets/foundation/religious.jpg';
import downloadCharDham from '@/assets/foundation/download (4).jpg';
import asset01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import asset02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import asset21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';

const PROCESS_STEPS = [
  {
    id: 0,
    stage: 'STEP 01',
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
    stage: 'STEP 02',
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
      'Automated spectrophotometer inspects every 200th sheet for exact color fidelity.'
    ]
  },
  {
    id: 2,
    stage: 'STEP 03',
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
    stage: 'STEP 04',
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
    stage: 'STEP 05',
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
    <div className="w-full bg-[#FAF6EC] pt-28 pb-24 text-[#141F42]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <section className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DA2030]/10 text-[#DA2030] text-xs font-extrabold uppercase tracking-widest mb-4 border border-[#DA2030]/20 shadow-sm">
            <Sparkles className="w-4 h-4" /> Manufacturing Masterclass
          </span>
          <Typography variant="h1" className="text-[#141F42] text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            How Every <span className="text-[#DA2030]">Paper Plus</span> Calendar is Made
          </Typography>
          <Typography variant="lead" className="text-[#5C6478] text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Explore our step-by-step manufacturing process — from raw 250 GSM stock selection and 6-color offset printing to precision gold foil stamping and steel Wire-O assembly.
          </Typography>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white border border-[#E8E1D0] px-5 py-3 rounded-2xl shadow-sm flex items-center gap-3">
              <Factory className="w-5 h-5 text-[#DA2030]" />
              <span className="text-xs font-bold text-[#141F42]">Sahibabad Factory Unit</span>
            </div>
            <div className="bg-white border border-[#E8E1D0] px-5 py-3 rounded-2xl shadow-sm flex items-center gap-3">
              <Award className="w-5 h-5 text-[#DA2030]" />
              <span className="text-xs font-bold text-[#141F42]">85+ Years Print Mastery</span>
            </div>
            <div className="bg-white border border-[#E8E1D0] px-5 py-3 rounded-2xl shadow-sm flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#DA2030]" />
              <span className="text-xs font-bold text-[#141F42]">100% Quality Audited</span>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="space-y-6">
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
                    className={`w-full min-h-[90px] p-6 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer active:scale-98 touch-manipulation ${
                      isExpanded ? 'bg-[#141F42] text-white' : 'bg-white text-[#141F42] hover:bg-[#FAF6EC]/60'
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
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
                        {isExpanded ? 'Collapse' : 'View Step Details'}
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
                            <Typography variant="p" className="text-[#5C6478] text-base leading-relaxed mb-6">
                              {step.desc}
                            </Typography>

                            <div className="space-y-3 mb-6">
                              {step.highlights.map((h, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-[#DA2030] flex-shrink-0 mt-0.5" />
                                  <span className="text-sm font-semibold text-[#141F42]">{h}</span>
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

                          <div className="lg:col-span-5 bg-[#FAF6EC] border border-[#E8E1D0] rounded-2xl p-6 flex items-center justify-center relative min-h-[240px]">
                            <span className="absolute top-3 left-3 bg-[#141F42] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow z-10">
                              {step.badge}
                            </span>
                            <img src={step.img} alt={step.title} className="w-full max-h-[220px] object-contain drop-shadow-md rounded-xl" />
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
        <section className="max-w-4xl mx-auto bg-[#141F42] text-white rounded-3xl p-10 text-center shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <Typography variant="h2" className="text-white text-3xl font-extrabold mb-4">
              Need Custom Branding or Factory Samples?
            </Typography>
            <Typography variant="p" className="text-[#sky]/70 text-base max-w-xl mx-auto mb-8">
              Visit our Delhi head office or Ghaziabad factory to view raw paper swatches, hot foil dies, and physical product samples.
            </Typography>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/quote" className="px-8 py-3.5 rounded-full bg-[#DA2030] text-white font-bold hover:bg-[#c41b2a] transition-all shadow-lg">
                Request Custom Bulk Quote
              </a>
              <a href="/contact" className="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#141F42] transition-all">
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
