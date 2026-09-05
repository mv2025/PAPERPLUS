import type { Product } from '@/types';
import { products as initialProducts } from '@/mock/products';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

// Helper to map DB snake_case record to TypeScript camelCase Product
function mapDbToProduct(row: any): Product {
  return {
    id: row.id,
    slug: row.slug || row.id,
    sku: row.sku || 'SKU-000',
    name: row.name || 'Untitled Product',
    categoryId: row.category_id || 'wall',
    material: row.material || 'Premium Art Paper',
    paperGsm: row.paper_gsm || 250,
    printingType: row.printing_type || 'Offset UV Foil',
    size: row.size || '15x20 inches',
    orientation: row.orientation || 'Portrait',
    moq: row.moq || 100,
    stockStatus: row.stock_status || 'In Stock',
    tags: Array.isArray(row.tags) ? row.tags : [],
    featured: Boolean(row.featured),
    bestSeller: Boolean(row.best_seller),
    newArrival: Boolean(row.new_arrival),
    corporateEligible: Boolean(row.corporate_eligible),
    sampleAvailable: Boolean(row.sample_available),
    rating: Number(row.rating) || 4.9,
    reviewsCount: Number(row.reviews_count) || 12,
    thumbnail: row.thumbnail || '',
    hoverImage: row.hover_image || row.thumbnail || '',
    gallery: Array.isArray(row.gallery) ? row.gallery : [{ url: row.thumbnail, alt: row.name }],
    description: row.description || '',
    specifications: row.specifications || {},
    price: Number(row.price) || 250,
  };
}

// Helper to map Product to DB snake_case record
function mapProductToDb(p: Partial<Product>) {
  const row: any = {};
  if (p.id !== undefined) row.id = p.id;
  if (p.slug !== undefined) row.slug = p.slug;
  if (p.sku !== undefined) row.sku = p.sku;
  if (p.name !== undefined) row.name = p.name;
  if (p.categoryId !== undefined) row.category_id = p.categoryId;
  if (p.material !== undefined) row.material = p.material;
  if (p.paperGsm !== undefined) row.paper_gsm = p.paperGsm;
  if (p.printingType !== undefined) row.printing_type = p.printingType;
  if (p.size !== undefined) row.size = p.size;
  if (p.orientation !== undefined) row.orientation = p.orientation;
  if (p.moq !== undefined) row.moq = p.moq;
  if (p.stockStatus !== undefined) row.stock_status = p.stockStatus;
  if (p.tags !== undefined) row.tags = p.tags;
  if (p.featured !== undefined) row.featured = p.featured;
  if (p.bestSeller !== undefined) row.best_seller = p.bestSeller;
  if (p.newArrival !== undefined) row.new_arrival = p.newArrival;
  if (p.corporateEligible !== undefined) row.corporate_eligible = p.corporateEligible;
  if (p.sampleAvailable !== undefined) row.sample_available = p.sampleAvailable;
  if (p.rating !== undefined) row.rating = p.rating;
  if (p.reviewsCount !== undefined) row.reviews_count = p.reviewsCount;
  if (p.thumbnail !== undefined) row.thumbnail = p.thumbnail;
  if (p.hoverImage !== undefined) row.hover_image = p.hoverImage;
  if (p.gallery !== undefined) row.gallery = p.gallery;
  if (p.description !== undefined) row.description = p.description;
  if (p.specifications !== undefined) row.specifications = p.specifications;
  if (p.price !== undefined) row.price = p.price;
  row.updated_at = new Date().toISOString();
  return row;
}

// Local cache fallback when table is syncing
const LOCAL_STORAGE_KEY = 'paperplus_local_products';

function getLocalProducts(): Product[] {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed: Product[] = JSON.parse(saved);
      // Validate that stored thumbnails are not legacy broken string paths
      if (parsed.length > 0 && parsed[0].thumbnail && !parsed[0].thumbnail.startsWith('/assets/products/')) {
        return parsed;
      }
    }
  } catch {}
  return initialProducts;
}

function saveLocalProducts(products: Product[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  } catch {}
}

