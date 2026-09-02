import React from 'react';
import { Modal } from './Modal';
import { Product } from '@/types';
import { Button } from './Button';
import { Typography } from './Typography';
import { ShoppingBag, FileText, Heart, ArrowRightLeft } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Quick View" className="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gallery Placeholder */}
        <div className="aspect-square bg-background rounded-lg overflow-hidden relative">
          <img 
            src={product.gallery[0]?.url || product.thumbnail} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.newArrival && <span className="px-2 py-1 text-xs font-bold bg-primary text-black rounded uppercase tracking-wider">New</span>}
              {product.bestSeller && <span className="px-2 py-1 text-xs font-bold bg-white text-black rounded uppercase tracking-wider">Best Seller</span>}
              {product.corporateEligible && <span className="px-2 py-1 text-xs font-bold bg-surface-hover border border-muted text-foreground rounded uppercase tracking-wider">Corporate</span>}
            </div>
            <Typography variant="h3">{product.name}</Typography>
            <Typography variant="muted" className="mt-1">SKU: {product.sku}</Typography>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
              Quote Based Pricing
            </span>
            <Typography variant="small" className="text-muted font-bold">
              Minimum Order: {product.moq} units
            </Typography>
          </div>

          <Typography variant="p" className="text-sm">
            {product.description}
          </Typography>

          <div className="grid grid-cols-2 gap-4 text-sm mt-2 border-t border-b border-surface-hover py-4">
            <div>
              <span className="text-muted block">Material</span>
              <span className="font-medium text-foreground">{product.material}</span>
            </div>
            <div>
              <span className="text-muted block">Paper GSM</span>
              <span className="font-medium text-foreground">{product.paperGsm}</span>
            </div>
            <div>
              <span className="text-muted block">Size</span>
              <span className="font-medium text-foreground">{product.size}</span>
            </div>
            <div>
              <span className="text-muted block">MOQ</span>
              <span className="font-medium text-foreground">{product.moq} Units</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Button size="lg" fullWidth leftIcon={<FileText className="w-5 h-5" />}>
              Request Bulk Quote
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" leftIcon={<ShoppingBag className="w-4 h-4" />}>
                Buy Sample
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 px-0" title="Add to Wishlist">
                  <Heart className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="flex-1 px-0" title="Compare">
                  <ArrowRightLeft className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
