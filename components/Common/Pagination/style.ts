import styled from '@emotion/styled';
import * as Color from '@/constants/colors';

export const Pagination = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const PageBtn = styled.button<{ isPaging?: boolean }>`
  margin: 0 5px;
  background: none;
  border: 1px solid;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.isPaging && Color.BLACK};
  color: ${(props) => props.isPaging && Color.WHITE};

  &:disabled {
    cursor: auto;
  }
`;
