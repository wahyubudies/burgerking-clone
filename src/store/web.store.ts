import { create } from 'zustand';

export const useMenuStore: any = create((set: any) => ({
    menu: "",
    selectMenu: () => set((state: string) => ({ menu: state })),
    removeMenu: () => set({ menu: "" }),
}));

export const useCartStore: any = create((set: any) => ({
    cart: {
        count: 0,
        items: []
    },
    setCart: (item: any) => {
        set((state: any) => ({
            cart: { ...item },
        }));
    },
    removeCart: () => set({ cart: {} })
}));