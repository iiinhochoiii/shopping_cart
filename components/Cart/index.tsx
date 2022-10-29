import React, { useState } from 'react';
import * as S from './style';
import { Product } from '@/interfaces/product';
import Checkbox from '../Common/Checkbox';
import useCartStore from '@/stores/useCartStore';
import dynamic from 'next/dynamic';

const CartCard = dynamic(() => import('./Card'), { ssr: false });
const CartPaymentComponent = dynamic(() => import('./Payment'), { ssr: false });

const CartComponent = () => {
  const { carts } = useCartStore();

  const [isCheckedList, setIsCheckedList] = useState(
    Array.from({ length: carts.length }, () => true)
  );

  return (
    <S.Container>
      <S.CartContent>
        <S.ContentHeader>
          <div className="table-title checkbox">
            <Checkbox
              isChecked={isCheckedList.filter((item) => !item).length === 0}
              onChangeHandler={() =>
                setIsCheckedList(isCheckedList.map((item) => !item))
              }
            />
          </div>
          <div className="table-title product-info">상품정보</div>
          <div className="table-title quantity">수량</div>
          <div className="table-title price">주문금액</div>
          <div className="table-title delivery-fee">배송비</div>
        </S.ContentHeader>
        {carts.map((item: Product & { quantity: number }, index: number) => (
          <CartCard
            key={item.item_no}
            cart={item}
            isChecked={isCheckedList[index]}
            onChnageCheckbox={() =>
              setIsCheckedList(
                isCheckedList.map((item, i) => (index === i ? !item : item))
              )
            }
          />
        ))}
      </S.CartContent>
      <CartPaymentComponent isCheckedList={isCheckedList} />
    </S.Container>
  );
};

export default CartComponent;
