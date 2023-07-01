import { create } from "zustand";

interface IUseStoreModal {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<IUseStoreModal>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));
