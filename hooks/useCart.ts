import { useState } from 'react';
import { Product } from '@/interfaces/product';
import { CART_KEY } from '@/constants/storageKeys';

const useCart = (item: Product) => {
  const getCart = () => {
    const data = localStorage.getItem(CART_KEY);

    return JSON.parse(String(data));
  };

  const localData = getCart();

  const [isCart, setIsCart] = useState(
    localData
      ? localData.find((cart: Product) => cart.item_no === item.item_no)
      : false
  );

  const addCart = () => {
    const cart = getCart();

    if (!cart || cart.length > 2) {
      alert('장바구니에는 최대 3개의 상품이 담길 수 있습니다.');
      return;
    }

    let obj;

    if (cart) {
      if (cart.find((c: Product) => c.item_no !== item.item_no)) {
        obj = [...cart, { ...item, quantity: 1 }];
      } else {
        return;
      }
    } else {
      obj = [{ ...item, quantity: 1 }];
    }
    localStorage.setItem(CART_KEY, JSON.stringify(obj));
    setIsCart(true);
  };

  const removeCart = () => {
    const cart = getCart();

    const obj = cart.filter((c: Product) => c.item_no !== item.item_no);
    localStorage.setItem(CART_KEY, JSON.stringify(obj));
    setIsCart(false);
  };

  return {
    isCart,
    addCart,
    removeCart,
  };
};

export default useCart;
