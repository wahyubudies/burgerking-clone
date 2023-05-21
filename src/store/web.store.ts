import { create } from 'zustand';

export const useMenuStore: any = create((set: any) => ({
    menu: "",
    selectMenu: () => set((state: string) => ({ menu: state })),
    removeMenu: () => set({ menu: "" }),
}));