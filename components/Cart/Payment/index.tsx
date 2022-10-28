import React from 'react';
import * as S from './style';

const CartPaymentComponent = () => {
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
            <p>197,000원</p>
            <span>총 2개</span>
          </div>
          <div className="table-content delivery-fee">
            <i />
            <p>0원</p>
          </div>
          <div className="table-content payment">
            <i />
            <p>197,000원</p>
          </div>
        </S.ContentPayInfoWrap>
      </S.Content>
    </S.PaymentContainer>
  );
};

export default CartPaymentComponent;
