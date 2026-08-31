import { useQuery } from '@tanstack/react-query';
import { ProductService } from '@/services/api/ProductService';
import type { Product } from '@/types';

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: () => ProductService.getProducts(),
  });
};

export const useProduct = (slug: string) => {
  return useQuery<Product | null, Error>({
    queryKey: ['product', slug],
    queryFn: () => ProductService.getProductBySlug(slug),
    enabled: !!slug,
  });
};

export const useFeaturedProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products', 'featured'],
    queryFn: () => ProductService.getFeaturedProducts(),
  });
};
