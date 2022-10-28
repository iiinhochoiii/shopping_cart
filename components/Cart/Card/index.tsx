import React, { useState } from 'react';
import * as S from './style';
import { Product } from '@/interfaces/product';
import Image from 'next/image';
import { comma } from '@/utils/common';
import Checkbox from '@/components/Common/Checkbox';

interface Props {
  cart: Product & { quantity: number };
}
const CartCard = (props: Props) => {
  const { cart } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.CardContainer>
      <S.CheckboxContent className="table-content">
        <Checkbox
          isChecked={isChecked}
          onChangeHandler={() => setIsChecked(!isChecked)}
        />
      </S.CheckboxContent>
      <S.InfoContent className="table-content">
        <div>
          <S.InfoImage>
            <Image src={cart.detail_image_url} layout="fill" priority />
          </S.InfoImage>
          <S.InfoWrap>
            <p className="name">{cart.item_name}</p>
            <p className="price">{cart.price}</p>
            {cart.availableCoupon !== false && <p>쿠폰 적용 가능</p>}
          </S.InfoWrap>
        </div>
        <button className="delete-btn">삭제</button>
      </S.InfoContent>
      <S.QuantityContent className="table-content">
        <div>
          <button>-</button>
          <input value={cart.quantity} onChange={() => console.log('test')} />
          <button>+</button>
        </div>
      </S.QuantityContent>
      <S.PriceContent className="table-content">
        <span>{comma(Number(cart.price) * Number(cart.quantity))}</span>원
      </S.PriceContent>
      <S.DeliveryContent className="table-content">
        무료 업체배송
      </S.DeliveryContent>
    </S.CardContainer>
  );
};

export default React.memo(CartCard);
