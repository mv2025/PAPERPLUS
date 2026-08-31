import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
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
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "fixed z-50 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
                  "w-full max-w-lg max-h-[90vh] overflow-y-auto bg-surface border border-surface-hover shadow-xl shadow-black/50 sm:rounded-xl",
                  className
                )}
              >
                <div className="flex items-center justify-between p-4 border-b border-surface-hover sticky top-0 bg-surface z-10">
                  <Dialog.Title className="text-lg font-heading font-semibold text-foreground">
                    {title}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="p-1 rounded-md text-muted hover:text-foreground hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="p-4">
                  {children}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
