import React from 'react';
import * as S from './style';
import { Cart } from '@/interfaces/product';
import Checkbox from '../Common/Checkbox';
import useCartStore from '@/stores/useCartStore';
import dynamic from 'next/dynamic';
import CouponModal from './CouponModal';

const CartCard = dynamic(() => import('./Card'), { ssr: false });
const CartPaymentComponent = dynamic(() => import('./Payment'), { ssr: false });

const CartComponent = () => {
  const { carts, onAllChnageCheckbox } = useCartStore();

  return (
    <S.Container>
      <S.CartContent>
        <S.ContentHeader>
          <div className="table-title checkbox">
            <Checkbox
              isChecked={carts.filter((item) => !item.isChecked).length === 0}
              onChangeHandler={() => onAllChnageCheckbox()}
            />
          </div>
          <div className="table-title product-info">상품정보</div>
          <div className="table-title quantity">수량</div>
          <div className="table-title price">주문금액</div>
          <div className="table-title delivery-fee">배송비</div>
        </S.ContentHeader>
        {carts.map((item: Cart) => (
          <CartCard key={item.item_no} cart={item} />
        ))}
      </S.CartContent>
      <CouponModal />
      <CartPaymentComponent />
    </S.Container>
  );
};

export default CartComponent;
