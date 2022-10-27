import { useState, useEffect, useCallback } from 'react';

interface Props {
  total?: number;
  perPage: number;
  pageSize: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const usePagination = (props: Props) => {
  const { total, perPage, pageSize, currentPage, setCurrentPage } = props;
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

  const nextPageHandler = () => {
    if (currentPage < Math.ceil(Number(total) / pageSize)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    pageList,
    nextPageHandler,
    prevPageHandler,
  };
};

export default usePagination;
