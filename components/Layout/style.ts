import styled from '@emotion/styled';

export const Layout = styled.div`
  min-height: 100vh;
`;

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 40px);
  }
`;
