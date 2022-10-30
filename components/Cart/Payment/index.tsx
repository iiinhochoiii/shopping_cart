import React, { useMemo } from 'react';
import * as S from './style';
import useCartStore from '@/stores/useCartStore';
import { comma } from '@/utils/common';
import { getTotal } from '@/utils/cart';

const CartPaymentComponent = () => {
  const { carts, couponData } = useCartStore();

  const totalPayment = useMemo(() => {
    // 쿠폰 적용 상품과 쿠폰 적용 불가능 상품의 total을 나눈다.

    // 쿠폰 적용 가능 Total Price
    let availableCouponTotal = getTotal(
      carts.filter((cart) => cart.availableCoupon !== false)
    );

    // 쿠폰 적용 불가 Total Price
    const notAvailableCouponTotal = getTotal(
      carts.filter((cart) => cart.availableCoupon === false)
    );

    // 쿠폰을 적용 했을 때
    if (couponData) {
      // 금액 할인 일떄
      if (couponData.type === 'amount') {
        // 쿠폰 적용 가능 상품 총 결제 금액 - 할인 금액 보다 0보다 클때
        // ex) 25,000(총 금액) - 10,000(할인금액) = 15,000
        if (availableCouponTotal - Number(couponData.discountAmount) > 0) {
          availableCouponTotal =
            availableCouponTotal - Number(couponData.discountAmount); // 쿠폰 사용 가능 품목 총액 - 할인 금액(10000)
        } else {
          // 0보다 작다면 0원까지만 할인 되도록
          // ex) 5,900 (총 금액) - 10,000(할인 금액) = -4100원이 아닌 0원
          availableCouponTotal = 0;
        }
      } else if (couponData.type === 'rate') {
        // 비율 할인 일때
        availableCouponTotal =
          availableCouponTotal -
          availableCouponTotal / Number(couponData.discountRate); // 쿠폰 사용 가능 품목 총액 *  0.9
      }
    }

    return Math.floor(availableCouponTotal + notAvailableCouponTotal);
  }, [carts, couponData]);

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
            <span>총 {carts.filter((cart) => cart.isChecked).length}개</span>
          </div>
          <div className="table-content delivery-fee">
            <i />
            <p>0원</p>
          </div>
          <div className="table-content payment">
            <i />
            <p>{comma(totalPayment)}원</p>
            {couponData && <span>[{couponData.title}] 적용</span>}
          </div>
        </S.ContentPayInfoWrap>
      </S.Content>
    </S.PaymentContainer>
  );
};

export default CartPaymentComponent;
