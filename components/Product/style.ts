import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 50px 0;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5%;

  @media screen and (max-width: 1024px) {
    gap: 0;
    justify-content: space-between;
  }
`;
