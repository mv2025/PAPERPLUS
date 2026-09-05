import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, Command, ChevronRight } from 'lucide-react';
import { cn } from '@/utils/cn';

import asset01 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_01_1035dd3e31a9.png';
import asset04 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_04_d63402e89e59.png';
import asset21 from '@/assets/Desk_Calender_Premium_All_Assets/assets/asset_21_be605dba59fa.png';
import wallGanesh from '@/assets/foundation/religious.jpg';

const SEARCH_DATABASE = [
  {
    id: 'pratham-ganesh',
    title: 'Pratham Ganesh 2027',
    category: 'Wall & Religious 2027',
    description: 'Gold Foil Panchang Wall Edition with daily tithi & auspicious dates.',
    link: '/religious-theme',
    img: wallGanesh,
    keywords: ['wall', 'religious', 'ganesh', 'pratham', 'panchang', '2027', 'gold foil']
  },
  {
    id: 'mangal-ganesh',
    title: 'Mangal Ganesh 2027',
    category: 'Wall & Religious 2027',
    description: 'Devotional Panchang calendar with premium lightfast color printing.',
    link: '/religious-theme',
    img: wallGanesh,
    keywords: ['wall', 'mangal', 'ganesh', 'devotional', 'panchang', '2027']
  },
  {
    id: 'happy-new-year-classic',
    title: 'Happy New Year Classic Memo Box',
    category: 'Desk Calendar Memo Box',
    description: 'Hand-lettered script with split-color 2027 numerals & 400 cream memo sheets.',
    link: '/desk-calendar',
    img: asset04,
    keywords: ['desk', 'calendar', 'memo box', 'happy new year', 'executive', 'classic']
  },
  {
    id: 'executive-navy-set',
    title: 'Navy Executive Memo Box',
    category: 'Desk Calendar Memo Box',
    description: 'Textured leatherette navy desk organizer set with gold foil accents.',
    link: '/desk-calendar',
    img: asset01,
    keywords: ['desk', 'navy', 'leatherette', 'executive', 'memo box', 'blue']
  },
  {
    id: 'corporate-branding-series',
    title: 'Corporate Custom Branding 2027',
    category: 'Corporate Solutions',
    description: 'Bulk corporate calendar gifting with custom gold foil logo printing.',
    link: '/corporate',
    img: asset21,
    keywords: ['corporate', 'branding', 'custom', 'logo', 'bulk', 'diaries', 'gifting']
  },
  {
    id: 'gold-foil-specs',
    title: 'Custom Gold Foil & Embossing Tech',
    category: 'Precision Manufacturing',
    description: 'Micron-level registration rollers and precision foil stamping for executive orders.',
    link: '/about',
    img: asset21,
    keywords: ['gold foil', 'embossing', 'precision', 'manufacturing', 'materials']
  }
];

export const SearchOverlay = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Handle Ctrl+K / Cmd+K
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredResults = query.trim() === ''
    ? []
    : SEARCH_DATABASE.filter(item => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some(k => k.toLowerCase().includes(q))
        );
      });

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 text-sm text-muted rounded-md bg-surface hover:bg-surface-hover transition-colors border border-surface-hover w-64">
          <Search className="w-4 h-4" />
          <span className="flex-1 text-left">Search...</span>
          <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 font-mono text-[10px] font-medium rounded border border-muted/20 bg-background text-muted">
            <Command className="w-3 h-3" /> K
          </kbd>
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "fixed z-[100000] left-[50%] top-[15%] sm:top-[20%] translate-x-[-50%]",
                  "w-[92vw] max-w-2xl bg-white border border-[#E8DFD0] shadow-2xl rounded-2xl overflow-hidden"
                )}
              >
                <div className="flex items-center border-b border-[#E8DFD0] px-4 bg-[#FAF6EC]">
                  <Search className="w-5 h-5 text-[#E5232E]" />
                  <input
                    className="flex-1 h-14 bg-transparent border-none outline-none px-4 text-[#14244a] font-medium placeholder:text-[#68738b] text-base"
                    placeholder="Search calendars, desk boxes, corporate gifting..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                  />
                  {query && (
                    <button onClick={() => setQuery('')} className="p-1 text-[#68738b] hover:text-[#14244a] mr-1" aria-label="Clear query">
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <Dialog.Close asChild>
                    <button className="p-1.5 rounded-full text-[#14244a] hover:bg-white border border-[#E8DFD0] transition-colors" aria-label="Close search">
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>
                
                <div className="p-4 max-h-[380px] overflow-y-auto bg-[#FAF6EC]/30">
                  {query.trim().length === 0 ? (
                    <div className="text-sm">
                      <h4 className="font-extrabold text-[#14244a] mb-3 px-1 text-xs uppercase tracking-wider">Popular Searches</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Wall Calendars 2027', 'Desk Calendar Memo Box', 'Corporate Branding', 'Gold Foiling'].map(term => (
                          <button 
                            key={term} 
                            className="px-3.5 py-2 bg-white rounded-xl border border-[#E8DFD0] text-left text-sm font-semibold text-[#14244a] hover:border-[#E5232E] hover:text-[#E5232E] transition-colors shadow-sm" 
                            onClick={() => setQuery(term)}
                          >
                            🔍 {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : filteredResults.length > 0 ? (
                    <div className="flex flex-col gap-2">
                      {filteredResults.map(item => (
                        <a 
                          key={item.id} 
                          href={item.link} 
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-4 p-3 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#E5232E] transition-all group shadow-sm"
                        >
                          <div className="w-14 h-14 rounded-lg bg-[#FAF6EC] overflow-hidden border border-[#E8DFD0] flex-shrink-0 p-1 flex items-center justify-center">
                            <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#E5232E] block mb-0.5">
                              {item.category}
                            </span>
                            <h5 className="font-bold text-[#14244a] text-sm truncate group-hover:text-[#E5232E] transition-colors">
                              {item.title}
                            </h5>
                            <p className="text-xs text-[#68738b] truncate">{item.description}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-[#68738b] group-hover:text-[#E5232E] transition-colors flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <span className="text-3xl mb-2">🔍</span>
                      <p className="text-sm font-bold text-[#14244a] mb-1">No products found for "{query}"</p>
                      <p className="text-xs text-[#68738b]">Try searching for "Wall", "Desk", "Ganesh", or "Corporate".</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
