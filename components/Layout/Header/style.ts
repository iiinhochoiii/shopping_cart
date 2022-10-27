import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid #d4d4d4;
  background-color: #fff;
  padding: 0 20px;
`;

export const Content = styled.ul`
  display: flex;
  height: 50px;
  margin: 0;

  & > li {
    list-style: none;
    display: flex;

    & > a {
      font-size: 16px;
      font-weight: bold;
      margin: auto 20px auto 0;
    }

    &.isRouted {
      & > a {
        padding: 6px 0;
        border-bottom: 4px solid;
      }
    }
  }
`;
