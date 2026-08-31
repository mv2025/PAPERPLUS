import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { fadeUp } from '@/animations/stagger';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';

const FAQS = [
  { question: "What is your Minimum Order Quantity (MOQ)?", answer: "Our standard MOQ for custom corporate calendars is 100 units. For retail purchases of pre-designed themes, there is no minimum requirement." },
  { question: "Can we completely customize the calendar design?", answer: "Yes, we offer end-to-end customization. You can choose paper quality, date grid styles, branding placements, and custom imagery for each month." },
  { question: "Do you provide GST invoices for corporate orders?", answer: "Absolutely. We are a fully compliant B2B manufacturer and provide GST invoices with input tax credit benefits for all corporate orders." },
  { question: "What is your typical delivery timeline?", answer: "Standard corporate orders are dispatched within 10-14 business days after digital proof approval. We use trusted logistics partners for Pan-India delivery." },
  { question: "Can I request physical samples before a bulk order?", answer: "Yes, we strongly encourage sample requests. We can dispatch generic premium samples within 24 hours, or create a custom prototype for a nominal fee." }
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-16 bg-surface relative">
      <div className="max-w-3xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <Typography variant="h2" className="text-foreground">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </Typography>
        </motion.div>

        <div className="flex flex-col gap-4">
          {FAQS.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border border-surface-hover rounded-xl overflow-hidden bg-background"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
              >
                <Typography variant="large" className={cn("transition-colors", openIndex === idx ? "text-primary" : "text-foreground")}>
                  {faq.question}
                </Typography>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === idx ? <Minus className="text-primary" /> : <Plus className="text-muted" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-surface-hover mt-4">
                      <Typography variant="muted" className="pt-4">
                        {faq.answer}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
