import React from 'react';
import * as S from './style';
import { Product } from '@/interfaces/product';
import Image from 'next/image';
import { comma } from '@/utils/common';

interface Props {
  item: Product;
}

const ProductCard = (props: Props) => {
  const { item } = props;

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
      <S.CartButton>장바구니 담기</S.CartButton>
    </S.Card>
  );
};

export default ProductCard;
