import styled from '@emotion/styled';

const black = '#333';

export const Container = styled.div`
  padding: 50px 0;
`;

export const CartContent = styled.div`
  font-size: 12px;
  color: rgb(76, 76, 76);
  border-bottom: 1px solid ${black};
`;

export const ContentHeader = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid ${black};

  .table-title {
    display: table-cell;
    padding: 0px;
    border: 0px;
    height: 74px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    vertical-align: middle;
    text-align: center;
    color: ${black};

    &.checkbox {
      width: 4.3%;
    }

    &.quantity,
    &.price,
    &.delivery-fee {
      width: 200px;
    }
  }
`;

export const ButtonWrap = styled.div`
  margin-top: 40px;
  display: flex;

  & > button {
    margin-right: 10px;
  }

  .buy-btn {
    margin: 0 auto;
    width: 300px;
    height: 50px;
    background-color: #333;
    color: #fff;
    border: none;
  }
`;
