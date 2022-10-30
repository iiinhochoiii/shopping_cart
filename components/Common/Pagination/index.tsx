import React from 'react';
import * as S from './style';

interface Props {
  currentPage: number;
  pageList: number[];
  move: (pageNum: number) => void;
  next: () => void;
  prev: () => void;
}

const Pagination = (props: Props) => {
  const { currentPage, pageList, move, next, prev } = props;

  return (
    <S.Pagination>
      <S.PageBtn
        onClick={() => {
          prev();
        }}
      >
        이전
      </S.PageBtn>
      {pageList.map((page) => (
        <S.PageBtn
          key={page}
          onClick={() => move(page)}
          isPaging={currentPage === page}
          disabled={page === currentPage}
        >
          {page}
        </S.PageBtn>
      ))}
      <S.PageBtn
        onClick={() => {
          next();
        }}
      >
        다음
      </S.PageBtn>
    </S.Pagination>
  );
};

export default Pagination;
