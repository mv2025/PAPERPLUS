import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, FileText } from 'lucide-react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'products'>('main');

  // Prevent scroll when open and clean up on unmount/close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const drawerVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring' as const, stiffness: 350, damping: 35 } },
    exit: { x: '100%', transition: { type: 'spring' as const, stiffness: 350, damping: 35 } }
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-[#14244a] hover:text-[#e5232e] transition-colors focus:outline-none rounded-lg border border-[#e8dfd0] bg-white shadow-sm"
        aria-label="Open Mobile Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Render Mobile Drawer in document.body via Portal to prevent any CSS transform clipping */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-[99999] flex justify-end bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            >
              {/* Drawer Container (stops event propagation so clicking inside doesn't close) */}
              <motion.div
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="w-[85vw] max-w-sm h-full bg-[#FAF6EC] border-l border-[#E8DFD0] shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-[#E8DFD0] bg-white">
                  <span className="font-extrabold text-[#14244a] text-lg">
                    {activeMenu === 'main' ? 'Menu' : 'Products & Collections'}
                  </span>
                  <div className="flex items-center gap-2">
                    {activeMenu === 'products' && (
                      <button 
                        onClick={() => setActiveMenu('main')}
                        className="px-2.5 py-1 text-xs font-bold text-[#E5232E] hover:underline"
                      >
                        ← Back
                      </button>
                    )}
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="p-2 text-[#14244a] hover:bg-[#FAF6EC] rounded-full border border-[#E8DFD0] transition-colors"
                      aria-label="Close Menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Navigation Links Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                  <AnimatePresence mode="wait">
                    {activeMenu === 'main' ? (
                      <motion.div
                        key="main"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-2.5"
                      >
                        <button 
                          onClick={() => setActiveMenu('products')}
                          className="w-full flex items-center justify-between p-4 bg-white rounded-xl border border-[#E8DFD0] text-left shadow-sm hover:border-[#E5232E] transition-colors"
                        >
                          <span className="font-extrabold text-[#14244a]">Products &amp; Collections</span>
                          <ChevronRight className="w-5 h-5 text-[#E5232E]" />
                        </button>

                        <a 
                          href="/" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] font-semibold text-[#14244a] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          Home
                        </a>
                        <a 
                          href="/about" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] font-semibold text-[#14244a] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          About Us
                        </a>
                        <a 
                          href="/religious-theme" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] font-semibold text-[#14244a] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          Wall &amp; Religious 2027
                        </a>
                        <a 
                          href="/desk-calendar" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] font-semibold text-[#14244a] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          Desk Calendar Memo Box
                        </a>
                        <a 
                          href="/corporate" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] font-semibold text-[#14244a] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          Corporate Solutions
                        </a>
                        <a 
                          href="/products" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] font-semibold text-[#14244a] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          All Catalogue Products
                        </a>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="products"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="space-y-2.5"
                      >
                        <a 
                          href="/religious-theme" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          <span className="font-bold text-[#14244a] block">Wall &amp; Religious 2027</span>
                          <span className="text-xs text-[#68738b]">Devotional, landscape &amp; floral themes</span>
                        </a>
                        <a 
                          href="/desk-calendar" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          <span className="font-bold text-[#14244a] block">Desk Calendar Memo Box</span>
                          <span className="text-xs text-[#68738b]">Executive desk sets &amp; colorways</span>
                        </a>
                        <a 
                          href="/corporate" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          <span className="font-bold text-[#E5232E] block">Corporate Branding</span>
                          <span className="text-xs text-[#68738b]">Custom logo &amp; bulk gifting</span>
                        </a>
                        <a 
                          href="/products" 
                          onClick={() => setIsOpen(false)} 
                          className="block p-4 bg-white rounded-xl border border-[#E8DFD0] hover:border-[#E5232E] transition-colors shadow-sm"
                        >
                          <span className="font-bold text-[#14244a] block">Browse All Products</span>
                          <span className="text-xs text-[#68738b]">Full catalog with filters</span>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Action */}
                <div className="p-4 border-t border-[#E8DFD0] bg-white">
                  <a href="/quote" onClick={() => setIsOpen(false)} className="block w-full">
                    <Button fullWidth leftIcon={<FileText className="w-4 h-4" />}>
                      Request Bulk Quote
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default MobileNav;
