import React from 'react';
import * as S from './style';
import Link from 'next/link';

const EmptyCart = () => {
  return (
    <S.Container>
      <span>장바구니가 비어있습니다.</span>
      <S.LinkWrap>
        <Link href="/products">상품 보러가기</Link>
      </S.LinkWrap>
    </S.Container>
  );
};

export default EmptyCart;
