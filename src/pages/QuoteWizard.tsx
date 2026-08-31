import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, ChevronRight, UploadCloud, MessageSquare } from 'lucide-react';

const STEPS = [
  "Company Info",
  "Product Details",
  "Custom Branding",
  "Review & Submit"
];

export const QuoteWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, STEPS.length - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 relative">
      
      {/* Background aesthetics */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Typography variant="h2" className="text-navy">Custom Manufacturing Consultation</Typography>
          <Typography variant="p" className="text-muted mt-2">
            Let's build your perfect corporate gifting solution. This takes about 2 minutes.
          </Typography>
        </div>

        {/* Progress Tracker */}
        <div className="flex items-center justify-between mb-12 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-surface-hover z-0" />
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-primary z-0 transition-all duration-500 ease-out" 
            style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
          />
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${currentStep >= idx ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-surface border-2 border-surface-hover text-muted'}`}>
                {currentStep > idx ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
              </div>
              <span className={`text-xs font-medium absolute -bottom-6 whitespace-nowrap ${currentStep >= idx ? 'text-navy' : 'text-muted'}`}>{step}</span>
            </div>
          ))}
        </div>

        {/* Wizard Form Area */}
        <div className="bg-white rounded-3xl shadow-xl border border-surface-hover p-8 md:p-12 overflow-hidden relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full flex flex-col h-full"
            >
              
              {/* Step 1: Company Info */}
              {currentStep === 0 && (
                <div className="flex flex-col gap-6 flex-1">
                  <Typography variant="h3" className="text-navy">Tell us about your organization</Typography>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-navy">Company Name</label>
                      <input type="text" placeholder="e.g. Reliance Industries" className="p-4 rounded-xl border border-surface-hover bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-navy">Contact Person</label>
                      <input type="text" placeholder="Your full name" className="p-4 rounded-xl border border-surface-hover bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-navy">Email Address</label>
                      <input type="email" placeholder="corporate@domain.com" className="p-4 rounded-xl border border-surface-hover bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-navy">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" className="p-4 rounded-xl border border-surface-hover bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Product Details */}
              {currentStep === 1 && (
                <div className="flex flex-col gap-6 flex-1">
                  <Typography variant="h3" className="text-navy">What are you looking for?</Typography>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {['Wall Calendars', 'Desk Calendars', 'Corporate Diaries'].map(type => (
                      <label key={type} className="flex flex-col items-center justify-center p-6 border-2 border-surface-hover rounded-xl cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group">
                        <input type="radio" name="product_type" className="hidden" />
                        <span className="font-semibold text-navy">{type}</span>
                      </label>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-navy">Estimated Quantity</label>
                    <select className="p-4 rounded-xl border border-surface-hover bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                      <option>100 - 500 units</option>
                      <option>500 - 2000 units</option>
                      <option>2000 - 10,000 units</option>
                      <option>10,000+ units</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Custom Branding */}
              {currentStep === 2 && (
                <div className="flex flex-col gap-6 flex-1">
                  <Typography variant="h3" className="text-navy">Custom Branding Requirements</Typography>
                  <div className="border-2 border-dashed border-surface-hover rounded-2xl p-10 flex flex-col items-center justify-center bg-surface hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
                    <UploadCloud className="w-12 h-12 text-muted mb-4" />
                    <Typography variant="p" className="text-navy font-semibold text-center mb-1">Upload Company Logo / Artwork</Typography>
                    <Typography variant="small" className="text-muted text-center">AI, EPS, PDF, or high-res PNG (Max 25MB)</Typography>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <label className="text-sm font-semibold text-navy">Additional Branding Notes</label>
                    <textarea rows={3} placeholder="Any specific requirements for foil stamping, paper quality, or custom dates?" className="p-4 rounded-xl border border-surface-hover bg-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {currentStep === 3 && (
                <div className="flex flex-col gap-6 flex-1 items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-emerald/10 text-emerald rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="w-10 h-10" />
                  </div>
                  <Typography variant="h3" className="text-navy">Almost Done!</Typography>
                  <Typography variant="p" className="text-muted max-w-md">
                    Our manufacturing experts will review your requirements and share a personalized quote along with digital mockups within 24 hours.
                  </Typography>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
          
          {/* Footer Actions */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-surface-hover relative z-20 bg-white">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className={currentStep === 0 ? 'invisible' : ''}>
              Back
            </Button>
            {currentStep < STEPS.length - 1 ? (
              <Button onClick={nextStep} rightIcon={<ChevronRight className="w-4 h-4" />} className="bg-navy hover:bg-navy/90 text-white">
                Continue
              </Button>
            ) : (
              <Button className="bg-emerald hover:bg-emerald/90 text-white px-8" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                Submit Request
              </Button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default QuoteWizard;
