import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RecentlyViewedState {
  items: string[];
  addViewedItem: (productId: string) => void;
  clearRecentlyViewed: () => void;
}

const MAX_HISTORY = 10;

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set) => ({
      items: [],
      addViewedItem: (productId) => set((state) => {
        // Remove if it exists to bring it to the front
        const filtered = state.items.filter(id => id !== productId);
        const next = [productId, ...filtered].slice(0, MAX_HISTORY);
        return { items: next };
      }),
      clearRecentlyViewed: () => set({ items: [] }),
    }),
    { name: 'arg-recently-viewed' }
  )
);
