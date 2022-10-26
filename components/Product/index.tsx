import React, { useEffect } from 'react';
import * as S from './style';
import useProductsData from '@/hooks/queries/useProductsData';
import usePagination from '@/hooks/usePagination';
import ProductCard from './Card';
import Pagination from '../Common/Pagination';

const ProductComponent = () => {
  const {
    currentPage,
    pageList,
    movePageHandler,
    nextPageHandler,
    prevPageHandler,
  } = usePagination({
    total: 12,
    perPage: 5,
    pageSize: 5,
  });

  const { data, refetch } = useProductsData({
    page: currentPage,
    pageSize: 5,
    orderBy: 'desc',
  });

  useEffect(() => {
    refetch();
  }, [currentPage]);

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
      <Pagination
        currentPage={currentPage}
        pageList={pageList}
        move={(pageNum) => movePageHandler(pageNum)}
        next={() => nextPageHandler()}
        prev={() => prevPageHandler()}
      />
    </S.Container>
  );
};

export default ProductComponent;
