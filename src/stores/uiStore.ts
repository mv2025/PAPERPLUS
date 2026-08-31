import { create } from 'zustand';

interface UiState {
  isQuickViewOpen: boolean;
  quickViewProductId: string | null;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
}

export const useUiStore = create<UiState>((set) => ({
  isQuickViewOpen: false,
  quickViewProductId: null,
  openQuickView: (productId) => set({ isQuickViewOpen: true, quickViewProductId: productId }),
  closeQuickView: () => set({ isQuickViewOpen: false, quickViewProductId: null }),
}));
