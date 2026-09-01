-- ==============================================================================
-- PAPER PLUS - SUPABASE DATABASE SCHEMA & INITIAL SEEDING SCRIPT
-- Run this script in the Supabase SQL Editor (Dashboard -> SQL Editor -> New Query)
-- ==============================================================================

-- 1. Create the Products Table
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  sku TEXT NOT NULL,
  name TEXT NOT NULL,
  category_id TEXT NOT NULL,
  material TEXT DEFAULT 'Premium Art Paper',
  paper_gsm INTEGER DEFAULT 250,
  printing_type TEXT DEFAULT 'Offset UV Foil',
  size TEXT DEFAULT '15x20 inches',
  orientation TEXT DEFAULT 'Portrait',
  moq INTEGER DEFAULT 100,
  stock_status TEXT DEFAULT 'In Stock',
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  best_seller BOOLEAN DEFAULT false,
  new_arrival BOOLEAN DEFAULT false,
  corporate_eligible BOOLEAN DEFAULT true,
  sample_available BOOLEAN DEFAULT true,
  rating NUMERIC DEFAULT 4.9,
  reviews_count INTEGER DEFAULT 12,
  thumbnail TEXT NOT NULL,
  hover_image TEXT,
  gallery JSONB DEFAULT '[]'::jsonb,
  description TEXT DEFAULT '',
  specifications JSONB DEFAULT '{}'::jsonb,
  price NUMERIC DEFAULT 250,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- 3. RLS Policies
-- Allow anyone to read products (Public read)
DROP POLICY IF EXISTS "Allow public read access" ON public.products;
CREATE POLICY "Allow public read access"
  ON public.products FOR SELECT
  USING (true);

-- Allow authenticated users (Admin) to insert new products
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.products;
CREATE POLICY "Allow authenticated insert"
  ON public.products FOR INSERT
  WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users (Admin) to update products
DROP POLICY IF EXISTS "Allow authenticated update" ON public.products;
CREATE POLICY "Allow authenticated update"
  ON public.products FOR UPDATE
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users (Admin) to delete products
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.products;
CREATE POLICY "Allow authenticated delete"
  ON public.products FOR DELETE
  USING (auth.role() = 'authenticated');

-- 4. Create Storage Bucket for Product Images
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Storage Policies for 'product-images'
DROP POLICY IF EXISTS "Public image access" ON storage.objects;
CREATE POLICY "Public image access"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "Authenticated image upload" ON storage.objects;
CREATE POLICY "Authenticated image upload"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'product-images' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Authenticated image update" ON storage.objects;
CREATE POLICY "Authenticated image update"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'product-images' AND auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Authenticated image delete" ON storage.objects;
CREATE POLICY "Authenticated image delete"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'product-images' AND auth.role() = 'authenticated');
