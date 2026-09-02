import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '@/hooks/useProducts';
import { useWishlistStore } from '@/stores/wishlistStore';
import { useCompareStore } from '@/stores/compareStore';
import { useRecentlyViewedStore } from '@/stores/recentlyViewedStore';
import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { fadeUp } from '@/animations/stagger';
import { Heart, ArrowRightLeft, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';

export const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: products } = useProducts();
  const product = products?.find(p => p.slug === slug);
  
  const { addItem: addWishlist, removeItem: removeWishlist, hasItem: hasWishlist } = useWishlistStore();
  const { addItem: addCompare, removeItem: removeCompare, hasItem: hasCompare } = useCompareStore();
  const { addViewedItem } = useRecentlyViewedStore();

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (product) {
      addViewedItem(product.id);
      setActiveImage(0);
    }
  }, [product, addViewedItem]);

  if (!product) return <div className="h-screen flex items-center justify-center animate-pulse"><Typography variant="h3">Loading...</Typography></div>;

  const inWishlist = hasWishlist(product.id);
  const inCompare = hasCompare(product.id);

  return (
    <div className="w-full bg-background min-h-screen pb-32">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-b border-surface-hover">
        <div className="flex items-center gap-2 text-sm text-muted">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/products" className="hover:text-primary transition-colors">Products</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left: Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col gap-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full aspect-[4/3] bg-surface rounded-2xl overflow-hidden shadow-xl shadow-black relative group"
          >
            <img 
              src={product.gallery[activeImage]?.url || product.thumbnail} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23222"/></svg>';
              }}
            />
          </motion.div>
          {/* Thumbnail Strip */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {product.gallery.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(idx)}
                className={`w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${activeImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img.url} className="w-full h-full object-cover" alt="Thumbnail" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="%23222"/></svg>';
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info & Sticky Purchase Panel */}
        <div className="w-full lg:w-2/5 relative">
          <div className="sticky top-32 flex flex-col gap-8">
            
            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2 mb-2">
                {product.corporateEligible && <span className="px-2 py-1 text-xs bg-primary text-black rounded font-bold uppercase tracking-wider">Corporate Ready</span>}
                {product.bestSeller && <span className="px-2 py-1 text-xs bg-white text-black rounded font-bold uppercase tracking-wider">Best Seller</span>}
              </div>
              <Typography variant="h2" className="text-foreground leading-tight">{product.name}</Typography>
              <Typography variant="muted" className="text-sm">SKU: {product.sku}</Typography>
              <div className="flex items-center gap-2 mt-2 text-sm text-foreground">
                <span className="text-primary text-lg">★★★★★</span> ({product.reviewsCount} reviews)
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-4 border-y border-surface-hover py-6">
              <Typography variant="h3" className="text-primary font-bold">Bulk B2B Quote Pricing</Typography>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm mt-2">
                <div>
                  <span className="text-muted block mb-1">MOQ</span>
                  <span className="font-bold text-foreground">{product.moq} Units</span>
                </div>
                <div>
                  <span className="text-muted block mb-1">Availability</span>
                  <span className="font-bold text-[#10B981]">{product.stockStatus}</span>
                </div>
              </div>
              
              <ul className="flex flex-col gap-2 mt-4 text-sm text-muted">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Fully Customizable</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Corporate Branding Available</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Pan-India Delivery</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col gap-3">
              <Button size="lg" fullWidth leftIcon={<FileText className="w-5 h-5" />} className="h-14 text-lg">
                Request Bulk Quote
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline" 
                  fullWidth 
                  onClick={() => inWishlist ? removeWishlist(product.id) : addWishlist(product.id)}
                  leftIcon={<Heart className={`w-4 h-4 ${inWishlist ? 'fill-primary text-primary' : ''}`} />}
                >
                  {inWishlist ? 'Saved' : 'Wishlist'}
                </Button>
                <Button 
                  variant="outline" 
                  fullWidth 
                  onClick={() => inCompare ? removeCompare(product.id) : addCompare(product.id)}
                  leftIcon={<ArrowRightLeft className={`w-4 h-4 ${inCompare ? 'text-primary' : ''}`} />}
                >
                  {inCompare ? 'Comparing' : 'Compare'}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Structured Content Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-12 mt-12 border-t border-surface-hover">
        <Tabs.Root defaultValue="specs" className="flex flex-col md:flex-row gap-12 w-full">
          <Tabs.List className="flex flex-col gap-2 w-full md:w-64 flex-shrink-0" aria-label="Product Information">
            <Tabs.Trigger value="specs" className="text-left px-4 py-3 rounded-md text-muted hover:text-foreground data-[state=active]:bg-surface data-[state=active]:text-primary transition-colors font-medium">Specifications</Tabs.Trigger>
            <Tabs.Trigger value="customization" className="text-left px-4 py-3 rounded-md text-muted hover:text-foreground data-[state=active]:bg-surface data-[state=active]:text-primary transition-colors font-medium">Customization Options</Tabs.Trigger>
            <Tabs.Trigger value="shipping" className="text-left px-4 py-3 rounded-md text-muted hover:text-foreground data-[state=active]:bg-surface data-[state=active]:text-primary transition-colors font-medium">Shipping & Delivery</Tabs.Trigger>
          </Tabs.List>
          
          <div className="flex-1 min-h-[400px]">
            <Tabs.Content value="specs" className="outline-none">
              <Typography variant="h3" className="mb-6">Technical Specifications</Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex justify-between border-b border-surface-hover py-3">
                  <span className="text-muted">Material</span>
                  <span className="font-medium">{product.material}</span>
                </div>
                <div className="flex justify-between border-b border-surface-hover py-3">
                  <span className="text-muted">Paper GSM</span>
                  <span className="font-medium">{product.paperGsm}</span>
                </div>
                <div className="flex justify-between border-b border-surface-hover py-3">
                  <span className="text-muted">Size</span>
                  <span className="font-medium">{product.size}</span>
                </div>
                <div className="flex justify-between border-b border-surface-hover py-3">
                  <span className="text-muted">Orientation</span>
                  <span className="font-medium">{product.orientation}</span>
                </div>
                <div className="flex justify-between border-b border-surface-hover py-3">
                  <span className="text-muted">Printing Method</span>
                  <span className="font-medium">{product.printingType}</span>
                </div>
                <div className="flex justify-between border-b border-surface-hover py-3">
                  <span className="text-muted">Minimum Order</span>
                  <span className="font-medium">{product.moq} Units</span>
                </div>
              </div>
            </Tabs.Content>
            
            <Tabs.Content value="customization" className="outline-none">
              <Typography variant="h3" className="mb-4">Corporate Customization</Typography>
              <Typography variant="p" className="text-muted mb-6">
                This calendar is fully equipped for corporate branding. We offer placement for your company logo, custom color schemes matching your brand guidelines, and personalized dates/events.
              </Typography>
              {/* Customization Gallery Placeholder */}
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-surface rounded-lg border border-surface-hover flex items-center justify-center">
                  <span className="text-sm text-muted">Logo Placement Example</span>
                </div>
                <div className="aspect-video bg-surface rounded-lg border border-surface-hover flex items-center justify-center">
                  <span className="text-sm text-muted">Foil Stamping Example</span>
                </div>
              </div>
            </Tabs.Content>
            
            <Tabs.Content value="shipping" className="outline-none">
              <Typography variant="h3" className="mb-4">Shipping & Delivery</Typography>
              <Typography variant="p" className="text-muted">
                Bulk orders require 10-14 days for production after final digital proof approval. Pan-India shipping is handled via our trusted logistics partners ensuring secure transit.
              </Typography>
            </Tabs.Content>
          </div>
        </Tabs.Root>
      </div>

    </div>
  );
};

export default ProductDetails;
