import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ChevronRight } from 'lucide-react';

// Real Calendar Assets
import religiousHero from '@/assets/foundation/religious.jpg';
import mangalGanesh from '@/assets/foundation/download.jpg';
import shreeGaneshAarti from '@/assets/foundation/download (1).jpg';
import pilliyarPattiGanesh from '@/assets/foundation/download (2).jpg';
import charDham from '@/assets/foundation/download (4).jpg';
import diwaliPoojaAarti from '@/assets/foundation/download (13).jpg';
import desk01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import desk02 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_02_635a7db1bc7c.png';
import desk21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import desk27 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_27_38fa2c68b07a.jpg';
import desk31 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_31_9872eb025040.jpg';
import bigWishLogo from '@/assets/Big Wish LOGO.png';

const CATEGORIES = [
  { id: 'wall', title: 'WALL', subtitle: 'Wall Calendars' },
  { id: 'desk', title: 'DESK', subtitle: 'Desk Calendars' },
  { id: 'executive', title: 'EXECUTIVE', subtitle: 'Executive Planners' },
  { id: 'religious', title: 'RELIGIOUS', subtitle: 'Religious Calendars' },
  { id: 'custom', title: 'CUSTOM', subtitle: 'Fully Custom' },
];

const PRODUCTS = [
  // Wall
  {
    id: 'wall-1',
    categoryId: 'wall',
    title: 'Pratham Ganesh',
    subtitle: 'Classic Gold Foil Panchang',
    specs: ['Gold Foil Panchang', 'Tin Rim Top Hanging', '12-Month Grid', 'MOQ 100+'],
    productImage: religiousHero,
    link: '/religious-theme',
  },
  {
    id: 'wall-2',
    categoryId: 'wall',
    title: 'Mangal Ganesh',
    subtitle: 'Auspicious Red Edition',
    specs: ['Vibrant Print Finish', 'Panchang Dates', 'Size: 15x20"', 'MOQ 150+'],
    productImage: mangalGanesh,
    link: '/religious-theme',
  },
  {
    id: 'wall-3',
    categoryId: 'wall',
    title: 'Shree Ganesh Aarti',
    subtitle: 'Devotional Wall Planner',
    specs: ['Premium Art Paper', 'Gold Foil Accents', 'Vedic Shlokas', 'MOQ 100+'],
    productImage: shreeGaneshAarti,
    link: '/religious-theme',
  },
  // Desk
  {
    id: 'desk-1',
    categoryId: 'desk',
    title: 'Corporate Table Calendar',
    subtitle: 'DESK ACCESSORIES',
    brandLogo: bigWishLogo,
    specs: ['Twin Flip Stand', 'Custom Foil Logo', 'Gold Edges', 'MOQ 150+'],
    productImage: desk01,
    link: '/desk-calendar',
  },
  {
    id: 'desk-2',
    categoryId: 'desk',
    title: 'Executive Table Calendar',
    subtitle: 'DESK ACCESSORIES',
    brandLogo: bigWishLogo,
    specs: ['Velvet Hard Stand', 'Gold Foil Embossed', 'Compact Planner', 'MOQ 100+'],
    productImage: desk02,
    link: '/desk-calendar',
  },
  {
    id: 'desk-3',
    categoryId: 'desk',
    title: 'Maha Ganpati',
    subtitle: 'Executive Series',
    specs: ['Textured Cardstock', 'Monthly Dividers', 'Pen Holder Stand', 'MOQ 200+'],
    productImage: desk21,
    link: '/desk-calendar',
  },
  // Executive
  {
    id: 'exec-1',
    categoryId: 'exec-1',
    title: 'Shree Ganeshaya Namaha',
    subtitle: 'Corporate Series',
    specs: ['Hardboard Case', 'Metallic Gold Edges', 'Custom Branding', 'MOQ 100+'],
    productImage: desk27,
    link: '/desk-calendar',
  },
  {
    id: 'exec-2',
    categoryId: 'executive',
    title: 'Go Green - Breathe Clean',
    subtitle: 'Corporate Series',
    specs: ['Imported Art Card', 'Gold Wire-O', 'Monthly Quotes', 'MOQ 150+'],
    productImage: desk31,
    link: '/desk-calendar',
  },
  // Religious
  {
    id: 'rel-1',
    categoryId: 'religious',
    title: 'Pilliyar Patti Ganesh',
    subtitle: 'South Temple Edition',
    specs: ['Rich Color Embossing', 'Temple Photography', 'Tin Loop Rim', 'MOQ 200+'],
    productImage: pilliyarPattiGanesh,
    link: '/religious-theme',
  },
  {
    id: 'rel-2',
    categoryId: 'religious',
    title: 'Diwali Pooja Aarti',
    subtitle: 'Devotional Special',
    specs: ['Gold Foil Shlokas', 'Full Year Dates', 'Individual Envelope', 'MOQ 100+'],
    productImage: diwaliPoojaAarti,
    link: '/religious-theme',
  },
  // Custom
  {
    id: 'cust-1',
    categoryId: 'custom',
    title: 'Char Dham',
    subtitle: 'Bespoke Brand Printing',
    specs: ['Custom Logo Footer', 'Full Color Cover', 'Any Size', 'MOQ 250+'],
    productImage: charDham,
    link: '/religious-theme',
  },
];

export const ProductUniverseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(CATEGORIES[0].id);

  const filteredProducts = PRODUCTS.filter(p => p.categoryId === activeCategoryId || (activeCategoryId === 'executive' && p.categoryId === 'exec-1'));

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-0 bg-[#faf6ec] text-[#243252] overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-[#e8dfd0]"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mb-12 relative z-10">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#e5232e] block mb-2">
          EXPLORE OUR CATALOGUE
        </span>
        <Typography variant="h2" className="text-[#14244a] text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
          Product Collection
        </Typography>
        <Typography variant="muted" className="text-base text-[#68738b]">
          Discover our 2027 wall calendars, executive desk series, and devotional artwork collections.
        </Typography>
      </div>

      {/* Category Pills Header */}
      <div className="flex gap-2 mb-12 overflow-x-auto max-w-full pb-2 relative z-10 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all uppercase whitespace-nowrap ${
              activeCategoryId === cat.id
                ? 'bg-[#14244a] text-white shadow-lg scale-105'
                : 'bg-white border border-[#e8dfd0] text-[#14244a] hover:border-[#e5232e]'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div className="w-full max-w-7xl relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategoryId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((prod) => (
              <div 
                key={prod.id}
                className="bg-white border border-[#e8dfd0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-white p-4 overflow-hidden border-b border-[#e8dfd0] flex items-center justify-center">
                  <img 
                    src={prod.productImage} 
                    alt={prod.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#e5232e] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                    {prod.subtitle}
                  </span>
                  {prod.brandLogo && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-lg border border-[#e8dfd0] shadow-sm">
                      <img src={prod.brandLogo} alt="Big Wish" className="h-4 sm:h-5 w-auto object-contain" />
                    </div>
                  )}
                </div>

                {/* Details Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#14244a] mb-2 group-hover:text-[#e5232e] transition-colors">
                      {prod.title}
                    </h3>
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {prod.specs.map((spec, i) => (
                        <li key={i} className="text-[11px] font-semibold bg-[#faf6ec] border border-[#e8dfd0] text-[#14244a] px-2.5 py-1 rounded-md">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href={prod.link || '/products'} className="w-full">
                    <button className="w-full py-3 rounded-xl bg-[#14244a] text-white font-bold hover:bg-[#e5232e] transition-colors text-xs flex items-center justify-center gap-2 group/btn">
                      Explore Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};
