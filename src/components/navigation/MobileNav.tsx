import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Search, FileText } from 'lucide-react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<'main' | 'products'>('main');

  // Prevent scroll when open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const slideVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
        aria-label="Open Mobile Menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute right-0 top-0 bottom-0 w-[85vw] max-w-sm bg-surface border-l border-surface-hover shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-surface-hover">
                <Typography variant="large" className="text-primary font-heading font-extrabold">
                  {activeMenu === 'main' ? 'Menu' : 'Products'}
                </Typography>
                <div className="flex items-center gap-2">
                  {activeMenu === 'products' && (
                    <button 
                      onClick={() => setActiveMenu('main')}
                      className="p-2 text-muted hover:text-foreground transition-colors text-sm font-semibold"
                    >
                      Back
                    </button>
                  )}
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-muted hover:text-foreground transition-colors bg-background rounded-md"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto relative">
                <AnimatePresence mode="wait">
                  {activeMenu === 'main' && (
                    <motion.div
                      key="main"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      className="flex flex-col p-4 gap-2"
                    >
                      <button 
                        onClick={() => setActiveMenu('products')}
                        className="flex items-center justify-between p-4 bg-background rounded-xl text-left hover:border-primary border border-transparent transition-colors"
                      >
                        <span className="font-semibold text-foreground">Products &amp; Collections</span>
                        <ChevronRight className="w-5 h-5 text-muted" />
                      </button>
                      <a href="/" className="p-4 rounded-xl text-left hover:bg-background transition-colors font-medium text-foreground">Home</a>
                      <a href="/about" className="p-4 rounded-xl text-left hover:bg-background transition-colors font-medium text-foreground">About Us</a>
                      <a href="/religious-theme" className="p-4 rounded-xl text-left hover:bg-background transition-colors font-medium text-foreground">Wall &amp; Religious 2027</a>
                      <a href="/desk-calendar" className="p-4 rounded-xl text-left hover:bg-background transition-colors font-medium text-foreground">Desk Calendar Memo Box</a>
                      <a href="/corporate" className="p-4 rounded-xl text-left hover:bg-background transition-colors font-medium text-foreground">Corporate Solutions</a>
                      <a href="/products" className="p-4 rounded-xl text-left hover:bg-background transition-colors font-medium text-foreground">All Catalogue Products</a>
                    </motion.div>
                  )}

                  {activeMenu === 'products' && (
                    <motion.div
                      key="products"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      className="flex flex-col p-4 gap-2"
                    >
                      <a href="/religious-theme" className="p-4 bg-background rounded-xl text-left hover:border-primary border border-transparent transition-colors">
                        <span className="font-bold text-foreground block">Wall &amp; Religious 2027</span>
                        <span className="text-xs text-muted">Devotional, landscape &amp; floral themes</span>
                      </a>
                      <a href="/desk-calendar" className="p-4 bg-background rounded-xl text-left hover:border-primary border border-transparent transition-colors">
                        <span className="font-bold text-foreground block">Desk Calendar Memo Box</span>
                        <span className="text-xs text-muted">Executive desk sets &amp; colorways</span>
                      </a>
                      <a href="/corporate" className="p-4 bg-background rounded-xl text-left hover:border-primary border border-transparent transition-colors">
                        <span className="font-bold text-primary block">Corporate Branding</span>
                        <span className="text-xs text-muted">Custom logo &amp; bulk gifting</span>
                      </a>
                      <a href="/products" className="p-4 bg-background rounded-xl text-left hover:border-primary border border-transparent transition-colors">
                        <span className="font-bold text-foreground block">Browse All Products</span>
                        <span className="text-xs text-muted">Full catalog with filters</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 border-t border-surface-hover flex flex-col gap-3 bg-surface z-10">
                <a href="/quote" className="w-full">
                  <Button fullWidth leftIcon={<FileText className="w-4 h-4" />}>
                    Request Bulk Quote
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
