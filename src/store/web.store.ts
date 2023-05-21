import { create } from 'zustand';

export const useMenuStore = create((set) => ({
    menu: "",
    selectMenu: () => set((state: string) => ({ menu: state })),
    removeMenu: () => set({ menu: "" }),
}));