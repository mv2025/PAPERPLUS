import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/cards/ProductCard';
import { Typography } from '@/components/ui/Typography';
import { fadeUp, staggerContainer } from '@/animations/stagger';
import { X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Products = () => {
  const { data: products, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<string>('catalog');
  const [seriesFilter, setSeriesFilter] = useState<string>('');

  const categoryFilter = searchParams.get('category');

  const CATEGORIES_LIST = [
    { id: 'wall', label: 'Wall Calendars', aliases: ['wall', 'wall-calendars', 'wall calendars', 'c1'] },
    { id: 'corporate-desk', label: 'Corporate Desk Calendars', aliases: ['corporate-desk', 'corporate desk', 'desk', 'desk-calendars', 'c2', 'c3'] },
    { id: 'mini-desk', label: 'Mini Desk', aliases: ['mini-desk', 'mini desk', 'mini'] },
    { id: 'desk-accessories', label: 'Desk Accessories', aliases: ['desk-accessories', 'desk accessories'] },
    { id: 'aarti-books', label: 'Aarti Books', aliases: ['aarti-books', 'aarti books', 'aarti', 'c4'] },
    { id: 'jumbo-calendars', label: 'Jumbo Calendars', aliases: ['jumbo-calendars', 'jumbo calendars', 'jumbo'] },
    { id: 'shipping-calendars', label: 'Shipping Calendars', aliases: ['shipping-calendars', 'shipping calendars', 'shipping'] },
  ];

  const CATALOG_SERIES_LIST = [
    { id: '300-series', label: 'Premium Series 300-320', cat: 'corporate-desk' },
    { id: '1500-series', label: 'Corporate Series 1501-1519', cat: 'corporate-desk' },
    { id: '1600-series', label: 'New Corporate Series 1601-1603', cat: 'corporate-desk' },
    { id: '5d-series', label: '5D Series 501-509', cat: 'corporate-desk' },
    { id: 'mini-series', label: 'Mini Desk (NM, ML & Series)', cat: 'mini-desk' },
    { id: 'aarti-series', label: 'Aarti Books (762 & Sangrah)', cat: 'aarti-books' },
    { id: 'wall-2028', label: 'Wall Series 2028 & Crystal', cat: 'wall' },
    { id: 'wall-foil', label: 'Wall Lazer & Gold Foil 20x30', cat: 'wall' },
    { id: 'jumbo-3356', label: 'Jumbo Series 3356', cat: 'jumbo-calendars' },
    { id: 'shipping-series', label: 'Shipping Calendars', cat: 'shipping-calendars' },
  ];

  const filteredProducts = useMemo(() => {
    if (!products) return [];
    let result = products.filter(p => {
      const pCat = (p.categoryId || '').toLowerCase().trim();
      const pSeries = (p.series || '').toLowerCase();
      const pName = (p.name || '').toLowerCase();

      // Category filter
      if (categoryFilter) {
        const query = categoryFilter.toLowerCase().trim();
        const catObj = CATEGORIES_LIST.find(
          c => c.id === query || c.label.toLowerCase() === query || c.aliases.includes(query)
        );

        if (catObj) {
          const match = catObj.id === pCat || catObj.aliases.includes(pCat);
          if (!match) return false;
        } else {
          if (!pCat.includes(query)) return false;
        }
      }

      // Series filter
      if (seriesFilter) {
        if (seriesFilter === '300-series') {
          if (!pSeries.includes('300') && !pName.includes('300') && !pName.includes('301') && !pName.includes('305')) return false;
        } else if (seriesFilter === '1500-series') {
          if (!pSeries.includes('1501') && !pName.includes('1501') && !pName.includes('1504')) return false;
        } else if (seriesFilter === '1600-series') {
          if (!pSeries.includes('1601') && !pName.includes('1601')) return false;
        } else if (seriesFilter === '5d-series') {
          if (!pSeries.includes('5d') && !pName.includes('5d')) return false;
        } else if (seriesFilter === 'mini-series') {
          if (!pCat.includes('mini') && !pSeries.includes('mini')) return false;
        } else if (seriesFilter === 'aarti-series') {
          if (!pCat.includes('aarti') && !pName.includes('762') && !pName.includes('aarti')) return false;
        } else if (seriesFilter === 'jumbo-3356') {
          if (!pCat.includes('jumbo') && !pSeries.includes('3356')) return false;
        } else if (seriesFilter === 'shipping-series') {
          if (!pCat.includes('shipping')) return false;
        }
      }

      return true;
    });

    // Sorting logic
    return result.sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'series-asc') {
        const numA = parseInt(a.name.match(/\d+/)?.[0] || '9999', 10);
        const numB = parseInt(b.name.match(/\d+/)?.[0] || '9999', 10);
        return numA - numB;
      }
      if (sortBy === 'rating-desc') {
        return b.rating - a.rating;
      }
      if (sortBy === 'moq-asc') {
        return a.moq - b.moq;
      }
      // Default: Catalog order
      return 0;
    });
  }, [products, categoryFilter, seriesFilter, sortBy]);

  const removeFilter = (key: string) => {
    if (key === 'category') {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('category');
      setSearchParams(newParams);
    }
    if (key === 'series') {
      setSeriesFilter('');
    }
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams());
    setSeriesFilter('');
    setSortBy('catalog');
  };

  const activeCategoryLabel = useMemo(() => {
    if (!categoryFilter) return '';
    const q = categoryFilter.toLowerCase().trim();
    const found = CATEGORIES_LIST.find(c => c.id === q || c.label.toLowerCase() === q || c.aliases.includes(q));
    return found ? found.label : categoryFilter;
  }, [categoryFilter]);

  const activeSeriesLabel = useMemo(() => {
    if (!seriesFilter) return '';
    const found = CATALOG_SERIES_LIST.find(s => s.id === seriesFilter);
    return found ? found.label : seriesFilter;
  }, [seriesFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-16 flex flex-col md:flex-row gap-8 w-full min-h-screen">
      
      {/* Sidebar Filters (Desktop) */}
      <aside className="w-full md:w-64 flex-shrink-0 hidden md:block border-r border-surface-hover pr-6 sticky top-28 h-[calc(100vh-8rem)] overflow-y-auto">
        <Typography variant="h4" className="mb-6 flex items-center gap-2 text-foreground">
          <SlidersHorizontal className="w-4 h-4 text-primary" /> Catalog Filters
        </Typography>
        
        {/* Category Filter Group */}
        <div className="mb-6">
          <Typography variant="small" className="text-foreground font-bold mb-3 uppercase tracking-wider block">Categories</Typography>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm text-muted hover:text-primary cursor-pointer transition-colors">
              <input 
                type="radio" 
                name="category" 
                checked={!categoryFilter}
                onChange={() => removeFilter('category')}
                className="accent-primary"
              />
              <span className={!categoryFilter ? 'font-bold text-foreground' : ''}>All Categories</span>
            </label>
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
                <span className={categoryFilter === cat.id ? 'font-bold text-primary' : ''}>{cat.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Series Sub-Filter Group */}
        <div className="mb-6 pt-4 border-t border-surface-hover">
          <Typography variant="small" className="text-foreground font-bold mb-3 uppercase tracking-wider block">Series Index</Typography>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-xs text-muted hover:text-primary cursor-pointer">
              <input 
                type="radio" 
                name="series" 
                checked={!seriesFilter}
                onChange={() => setSeriesFilter('')}
                className="accent-primary"
              />
              <span className={!seriesFilter ? 'font-bold text-foreground' : ''}>All Series</span>
            </label>
            {CATALOG_SERIES_LIST.map(s => (
              <label key={s.id} className="flex items-center gap-2 text-xs text-muted hover:text-primary cursor-pointer">
                <input 
                  type="radio" 
                  name="series" 
                  checked={seriesFilter === s.id}
                  onChange={() => setSeriesFilter(s.id)}
                  className="accent-primary"
                />
                <span className={seriesFilter === s.id ? 'font-bold text-primary' : ''}>{s.label}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full">
        
        {/* Toolbar & Sorting */}
        <div className="flex flex-col mb-6 gap-4 border-b border-surface-hover pb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <Typography variant="h3">All Products</Typography>
              <Typography variant="muted" className="text-xs sm:text-sm">
                Showing {filteredProducts.length} of {products?.length || 0} products matching catalog
              </Typography>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2 self-end sm:self-auto bg-surface border border-surface-hover rounded-xl px-3 py-2 shadow-xs">
              <ArrowUpDown className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-muted uppercase tracking-wider hidden sm:inline">Sort:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-foreground focus:outline-none cursor-pointer"
              >
                <option value="catalog">Catalog Order (1-19 Series)</option>
                <option value="series-asc">Series No. (300, 1500, 1600...)</option>
                <option value="name-asc">Product Name (A to Z)</option>
                <option value="rating-desc">Highest Rated ★</option>
                <option value="moq-asc">MOQ (Low to High)</option>
              </select>
            </div>
          </div>
          
          {/* Active Chips */}
          {(categoryFilter || seriesFilter) && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-muted mr-1 font-bold">Active Filters:</span>
              
              {categoryFilter && (
                <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20 text-xs font-semibold">
                  <span>Category: {activeCategoryLabel}</span>
                  <button onClick={() => removeFilter('category')} className="hover:text-black"><X className="w-3 h-3" /></button>
                </div>
              )}

              {seriesFilter && (
                <div className="flex items-center gap-1.5 bg-black/80 text-primary px-3 py-1 rounded-full border border-primary/30 text-xs font-semibold">
                  <span>Series: {activeSeriesLabel}</span>
                  <button onClick={() => removeFilter('series')} className="hover:text-white"><X className="w-3 h-3" /></button>
                </div>
              )}
              
              <button onClick={clearAllFilters} className="text-xs text-primary hover:underline ml-2 font-bold">
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
                No items found for the selected category or series filter.
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

