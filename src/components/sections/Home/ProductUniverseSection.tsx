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
  { id: 'wall', title: 'WALL CALENDARS', subtitle: 'Art Paper, Crystal & Gold Foil' },
  { id: 'corporate-desk', title: 'CORPORATE DESK', subtitle: 'Premium 300-320 & 1501-1519' },
  { id: 'mini-desk', title: 'MINI DESK', subtitle: 'NM & ML Mini Long Series' },
  { id: 'desk-accessories', title: 'DESK ACCESSORIES', subtitle: 'Corporate Pad T.C. & Memo Cubes' },
  { id: 'aarti-books', title: 'AARTI BOOKS', subtitle: 'Devotional Aarti Collections' },
  { id: 'jumbo-calendars', title: 'JUMBO CALENDARS', subtitle: 'Series 3356 UV Glitter Pipe & Box' },
  { id: 'shipping-calendars', title: 'SHIPPING CALENDARS', subtitle: 'Commercial Shipping Format' },
];

const PRODUCTS = [
  // 1. Wall Calendars
  {
    id: 'wall-1',
    categoryId: 'wall',
    categoryBadge: 'WALL CALENDARS',
    title: 'Pratham Ganesh (Series 2028)',
    subtitle: 'Classic Gold Foil Panchang',
    specs: ['Art Paper Single Sheeter', 'Gold Foil Panchang', 'Tin Rim Top Hanging', 'MOQ 100+'],
    productImage: religiousHero,
    link: '/religious-theme',
  },
  {
    id: 'wall-2',
    categoryId: 'wall',
    categoryBadge: 'WALL CALENDARS',
    title: 'Mangal Ganesh (Series 9"x18" Crystal)',
    subtitle: 'Single Sheeter Edition',
    specs: ['Crystal Finish', 'Panchang Dates', 'Size: 9x18"', 'MOQ 150+'],
    productImage: mangalGanesh,
    link: '/religious-theme',
  },
  {
    id: 'wall-3',
    categoryId: 'wall',
    categoryBadge: 'WALL CALENDARS',
    title: 'Shree Ganesh Aarti (Series 2840 Lazer Gold)',
    subtitle: 'Single Sheeter Lazer Gold',
    specs: ['Lazer Gold Foil', 'Imported Art Card', 'Vedic Shlokas', 'MOQ 100+'],
    productImage: shreeGaneshAarti,
    link: '/religious-theme',
  },

  // 2. Corporate Desk Calendars
  {
    id: 'corp-desk-1',
    categoryId: 'corporate-desk',
    categoryBadge: 'CORPORATE DESK',
    title: 'Maha Ganpati (Premium Series 300-320)',
    subtitle: 'DESK ACCESSORIES',
    brandLogo: bigWishLogo,
    specs: ['Premium 300 Series', 'Twin Flip Stand', 'Custom Foil Logo', 'MOQ 150+'],
    productImage: desk21,
    link: '/desk-calendar',
  },
  {
    id: 'corp-desk-2',
    categoryId: 'corporate-desk',
    categoryBadge: 'CORPORATE DESK',
    title: 'Shree Ganeshaya Namaha (Corporate Series 1501-1519)',
    subtitle: 'DESK ACCESSORIES',
    brandLogo: bigWishLogo,
    specs: ['Series 1501-1519', 'Velvet Hard Stand', 'Gold Foil Embossed', 'MOQ 100+'],
    productImage: desk27,
    link: '/desk-calendar',
  },
  {
    id: 'corp-desk-3',
    categoryId: 'corporate-desk',
    categoryBadge: 'CORPORATE DESK',
    title: 'Go Green - Breathe Clean (New Corporate 1601-1603)',
    subtitle: 'Executive Series',
    specs: ['Series 1601-1603', 'Imported Art Card', 'Gold Wire-O', 'MOQ 150+'],
    productImage: desk31,
    link: '/desk-calendar',
  },

  // 3. Mini Desk
  {
    id: 'mini-1',
    categoryId: 'mini-desk',
    categoryBadge: 'MINI DESK',
    title: 'New Mini Desk Calendar (Series NM 01 - NM 02)',
    subtitle: 'Both Side Printed',
    specs: ['Series NM 01-NM 02', 'Both Side Printed', 'Compact Desk Stand', 'MOQ 200+'],
    productImage: desk01,
    link: '/desk-calendar',
  },
  {
    id: 'mini-2',
    categoryId: 'mini-desk',
    categoryBadge: 'MINI DESK',
    title: 'Mini Long Desk Calendar (Series ML 11 - ML 12)',
    subtitle: 'Both Side Printed',
    specs: ['Series ML 11-ML 12', 'Long Format', 'Twin Wire-O Bound', 'MOQ 200+'],
    productImage: desk02,
    link: '/desk-calendar',
  },

  // 4. Desk Accessories
  {
    id: 'acc-1',
    categoryId: 'desk-accessories',
    categoryBadge: 'DESK ACCESSORIES',
    title: 'Corporate Pad T.C. Memo Box',
    subtitle: 'Printed on 80 GSM Natural Shade Paper',
    brandLogo: bigWishLogo,
    specs: ['Corporate Pad T.C.', '80 GSM Natural Paper', '400 Sheet Refill Cube', 'MOQ 150+'],
    productImage: desk01,
    link: '/desk-calendar',
  },
  {
    id: 'acc-2',
    categoryId: 'desk-accessories',
    categoryBadge: 'DESK ACCESSORIES',
    title: 'Executive Desk Accessories Organizer',
    subtitle: 'Custom Branding Tray',
    brandLogo: bigWishLogo,
    specs: ['Fabric Wrapped Tray', 'Custom Gold Foil Logo', 'Refillable Notepad', 'MOQ 100+'],
    productImage: desk02,
    link: '/desk-calendar',
  },

  // 5. Aarti Books
  {
    id: 'aarti-1',
    categoryId: 'aarti-books',
    categoryBadge: 'AARTI BOOKS',
    title: 'Shree Ganesh Aarti Sangrah',
    subtitle: 'Devotional Pocket Edition',
    specs: ['Aarti Books Series', 'Gold Foil Shlokas', 'Pocket Size Art Paper', 'MOQ 250+'],
    productImage: pilliyarPattiGanesh,
    link: '/religious-theme',
  },
  {
    id: 'aarti-2',
    categoryId: 'aarti-books',
    categoryBadge: 'AARTI BOOKS',
    title: 'Sampoorna Diwali Pooja Aarti',
    subtitle: 'Devotional Special',
    specs: ['Full Color Edition', 'Gold Foil Accents', 'Individual Sleeve', 'MOQ 200+'],
    productImage: diwaliPoojaAarti,
    link: '/religious-theme',
  },

  // 6. Jumbo Calendars
  {
    id: 'jumbo-1',
    categoryId: 'jumbo-calendars',
    categoryBadge: 'JUMBO CALENDARS',
    title: 'Series 3356 Art Paper Jumbo Calendar',
    subtitle: 'UV GLITTER with Pipe & Box',
    specs: ['Series 3356', 'UV GLITTER Finish', 'Fitted Pipe & Box', 'MOQ 100+'],
    productImage: charDham,
    link: '/religious-theme',
  },

  // 7. Shipping Calendars
  {
    id: 'ship-1',
    categoryId: 'shipping-calendars',
    categoryBadge: 'SHIPPING CALENDARS',
    title: 'Commercial Shipping Calendar 2027',
    subtitle: 'Multi-Month Commercial View',
    specs: ['Shipping Calendars Series', '3-Month View Grid', 'Red Sliding Date Marker', 'MOQ 100+'],
    productImage: religiousHero,
    link: '/products?category=shipping-calendars',
  },
];

export const ProductUniverseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string>(CATEGORIES[0].id);

  const filteredProducts = PRODUCTS.filter(p => p.categoryId === activeCategoryId);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-0 bg-[#faf6ec] text-[#243252] overflow-hidden py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-[#e8dfd0]"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mb-12 relative z-10 mx-auto flex flex-col items-center">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#DA2030] block mb-2 text-center">
          EXPLORE OUR CATALOGUE
        </span>
        <Typography align="center" variant="h2" className="text-[#14244a] text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-center">
          Product Collection
        </Typography>
        <Typography align="center" variant="muted" className="text-base text-[#68738b] text-center max-w-xl mx-auto">
          Discover our 2027 wall calendars, executive desk series, and devotional artwork collections.
        </Typography>
      </div>

      {/* Category Pills Header */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 overflow-x-auto max-w-full p-3 relative z-10 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
            className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all uppercase whitespace-nowrap cursor-pointer active:scale-95 ${
              activeCategoryId === cat.id
                ? 'bg-[#14244a] text-white shadow-lg ring-2 ring-[#14244a]/20 scale-105'
                : 'bg-white border border-[#e8dfd0] text-[#14244a] hover:border-[#DA2030]'
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
                    {prod.categoryBadge || prod.subtitle}
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
