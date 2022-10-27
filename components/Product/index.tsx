import React, { useEffect, useState } from 'react';
import * as S from './style';
import useProductsData from '@/hooks/queries/useProductsData';
import usePagination from '@/hooks/usePagination';
import ProductCard from './Card';
import Pagination from '../Common/Pagination';

const ProductComponent = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, refetch } = useProductsData({
    page: currentPage,
    pageSize: 5,
    orderBy: 'desc',
  });

  const { pageList, nextPageHandler, prevPageHandler } = usePagination({
    currentPage: currentPage,
    setCurrentPage,
    total: data?.total,
    perPage: 5,
    pageSize: 5,
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
        move={(pageNum) => setCurrentPage(pageNum)}
        next={() => nextPageHandler()}
        prev={() => prevPageHandler()}
      />
    </S.Container>
  );
};

export default ProductComponent;
