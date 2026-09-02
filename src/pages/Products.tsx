import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/cards/ProductCard';
import { Typography } from '@/components/ui/Typography';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Products = () => {
  const { data: products, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFilter = searchParams.get('category');
  const materialFilter = searchParams.get('material');

  const CATEGORIES_LIST = [
    { id: 'c1', label: 'Wall Calendars', aliases: ['c1', 'wall', 'wall-calendars', 'wall calendars'] },
    { id: 'c2', label: 'Desk Calendars', aliases: ['c2', 'desk', 'desk-calendars', 'desk calendars'] },
    { id: 'c3', label: 'Corporate Series', aliases: ['c3', 'corporate', 'corporate-calendars', 'corporate calendars'] },
    { id: 'c4', label: 'Religious Devotional', aliases: ['c4', 'religious', 'religious-calendars', 'religious calendars'] },
  ];

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products.filter(p => {
      if (categoryFilter) {
        const query = categoryFilter.toLowerCase().trim();
        const catObj = CATEGORIES_LIST.find(
          c => c.id === query || c.label.toLowerCase() === query || c.aliases.includes(query)
        );
        const pCat = p.categoryId.toLowerCase().trim();

        if (catObj) {
          const match = catObj.aliases.includes(pCat);
          if (!match) return false;
        } else {
          if (!pCat.includes(query)) return false;
        }
      }

      if (materialFilter) {
        const mat = materialFilter.toLowerCase().trim();
        if (!p.material.toLowerCase().includes(mat)) return false;
      }

      return true;
    });
  }, [products, categoryFilter, materialFilter]);

  const removeFilter = (key: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  const activeCategoryLabel = useMemo(() => {
    if (!categoryFilter) return '';
    const q = categoryFilter.toLowerCase().trim();
    const found = CATEGORIES_LIST.find(c => c.id === q || c.label.toLowerCase() === q || c.aliases.includes(q));
    return found ? found.label : categoryFilter;
  }, [categoryFilter]);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 flex flex-col md:flex-row gap-8 w-full min-h-screen">
      
      {/* Sidebar Filters (Desktop) */}
      <aside className="w-full md:w-64 flex-shrink-0 hidden md:block border-r border-surface-hover pr-6 sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto">
        <Typography variant="h4" className="mb-6 flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </Typography>
        
        {/* Category Filter Group */}
        <div className="mb-6">
          <Typography variant="small" className="text-foreground font-bold mb-3 uppercase tracking-wider">Category</Typography>
          <div className="flex flex-col gap-2">
            {CATEGORIES_LIST.map(cat => (
              <label key={cat.id} className="flex items-center gap-2 text-sm text-muted hover:text-primary cursor-pointer transition-colors">
                <input 
                  type="radio" 
                  name="category" 
                  checked={
                    categoryFilter === cat.id || 
                    categoryFilter?.toLowerCase() === cat.label.toLowerCase() ||
                    cat.aliases.includes(categoryFilter?.toLowerCase() || '')
                  }
                  onChange={() => {
                    const params = new URLSearchParams(searchParams);
                    params.set('category', cat.id);
                    setSearchParams(params);
                  }}
                  className="accent-primary"
                />
                <span>{cat.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <Typography variant="small" className="text-foreground font-bold mb-3 uppercase tracking-wider">Material</Typography>
          <div className="flex flex-col gap-2">
            {['Premium Art Paper', 'Recycled Kraft', 'Metallic Foil'].map(mat => (
              <label key={mat} className="flex items-center gap-2 text-sm text-muted hover:text-primary cursor-pointer transition-colors">
                <input 
                  type="radio" 
                  name="material" 
                  checked={materialFilter === mat}
                  onChange={() => {
                    const params = new URLSearchParams(searchParams);
                    params.set('material', mat);
                    setSearchParams(params);
                  }}
                  className="accent-primary"
                />
                <span>{mat}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        
        {/* Toolbar & Filter Chips */}
        <div className="flex flex-col mb-6 gap-4 border-b border-surface-hover pb-4">
          <div className="flex items-center justify-between">
            <Typography variant="h3">All Products</Typography>
            <Typography variant="muted" className="text-sm">
              Showing {filteredProducts.length} of {products?.length || 0} products
            </Typography>
          </div>
          
          {/* Active Chips */}
          {(categoryFilter || materialFilter) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted mr-2">Active:</span>
              
              {categoryFilter && (
                <div className="flex items-center gap-1 bg-surface px-3 py-1 rounded-full border border-surface-hover text-sm">
                  <span>{activeCategoryLabel}</span>
                  <button onClick={() => removeFilter('category')} className="text-muted hover:text-foreground"><X className="w-3 h-3" /></button>
                </div>
              )}
              
              {materialFilter && (
                <div className="flex items-center gap-1 bg-surface px-3 py-1 rounded-full border border-surface-hover text-sm">
                  <span>{materialFilter}</span>
                  <button onClick={() => removeFilter('material')} className="text-muted hover:text-foreground"><X className="w-3 h-3" /></button>
                </div>
              )}
              
              <button onClick={clearAllFilters} className="text-xs text-primary hover:underline ml-2">
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="flex-1 w-full">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="w-full h-[400px] bg-surface rounded-xl animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center text-center py-20 bg-surface rounded-xl border border-surface-hover"
            >
              <div className="w-24 h-24 mb-6 rounded-full bg-background flex items-center justify-center border border-surface-hover shadow-inner">
                <SlidersHorizontal className="w-10 h-10 text-muted" />
              </div>
              <Typography variant="h4" className="mb-2 text-foreground">No products found</Typography>
              <Typography variant="muted" className="mb-6 max-w-sm">
                Try adjusting your filters to find what you're looking for.
              </Typography>
              <Button onClick={clearAllFilters}>Browse All Products</Button>
            </motion.div>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredProducts.map(product => (
                  <motion.div key={product.id} layout variants={fadeUp} initial="hidden" animate="visible" exit={{ opacity: 0, scale: 0.9 }}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Products;
