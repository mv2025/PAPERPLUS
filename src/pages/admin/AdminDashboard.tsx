import React, { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useAuth } from '@/context/AuthContext';
import { ProductService } from '@/services/api/ProductService';
import type { Product } from '@/types';
import { ProductFormModal } from './ProductFormModal';
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  LogOut,
  RefreshCw,
  SlidersHorizontal,
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Loader2
} from 'lucide-react';
import paperPlusLogo from '@/assets/Paper Plus LOGO.png';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const queryClient = useQueryClient();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 4000);
  };

  // 1. Fetch Products
  const { data: products = [], isLoading, refetch } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: () => ProductService.getProducts(),
  });

  // 2. Mutations
  const createMutation = useMutation({
    mutationFn: (newProd: Partial<Product>) => ProductService.createProduct(newProd),
    onSuccess: (created) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      showToast(`Product "${created.name}" created successfully in Supabase!`);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Product> }) =>
      ProductService.updateProduct(id, data),
    onSuccess: (updated) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      showToast(`Product "${updated.name}" updated successfully!`);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => ProductService.deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      showToast('Product deleted successfully from database.');
      setProductToDelete(null);
    },
  });

  const seedMutation = useMutation({
    mutationFn: () => ProductService.seedDefaultProducts(),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      showToast(`Successfully synced ${res.count} products to your live Supabase database!`);
    },
  });

  // Helper for Category normalization & display
  const getCategoryInfo = (catId: string) => {
    const map: Record<string, { label: string; color: string }> = {
      c1: { label: 'Wall Calendar', color: 'bg-red-50 text-[#DA2030] border-red-200' },
      wall: { label: 'Wall Calendar', color: 'bg-red-50 text-[#DA2030] border-red-200' },
      'wall-calendars': { label: 'Wall Calendar', color: 'bg-red-50 text-[#DA2030] border-red-200' },

      c2: { label: 'Desk Calendar', color: 'bg-amber-50 text-amber-800 border-amber-200' },
      desk: { label: 'Desk Calendar', color: 'bg-amber-50 text-amber-800 border-amber-200' },
      'desk-calendars': { label: 'Desk Calendar', color: 'bg-amber-50 text-amber-800 border-amber-200' },

      c3: { label: 'Corporate Series', color: 'bg-blue-50 text-blue-800 border-blue-200' },
      corporate: { label: 'Corporate Series', color: 'bg-blue-50 text-blue-800 border-blue-200' },
      'corporate-calendars': { label: 'Corporate Series', color: 'bg-blue-50 text-blue-800 border-blue-200' },

      c4: { label: 'Religious Theme', color: 'bg-purple-50 text-purple-800 border-purple-200' },
      religious: { label: 'Religious Theme', color: 'bg-purple-50 text-purple-800 border-purple-200' },
      'religious-calendars': { label: 'Religious Theme', color: 'bg-purple-50 text-purple-800 border-purple-200' },
    };

    return map[catId] || { label: catId.toUpperCase(), color: 'bg-gray-100 text-gray-800 border-gray-200' };
  };

  // 3. Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      let matchCat = selectedCategory === 'all';
      if (!matchCat) {
        if (selectedCategory === 'c1') matchCat = ['c1', 'wall', 'wall-calendars'].includes(p.categoryId);
        else if (selectedCategory === 'c2') matchCat = ['c2', 'desk', 'desk-calendars'].includes(p.categoryId);
        else if (selectedCategory === 'c3') matchCat = ['c3', 'corporate', 'corporate-calendars'].includes(p.categoryId);
        else if (selectedCategory === 'c4') matchCat = ['c4', 'religious', 'religious-calendars'].includes(p.categoryId);
        else matchCat = p.categoryId === selectedCategory;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // Counts
  const stats = useMemo(() => {
    const isWall = (c: string) => ['c1', 'wall', 'wall-calendars'].includes(c);
    const isDesk = (c: string) => ['c2', 'desk', 'desk-calendars'].includes(c);
    const isReligious = (c: string) => ['c4', 'religious', 'religious-calendars'].includes(c);
    const isCorporate = (c: string) => ['c3', 'corporate', 'corporate-calendars'].includes(c);

    return {
      total: products.length,
      wall: products.filter((p) => isWall(p.categoryId)).length,
      desk: products.filter((p) => isDesk(p.categoryId) || isCorporate(p.categoryId)).length,
      religious: products.filter((p) => isReligious(p.categoryId)).length,
    };
  }, [products]);

  const handleSaveProduct = async (productData: Partial<Product>) => {
    if (productToEdit) {
      await updateMutation.mutateAsync({ id: productToEdit.id, data: productData });
    } else {
      await createMutation.mutateAsync(productData);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EC] pt-24 pb-20 text-[#141F42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Bar Header */}
        <div className="bg-white border border-[#E8E1D0] rounded-3xl p-6 mb-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="/" className="flex-shrink-0">
              <img src={paperPlusLogo} alt="Paper Plus" className="h-10 w-auto object-contain" />
            </a>
            <div className="border-l border-[#E8E1D0] pl-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#141F42] text-white text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#DA2030]" /> Admin Panel
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Supabase Live
                </span>
              </div>
              <p className="text-xs text-[#5C6478] mt-1">
                Logged in as <strong className="text-[#141F42]">{user?.email}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => seedMutation.mutate()}
              disabled={seedMutation.isPending}
              className="px-4 py-2.5 rounded-xl border border-[#E8E1D0] text-xs font-bold text-[#141F42] hover:bg-[#FAF6EC] transition-colors flex items-center gap-2"
              title="Uploads all 40 default products into your Supabase database table"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${seedMutation.isPending ? 'animate-spin' : ''}`} />
              {seedMutation.isPending ? 'Syncing...' : 'Sync Catalog to Supabase'}
            </button>
            <a
              href="/products"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl border border-[#E8E1D0] text-xs font-bold text-[#141F42] hover:bg-[#FAF6EC] transition-colors flex items-center gap-2"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Storefront
            </a>
            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-xl bg-[#DA2030]/10 text-[#DA2030] border border-[#DA2030]/20 text-xs font-bold hover:bg-[#DA2030] hover:text-white transition-all flex items-center gap-2 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>

        {/* Live Toast Alert */}
        {toastMsg && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-600 text-white shadow-lg flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-3 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span>{toastMsg}</span>
            </div>
            <button onClick={() => setToastMsg(null)} className="text-white/80 hover:text-white text-sm">✕</button>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-[#E8E1D0] p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#8D96A8] uppercase tracking-wider">Total Products</span>
              <Layers className="w-4 h-4 text-[#141F42]" />
            </div>
            <span className="text-3xl font-extrabold text-[#141F42]">{stats.total}</span>
          </div>

          <div className="bg-white border border-[#E8E1D0] p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#8D96A8] uppercase tracking-wider">Wall Calendars</span>
              <Calendar className="w-4 h-4 text-[#DA2030]" />
            </div>
            <span className="text-3xl font-extrabold text-[#141F42]">{stats.wall}</span>
          </div>

          <div className="bg-white border border-[#E8E1D0] p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#8D96A8] uppercase tracking-wider">Desk Accessories</span>
              <Layers className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-3xl font-extrabold text-[#141F42]">{stats.desk}</span>
          </div>

          <div className="bg-white border border-[#E8E1D0] p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#8D96A8] uppercase tracking-wider">Religious Theme</span>
              <Sparkles className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-3xl font-extrabold text-[#141F42]">{stats.religious}</span>
          </div>
        </div>

        {/* Toolbar & Filters */}
        <div className="bg-white border border-[#E8E1D0] rounded-2xl p-4 sm:p-6 mb-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8D96A8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, SKU or material..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-xs text-[#141F42] placeholder:text-[#8D96A8] focus:outline-none focus:border-[#DA2030]"
            />
          </div>

          {/* Category Filter & Add Button */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] text-xs font-bold text-[#141F42] focus:outline-none focus:border-[#DA2030]"
            >
              <option value="all">All Categories</option>
              <option value="c1">Wall Calendars (c1)</option>
              <option value="c2">Desk Calendars (c2)</option>
              <option value="c3">Corporate Series (c3)</option>
              <option value="c4">Religious Devotional (c4)</option>
            </select>

            <button
              onClick={() => {
                setProductToEdit(null);
                setIsModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-[#DA2030] text-white text-xs font-bold hover:bg-[#c41b2a] transition-all flex items-center gap-2 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
            >
              <Plus className="w-4 h-4" />
              Add Product
            </button>
          </div>
        </div>

        {/* Product Table */}
        <div className="bg-white border border-[#E8E1D0] rounded-3xl overflow-hidden shadow-sm">
          {isLoading ? (
            <div className="p-16 flex flex-col items-center justify-center gap-4 text-center">
              <Loader2 className="w-8 h-8 text-[#DA2030] animate-spin" />
              <p className="text-xs font-bold text-[#5C6478] uppercase tracking-wider">
                Loading Catalogue from Supabase...
              </p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-16 text-center">
              <SlidersHorizontal className="w-10 h-10 text-[#8D96A8] mx-auto mb-3 opacity-40" />
              <h3 className="text-base font-bold text-[#141F42]">No Products Found</h3>
              <p className="text-xs text-[#5C6478] mt-1">
                Try adjusting your search criteria or add a new product.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E8E1D0] bg-[#FAF6EC] text-[11px] font-extrabold uppercase tracking-wider text-[#5C6478]">
                    <th className="py-4 px-6">Product</th>
                    <th className="py-4 px-4">SKU / Code</th>
                    <th className="py-4 px-4">Category</th>
                    <th className="py-4 px-4">Specs &amp; Material</th>
                    <th className="py-4 px-4">MOQ</th>
                    <th className="py-4 px-4">Price</th>
                    <th className="py-4 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E1D0] text-xs">
                  {filteredProducts.map((prod) => (
                    <tr key={prod.id} className="hover:bg-[#FAF6EC]/50 transition-colors">
                      {/* Product Preview */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-[#FAF6EC] border border-[#E8E1D0] overflow-hidden flex-shrink-0 p-1 flex items-center justify-center">
                            <img
                              src={prod.thumbnail}
                              alt={prod.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <span className="font-bold text-[#141F42] block text-sm">
                              {prod.name}
                            </span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              {prod.featured && (
                                <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[9px] font-bold rounded">
                                  Featured
                                </span>
                              )}
                              {prod.bestSeller && (
                                <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-800 text-[9px] font-bold rounded">
                                  Bestseller
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* SKU */}
                      <td className="py-4 px-4 font-mono font-bold text-[#141F42]">
                        {prod.sku}
                      </td>

                      {/* Category */}
                      <td className="py-4 px-4">
                        <span className={`px-2.5 py-1 rounded-full border text-[11px] font-bold ${getCategoryInfo(prod.categoryId).color}`}>
                          {getCategoryInfo(prod.categoryId).label}
                        </span>
                      </td>

                      {/* Material & Specs */}
                      <td className="py-4 px-4 text-[#5C6478]">
                        <span className="block font-semibold text-[#141F42]">{prod.material}</span>
                        <span className="text-[11px] text-[#8D96A8]">{prod.paperGsm} GSM • {prod.size}</span>
                      </td>

                      {/* MOQ */}
                      <td className="py-4 px-4 font-bold text-[#141F42]">
                        {prod.moq}+ pcs
                      </td>

                      {/* Price */}
                      <td className="py-4 px-4 font-bold text-[#DA2030]">
                        ₹{prod.price}
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setProductToEdit(prod);
                              setIsModalOpen(true);
                            }}
                            className="p-2 rounded-lg border border-[#E8E1D0] text-[#141F42] hover:bg-[#FAF6EC] hover:border-[#DA2030] hover:text-[#DA2030] transition-colors"
                            title="Edit product"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setProductToDelete(prod)}
                            className="p-2 rounded-lg border border-[#E8E1D0] text-[#DA2030] hover:bg-[#DA2030] hover:text-white transition-colors"
                            title="Delete product"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* Add / Edit Product Modal */}
      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setProductToEdit(null);
        }}
        onSave={handleSaveProduct}
        productToEdit={productToEdit}
      />

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8E1D0] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#DA2030]/10 text-[#DA2030] flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-extrabold text-[#141F42] mb-2">
              Delete Product?
            </h3>
            <p className="text-xs text-[#5C6478] leading-relaxed mb-6">
              Are you sure you want to delete <strong className="text-[#141F42]">"{productToDelete.name}"</strong>? This will remove it from the live catalogue and Supabase database.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setProductToDelete(null)}
                className="px-4 py-2 rounded-xl border border-[#E8E1D0] text-xs font-bold text-[#5C6478] hover:bg-[#FAF6EC]"
              >
                Cancel
              </button>
              <button
                onClick={() => deleteMutation.mutate(productToDelete.id)}
                disabled={deleteMutation.isPending}
                className="px-5 py-2 rounded-xl bg-[#DA2030] text-white text-xs font-bold hover:bg-[#c41b2a] transition-all flex items-center gap-2"
              >
                {deleteMutation.isPending ? 'Deleting...' : 'Confirm Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
