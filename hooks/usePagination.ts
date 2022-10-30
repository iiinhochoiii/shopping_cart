import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

interface Props {
  total?: number;
  perPage: number;
  pageSize: number;
  currentPage: number;
}

const usePagination = (props: Props) => {
  const { total, perPage, pageSize, currentPage } = props;
  const router = useRouter();
  const [pageList, setPageList] = useState<number[]>([]);

  const paging = useCallback(() => {
    const pageArr: number[] = [];

    const startPage = Math.ceil(currentPage / perPage - 1) * perPage + 1;
    const endPage = Math.ceil(currentPage / perPage) * perPage;

    for (let i: number = startPage; i <= endPage; i++) {
      if (total && i <= Math.ceil(total / pageSize)) {
        pageArr.push(i);
      }
    }
    setPageList(pageArr);
  }, [total]);

  useEffect(() => {
    paging();
  }, [total, currentPage]);

  const routerPush = (page: number) => {
    router.push({
      pathname: 'products',
      query: {
        page: page,
      },
    });
  };

  const nextPageHandler = () => {
    if (currentPage < Math.ceil(Number(total) / pageSize)) {
      routerPush(currentPage + 1);
    }
  };

  const prevPageHandler = () => {
    if (currentPage > 1) {
      routerPush(currentPage - 1);
    }
  };

  return {
    pageList,
    nextPageHandler,
    prevPageHandler,
    routerPush,
  };
};

export default usePagination;
