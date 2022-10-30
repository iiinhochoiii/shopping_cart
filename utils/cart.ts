import { Cart } from '@/interfaces/product';

export const getTotal = (carts: Cart[]) => {
  return carts.reduce((acc, cur) => {
    if (cur.isChecked) {
      return acc + cur.price * cur.quantity;
    } else {
      return acc;
    }
  }, 0);
};
