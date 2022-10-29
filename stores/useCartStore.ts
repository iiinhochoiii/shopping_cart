import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Cart, Product } from '@/interfaces/product';
import { CART_KEY } from '@/constants/storageKeys';

interface State {
  carts: Cart[];
  removeCart: (item_no: number) => void;
  addCart: (item: Product) => void;
  increaseItem: (item_no: number) => void;
  decreaseItem: (item_no: number) => void;
}

const useCartStore = create(
  persist<State>(
    (set, get) => ({
      carts: [],
      removeCart: (item_no) =>
        set((state) => ({
          carts: state.carts.filter((cart) => cart.item_no !== item_no),
        })),
      addCart: (item) => {
        const { carts } = get();

        if (carts.length > 2) {
          alert('장바구니에는 최대 3개의 상품이 담길 수 있습니다.');
          return;
        }

        if (!carts.find((cart) => cart.item_no === item.item_no)) {
          return set((state) => ({
            carts: [...state.carts, { ...item, quantity: 1 }],
          }));
        }
      },
      increaseItem: (item_no) =>
        set((state) => ({
          carts: state.carts.map((cart) =>
            cart.item_no === item_no
              ? {
                  ...cart,
                  quantity: cart.quantity + 1,
                }
              : cart
          ),
        })),
      decreaseItem: (item_no) =>
        set((state) => ({
          carts: state.carts.map((cart) =>
            cart.item_no === item_no
              ? {
                  ...cart,
                  quantity: cart.quantity - 1,
                }
              : cart
          ),
        })),
    }),
    {
      name: CART_KEY, // name of item in the storage (must be unique)
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);

export default useCartStore;
