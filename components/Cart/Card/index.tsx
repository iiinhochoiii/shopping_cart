import React from 'react';
import * as S from './style';
import { Product } from '@/interfaces/product';
import Image from 'next/image';
import { comma } from '@/utils/common';
import Checkbox from '@/components/Common/Checkbox';
import useCartStore from '@/stores/useCartStore';

interface Props {
  cart: Product & { quantity: number };
  isChecked: boolean;
  onChnageCheckbox: () => void;
}
const CartCard = (props: Props) => {
  const { cart, isChecked, onChnageCheckbox } = props;
  const { removeCart, increaseItem, decreaseItem, changeQuantityItem } =
    useCartStore();

  const removeHandler = () => {
    if (confirm('장바구니에서 삭제하시겠습니까?')) {
      removeCart(cart.item_no);
    }
  };

  const onChnageQuantityHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const reg = /^[0-9]+$/;

    if (reg.test(value) || value === '') {
      changeQuantityItem(cart.item_no, Number(value));
    } else {
      alert('숫자만 입력 가능합니다.');
    }
  };

  return (
    <S.CardContainer>
      <S.CheckboxContent className="table-content">
        <Checkbox
          isChecked={isChecked}
          onChangeHandler={() => onChnageCheckbox()}
        />
      </S.CheckboxContent>
      <S.InfoContent className="table-content">
        <div>
          <S.InfoImage>
            <Image src={cart.detail_image_url} layout="fill" priority />
          </S.InfoImage>
          <S.InfoWrap>
            <p className="name">{cart.item_name}</p>
            <p className="price">{comma(cart.price)}원</p>
            {cart.availableCoupon !== false && <p>쿠폰 적용 가능</p>}
          </S.InfoWrap>
        </div>
        <button className="delete-btn" onClick={() => removeHandler()}>
          삭제
        </button>
      </S.InfoContent>
      <S.QuantityContent className="table-content">
        <div>
          <button
            onClick={() => {
              if (cart.quantity > 1) {
                decreaseItem(cart.item_no);
              }
            }}
          >
            -
          </button>
          <input
            value={cart.quantity}
            onChange={(e) => onChnageQuantityHandler(e)}
          />
          <button onClick={() => increaseItem(cart.item_no)}>+</button>
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
