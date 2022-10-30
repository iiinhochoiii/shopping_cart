import styled from '@emotion/styled';
import * as Color from '@/constants/colors';

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: 100px 0px;
  border-top: 4px solid ${Color.BLACK};
  border-bottom: 1px solid ${Color.BLACK};
  text-align: center;

  & > span {
    font-weight: 500;
    font-size: 32px;
  }
`;

export const LinkWrap = styled.div`
  display: flex;
  margin-top: 20px;

  & > a {
    margin: 0 auto;
    border: 1px solid ${Color.BLACK};
    width: 250px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    font-weight: bold;
  }
`;
