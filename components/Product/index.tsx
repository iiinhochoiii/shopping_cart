import React, { useEffect } from 'react';
import * as S from './style';
import useProductsData from '@/hooks/queries/useProductsData';
import usePagination from '@/hooks/usePagination';
import ProductCard from './Card';
import Pagination from '../Common/Pagination';

interface Props {
  page: number;
}

const ProductComponent = (props: Props) => {
  const { page } = props;

  const { data, refetch, isFetching } = useProductsData({
    page: page,
    pageSize: 5,
    orderBy: 'desc',
  });

  const { pageList, nextPageHandler, prevPageHandler, routerPush } =
    usePagination({
      currentPage: page,
      total: data?.total,
      perPage: 5,
      pageSize: 5,
    });

  useEffect(() => {
    refetch();
  }, [page]);

  if (isFetching) {
    return <S.Container>데이터를 불러오는 중 입니다...</S.Container>;
  }

  if (!data) {
    return <S.Container>데이터가 없습니다...</S.Container>;
  }

  return (
    <S.Container>
      <S.ItemContent>
        {data.items.map((item) => (
          <ProductCard key={item.item_no} item={item} />
        ))}
      </S.ItemContent>
      <Pagination
        currentPage={page}
        pageList={pageList}
        move={(pageNum) => {
          routerPush(pageNum);
        }}
        next={() => nextPageHandler()}
        prev={() => prevPageHandler()}
      />
    </S.Container>
  );
};

export default ProductComponent;
