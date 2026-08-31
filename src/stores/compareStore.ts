import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CompareState {
  items: string[];
  addItem: (productId: string) => { success: boolean; message?: string };
  removeItem: (productId: string) => void;
  clearCompare: () => void;
  hasItem: (productId: string) => boolean;
}

const MAX_COMPARE = 4;

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (productId) => {
        const state = get();
        if (state.items.includes(productId)) {
          return { success: false, message: 'Item already in comparison' };
        }
        if (state.items.length >= MAX_COMPARE) {
          return { success: false, message: `Maximum ${MAX_COMPARE} items allowed in comparison` };
        }
        set({ items: [...state.items, productId] });
        return { success: true };
      },
      removeItem: (productId) => set((state) => ({
        items: state.items.filter(id => id !== productId)
      })),
      clearCompare: () => set({ items: [] }),
      hasItem: (productId) => get().items.includes(productId),
    }),
    { name: 'arg-compare' }
  )
);
