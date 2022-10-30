import styled from '@emotion/styled';

export const Container = styled.div`
  margin-top: 100px;
  width: 100%;
  padding: 100px 0px;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(0, 0, 0);
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
    border: 1px solid #333;
    width: 250px;
    height: 60px;
    line-height: 60px;
    font-size: 24px;
    font-weight: bold;
  }
`;
