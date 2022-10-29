import React, { useMemo } from 'react';
import * as S from './style';
import useCartStore from '@/stores/useCartStore';
import { comma } from '@/utils/common';

const CartPaymentComponent = () => {
  const { carts } = useCartStore();

  const totalPayment = useMemo(() => {
    const pay = carts.reduce((acc, cur) => {
      return cur.isChecked ? acc + cur.price * cur.quantity : acc;
    }, 0);

    return pay;
  }, [carts]);

  return (
    <S.PaymentContainer>
      <S.Content>
        <S.ContentTitleWrap>
          <div className="table-title price">총 주문금액</div>
          <div className="table-title delivery-fee">총 배송비</div>
          <div className="table-title payment">총 결제금액</div>
        </S.ContentTitleWrap>
        <S.ContentPayInfoWrap>
          <div className="table-content price">
            <p>{comma(totalPayment)}원</p>
            <span>총 {carts.length || 0}개</span>
          </div>
          <div className="table-content delivery-fee">
            <i />
            <p>0원</p>
          </div>
          <div className="table-content payment">
            <i />
            <p>{comma(totalPayment)}원</p>
          </div>
        </S.ContentPayInfoWrap>
      </S.Content>
    </S.PaymentContainer>
  );
};

export default CartPaymentComponent;
