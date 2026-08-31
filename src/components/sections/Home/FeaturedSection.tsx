import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '../../ui/Typography';
import { ProductCard } from '../../cards/ProductCard';
import { useProducts } from '@/hooks/useProducts';

const TABS = ['Best Sellers', 'Corporate', 'Premium', 'New Arrivals'];

export const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const { data: products, isLoading } = useProducts();

  // Mock filtering based on tabs (since we generated a lot of mock data)
  const filteredProducts = products ? products.filter((p, i) => {
    if (activeTab === 'Best Sellers') return p.bestSeller;
    if (activeTab === 'Corporate') return p.corporateEligible;
    if (activeTab === 'Premium') return p.price > 180;
    if (activeTab === 'New Arrivals') return p.newArrival;
    return true;
  }).slice(0, 4) : [];

  return (
    <section className="py-12 md:py-16 bg-background border-t border-b border-surface-hover">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
          <Typography variant="h2" className="text-foreground">
            Featured Manufacturing
          </Typography>

          <div className="flex flex-wrap gap-2">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-primary text-black shadow-glow' 
                    : 'bg-surface text-muted hover:text-foreground hover:bg-surface-hover'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[500px]">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-full h-[450px] bg-surface rounded-xl animate-pulse" />
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

      </div>
    </section>
  );
};
