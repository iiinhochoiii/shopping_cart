import React, { useState, useEffect } from 'react';
import * as S from './style';
import useCouponsData from '@/hooks/queries/useCouponsData';
import { comma } from '@/utils/common';
import useCartStore from '@/stores/useCartStore';
import Button from '@/components/Common/Button';

const CouponModal = () => {
  const [isOpenCoupon, setIsOpenCoupon] = useState(false);
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  const { data: coupons } = useCouponsData();
  const { couponData, setCouponData, carts } = useCartStore();

  useEffect(() => {
    if (isOpenCoupon) {
      document.body.setAttribute('style', 'overflow: hidden');
      setSelectedType(couponData?.type);
    }
    return () => {
      document.body.setAttribute('style', 'overflow: auto');
    };
  }, [isOpenCoupon]);

  const completeHandler = () => {
    if (
      selectedType !== null &&
      confirm(
        `[${
          coupons?.find((item) => item.type === selectedType)?.title
        }] 을 적용하시겠습니까?`
      )
    ) {
      setCouponData(coupons?.find((coupon) => coupon.type === selectedType));
      setIsOpenCoupon(false);
    }
  };

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          if (carts.filter((cart) => cart.isChecked).length > 0) {
            setIsOpenCoupon(true);
          } else {
            alert('상품이 선택되어 있지 않습니다.');
          }
        }}
      >
        쿠폰 적용
      </Button>
      <S.ModalWrapper
        isOpen={isOpenCoupon}
        onClick={() => setIsOpenCoupon(!isOpenCoupon)}
      >
        <S.ModalInner onClick={(e) => e.stopPropagation()}>
          <S.ContentHeader>
            <h3>Coupon List</h3>
            <button onClick={() => setIsOpenCoupon(false)}>닫기</button>
          </S.ContentHeader>
          <S.ContentTable>
            <thead>
              <tr>
                <th>쿠폰 이름</th>
                <th>할인율 및 금액</th>
              </tr>
            </thead>
            <tbody>
              {coupons?.map((coupon, index) => (
                <tr key={index}>
                  <td>
                    <div className="table-content-title">
                      <input
                        type="radio"
                        checked={selectedType === coupon.type}
                        onChange={() => setSelectedType(coupon.type)}
                      />
                      <span>{coupon.title}</span>
                    </div>
                  </td>
                  <td>
                    {coupon.type === 'amount'
                      ? `${comma(Number(coupon.discountAmount))}원`
                      : coupon.type === 'rate'
                      ? `${coupon.discountRate}%`
                      : '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </S.ContentTable>
          <S.SelectBtn onClick={() => completeHandler()}>적용하기</S.SelectBtn>
        </S.ModalInner>
      </S.ModalWrapper>
    </React.Fragment>
  );
};

export default CouponModal;
