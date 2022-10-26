import React from 'react';
import * as S from './style';
import useProductsData from '@/hooks/queries/useProductsData';
import ProductCard from './Card';

const ProductComponent = () => {
  const { data } = useProductsData({ page: 1, pageSize: 5, orderBy: 'desc' });

  if (!data) {
    return <div>데이터를 찾을 수 없습니다.</div>;
  }

  return (
    <S.Container>
      <S.ItemContent>
        {data.items.map((item) => (
          <ProductCard key={item.item_no} item={item} />
        ))}
      </S.ItemContent>
    </S.Container>
  );
};

export default ProductComponent;
