import type { Product } from '@/types';
import { products } from '@/mock/products';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const ProductService = {
  async getProducts(): Promise<Product[]> {
    await delay(500);
    return products;
  },

  async getProductBySlug(slug: string): Promise<Product | null> {
    await delay(300);
    const product = products.find(p => p.slug === slug);
    return product || null;
  },

  async getFeaturedProducts(): Promise<Product[]> {
    await delay(400);
    return products.filter(p => p.featured);
  },

  async getBestSellers(): Promise<Product[]> {
    await delay(400);
    return products.filter(p => p.bestSeller);
  },

  async search(query: string): Promise<Product[]> {
    await delay(400);
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
  }
};
