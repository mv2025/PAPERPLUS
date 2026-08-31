import React, { useState } from 'react';
import type { Product } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Heart, ArrowRightLeft, FileText, ShoppingBag } from 'lucide-react';
import { Typography } from '../ui/Typography';
import { Button } from '../ui/Button';
import { cn } from '@/utils/cn';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onCompare?: (product: Product) => void;
  onWishlist?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView, onCompare, onWishlist }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative flex flex-col bg-surface border border-surface-hover rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
        {product.newArrival && (
          <span className="px-2 py-1 text-[10px] font-bold bg-primary text-black rounded uppercase tracking-wider shadow-sm">
            New
          </span>
        )}
        {product.bestSeller && (
          <span className="px-2 py-1 text-[10px] font-bold bg-white text-black rounded uppercase tracking-wider shadow-sm">
            Best Seller
          </span>
        )}
        {product.corporateEligible && (
          <span className="px-2 py-1 text-[10px] font-bold bg-black/80 text-primary border border-primary/30 backdrop-blur-sm rounded uppercase tracking-wider shadow-sm">
            Corporate
          </span>
        )}
      </div>

      {/* Action Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 10 }}
            className="absolute top-3 right-3 z-20 flex flex-col gap-2"
          >
            <button 
              onClick={(e) => { e.preventDefault(); onWishlist?.(product); }}
              className="p-2 bg-background/90 text-muted hover:text-primary rounded-full backdrop-blur-sm transition-colors border border-surface-hover"
              title="Add to Wishlist"
            >
              <Heart className="w-4 h-4" />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); onCompare?.(product); }}
              className="p-2 bg-background/90 text-muted hover:text-primary rounded-full backdrop-blur-sm transition-colors border border-surface-hover"
              title="Compare"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); onQuickView?.(product); }}
              className="p-2 bg-background/90 text-muted hover:text-primary rounded-full backdrop-blur-sm transition-colors border border-surface-hover"
              title="Quick View"
            >
              <Eye className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-background overflow-hidden cursor-pointer" onClick={() => onQuickView?.(product)}>
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col p-4 gap-3 flex-1 cursor-pointer" onClick={() => onQuickView?.(product)}>
        <div>
          <Typography variant="small" className="text-muted mb-1 flex items-center justify-between">
            {product.size} • {product.paperGsm} GSM
            <span className="flex items-center gap-1 text-[11px]">
              ★ {product.rating} ({product.reviewsCount})
            </span>
          </Typography>
          <Typography variant="large" className="line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </Typography>
        </div>
        
        <div className="mt-auto pt-3 border-t border-surface-hover flex items-center justify-between">
          <Typography variant="h4" className="text-primary">
            ₹{product.price}
          </Typography>
          <Typography variant="small" className="text-muted">
            MOQ: {product.moq}
          </Typography>
        </div>
      </div>

      {/* Quick Action Bar on Hover */}
      <div className="p-4 pt-0">
        <Button 
          fullWidth 
          variant="secondary"
          className="group-hover:bg-primary group-hover:text-black transition-all"
          leftIcon={<FileText className="w-4 h-4" />}
        >
          Request Quote
        </Button>
      </div>
    </motion.div>
  );
};
