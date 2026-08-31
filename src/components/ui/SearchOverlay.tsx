import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X, Command } from 'lucide-react';
import { cn } from '@/utils/cn';

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
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "fixed z-50 left-[50%] top-[20%] translate-x-[-50%]",
                  "w-full max-w-2xl bg-surface border border-surface-hover shadow-lg shadow-black/50 sm:rounded-xl overflow-hidden"
                )}
              >
                <div className="flex items-center border-b border-surface-hover px-4">
                  <Search className="w-5 h-5 text-primary" />
                  <input
                    className="flex-1 h-14 bg-transparent border-none outline-none px-4 text-foreground placeholder:text-muted"
                    placeholder="Search products, categories, blogs..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                  />
                  <Dialog.Close asChild>
                    <button className="p-1 rounded-md text-muted hover:text-foreground hover:bg-background transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>
                
                <div className="p-4 h-[300px] overflow-y-auto">
                  {query.length === 0 ? (
                    <div className="text-sm text-muted">
                      <h4 className="font-semibold mb-2 px-2 text-foreground">Popular Searches</h4>
                      <div className="flex flex-col gap-1">
                        {['Wall Calendars 2027', 'Corporate Diaries', 'Custom Gold Foiling'].map(term => (
                          <button key={term} className="text-left px-2 py-2 hover:bg-background rounded-md transition-colors" onClick={() => setQuery(term)}>
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted">
                      Searching for "{query}"... (Mock API pending)
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