export const ProductService = {
  async getProducts(): Promise<Product[]> {
    if (!isSupabaseConfigured) {
      return getLocalProducts();
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.warn('Supabase fetch error, using local fallback:', error.message);
        return getLocalProducts();
      }

      if (!data || data.length === 0) {
        // Table exists but is empty -> return initial products
        return getLocalProducts();
      }

      const mapped = data.map(mapDbToProduct);
      saveLocalProducts(mapped);
      return mapped;
    } catch (err) {
      console.warn('Error querying Supabase products:', err);
      return getLocalProducts();
    }
  },

  async getProductBySlug(slug: string): Promise<Product | null> {
    if (!isSupabaseConfigured) {
      const prods = getLocalProducts();
      return prods.find(p => p.slug === slug) || null;
    }

    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('slug', slug)
        .maybeSingle();

      if (error || !data) {
        const prods = getLocalProducts();
        return prods.find(p => p.slug === slug) || null;
      }

      return mapDbToProduct(data);
    } catch {
      const prods = getLocalProducts();
      return prods.find(p => p.slug === slug) || null;
    }
  },

  async getFeaturedProducts(): Promise<Product[]> {
    const all = await this.getProducts();
    return all.filter(p => p.featured);
  },

  async getBestSellers(): Promise<Product[]> {
    const all = await this.getProducts();
    return all.filter(p => p.bestSeller);
  },

  async search(query: string): Promise<Product[]> {
    const all = await this.getProducts();
    const lowerQuery = query.toLowerCase();
    return all.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery) ||
      p.sku.toLowerCase().includes(lowerQuery) ||
      p.tags.some(t => t.toLowerCase().includes(lowerQuery))
    );
  },

  // --- CRUD Operations for Admin ---

  async createProduct(newProduct: Partial<Product>): Promise<Product> {
    const id = newProduct.id || `prod_${Date.now()}`;
    const slug = newProduct.slug || (newProduct.name || 'product')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + `-${Date.now().toString(36)}`;

    const fullProduct: Product = {
      id,
      slug,
      sku: newProduct.sku || `SKU-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newProduct.name || 'New Calendar Product',
      categoryId: newProduct.categoryId || 'wall',
      material: newProduct.material || 'Premium Art Paper',
      paperGsm: newProduct.paperGsm || 250,
      printingType: newProduct.printingType || 'Offset UV Foil',
      size: newProduct.size || '15x20 inches',
      orientation: newProduct.orientation || 'Portrait',
      moq: newProduct.moq || 100,
      stockStatus: newProduct.stockStatus || 'In Stock',
      tags: newProduct.tags || ['2027', 'Calendar'],
      featured: Boolean(newProduct.featured),
      bestSeller: Boolean(newProduct.bestSeller),
      newArrival: Boolean(newProduct.newArrival ?? true),
      corporateEligible: Boolean(newProduct.corporateEligible ?? true),
      sampleAvailable: Boolean(newProduct.sampleAvailable ?? true),
      rating: newProduct.rating || 5.0,
      reviewsCount: newProduct.reviewsCount || 0,
      thumbnail: newProduct.thumbnail || '',
      hoverImage: newProduct.hoverImage || newProduct.thumbnail || '',
      gallery: newProduct.gallery || [{ url: newProduct.thumbnail || '', alt: newProduct.name || '' }],
      description: newProduct.description || '',
      specifications: newProduct.specifications || {},
      price: newProduct.price || 250,
    };

    if (isSupabaseConfigured) {
      try {
        const dbPayload = mapProductToDb(fullProduct);
        const { data, error } = await supabase
          .from('products')
          .insert(dbPayload)
          .select()
          .single();

        if (error) {
          console.warn('Supabase insert failed, saving locally:', error.message);
        } else if (data) {
          const created = mapDbToProduct(data);
          const current = getLocalProducts();
          saveLocalProducts([created, ...current]);
          return created;
        }
      } catch (err) {
        console.warn('Supabase insert exception:', err);
      }
    }

    const current = getLocalProducts();
    saveLocalProducts([fullProduct, ...current]);
    return fullProduct;
  },

  async updateProduct(id: string, updates: Partial<Product>): Promise<Product> {
    if (isSupabaseConfigured) {
      try {
        const dbPayload = mapProductToDb(updates);
        const { data, error } = await supabase
          .from('products')
          .update(dbPayload)
          .eq('id', id)
          .select()
          .single();

        if (!error && data) {
          const updated = mapDbToProduct(data);
          const current = getLocalProducts();
          saveLocalProducts(current.map(p => (p.id === id ? updated : p)));
          return updated;
        }
      } catch (err) {
        console.warn('Supabase update exception:', err);
      }
    }

    const current = getLocalProducts();
    const existing = current.find(p => p.id === id);
    const updated = { ...(existing || {}), ...updates } as Product;
    saveLocalProducts(current.map(p => (p.id === id ? updated : p)));
    return updated;
  },

  async deleteProduct(id: string): Promise<void> {
    if (isSupabaseConfigured) {
      try {
        const { error } = await supabase
          .from('products')
          .delete()
          .eq('id', id);

        if (error) {
          console.warn('Supabase delete failed:', error.message);
        }
      } catch (err) {
        console.warn('Supabase delete exception:', err);
      }
    }

    const current = getLocalProducts();
    saveLocalProducts(current.filter(p => p.id !== id));
  },

  /**
   * Seed all initial default products into Supabase
   */
  async seedDefaultProducts(): Promise<{ count: number }> {
    if (!isSupabaseConfigured) {
      saveLocalProducts(initialProducts);
      return { count: initialProducts.length };
    }

    const rows = initialProducts.map(p => mapProductToDb(p));
    const { data, error } = await supabase
      .from('products')
      .upsert(rows, { onConflict: 'id' })
      .select();

    if (error) {
      throw new Error(`Seeding failed: ${error.message}`);
    }

    return { count: data?.length || 0 };
  }
};
