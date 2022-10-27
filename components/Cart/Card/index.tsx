import React from 'react';
import * as S from './style';
import { Product } from '@/interfaces/product';
import Image from 'next/image';
import { comma } from '@/utils/common';

interface Props {
  cart: Product & { quantity: number };
}
const CartCard = (props: Props) => {
  const { cart } = props;

  return (
    <S.CardContainer>
      <S.InfoContent>
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
      <S.QuantityContent>
        <div>
          <button>-</button>
          <input value={cart.quantity} onChange={() => console.log('test')} />
          <button>+</button>
        </div>
      </S.QuantityContent>
      <S.PriceContent>
        <span>{comma(Number(cart.price) * Number(cart.quantity))}</span>원
      </S.PriceContent>
      <S.DeliveryContent>무료 업체배송</S.DeliveryContent>
    </S.CardContainer>
  );
};

export default React.memo(CartCard);
