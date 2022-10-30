import styled from '@emotion/styled';

export const Card = styled.article`
  width: 30%;
  margin-bottom: 40px;
`;

export const ProductContent = styled.div`
  cursor: pointer;
`;

export const ImageWrap = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

export const InfomationWrap = styled.div`
  margin-top: 15px;
  p {
    margin: 0;
  }

  .name {
    font-size: 13px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 7px;
  }

  .price {
    font-size: 12px;

    & > span {
      font-size: 13px;
      font-weight: bold;
    }
  }
`;

export const CartButton = styled.button<{ isCart: boolean }>`
  margin-top: 6px;
  border: 1px solid #e4e4e4;
  padding: 0 8px;
  border-radius: 1px;
  font-size: 10px;
  height: 26px;
  line-height: 26px;
  color: ${(props) => (props.isCart ? '#fff' : '#5d5d5d')};
  background: ${(props) => (props.isCart ? '#333' : 'none')};
`;
