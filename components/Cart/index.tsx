import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CART_KEY } from '@/constants/storageKeys';
import { Product } from '@/interfaces/product';
import CartCard from './Card';

const CartComponent = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCart = () => {
      const data = localStorage.getItem(CART_KEY);

      return JSON.parse(String(data));
    };
    const data = getCart();
    setCarts(data);
  }, []);

  return (
    <S.Container>
      <S.CartContent>
        <S.ContentHeader>
          <div className="product-info">상품정보</div>
          <div className="quantity">수량</div>
          <div className="price">주문금액</div>
          <div className="delivery-fee">배송비</div>
        </S.ContentHeader>
        {carts.map((item: Product & { quantity: number }) => (
          <CartCard key={item.item_no} cart={item} />
        ))}
      </S.CartContent>
    </S.Container>
  );
};

export default CartComponent;
