import React, { useState } from 'react';
import * as S from './style';
import { Product } from '@/interfaces/product';
import Image from 'next/image';
import { comma } from '@/utils/common';
import useCartStore from '@/stores/useCartStore';

interface Props {
  item: Product;
}

const ProductCard = (props: Props) => {
  const { item } = props;
  const { carts, removeCart, addCart } = useCartStore();
  const [isCart, setIsCart] = useState(
    !!carts.find((cart) => cart.item_no === item.item_no)
  );

  return (
    <S.Card>
      <S.ProductContent>
        <S.ImageWrap>
          <Image src={item.detail_image_url} layout="fill" priority />
        </S.ImageWrap>
        <S.InfomationWrap>
          <p className="name">{item.item_name}</p>
          <p className="price">
            <span>{comma(item.price)}</span>원
          </p>
        </S.InfomationWrap>
      </S.ProductContent>
      <S.CartButton
        isCart={isCart}
        onClick={() => {
          if (isCart) {
            removeCart(item.item_no);
            setIsCart(false);
          } else {
            addCart(item);
            setIsCart(true);
          }
        }}
      >
        {isCart ? '장바구니 빼기' : '장바구니 담기'}
      </S.CartButton>
    </S.Card>
  );
};

export default React.memo(ProductCard);
