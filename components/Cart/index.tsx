import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CART_KEY } from '@/constants/storageKeys';
import { Product } from '@/interfaces/product';
import CartCard from './Card';
import CartPaymentComponent from './Payment';
import Checkbox from '../Common/Checkbox';

const CartComponent = () => {
  const [carts, setCarts] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

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
          <div className="table-title checkbox">
            <Checkbox
              isChecked={isChecked}
              onChangeHandler={() => setIsChecked(!isChecked)}
            />
          </div>
          <div className="table-title product-info">상품정보</div>
          <div className="table-title quantity">수량</div>
          <div className="table-title price">주문금액</div>
          <div className="table-title delivery-fee">배송비</div>
        </S.ContentHeader>
        {carts.map((item: Product & { quantity: number }) => (
          <CartCard key={item.item_no} cart={item} />
        ))}
      </S.CartContent>
      <CartPaymentComponent />
    </S.Container>
  );
};

export default CartComponent;
