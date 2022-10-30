import styled from '@emotion/styled';
import * as Color from '@/constants/colors';

export const Container = styled.div`
  padding: 50px 0;
`;

export const CartContent = styled.div`
  font-size: 12px;
  color: ${Color.GRAY2};
  border-bottom: 1px solid ${Color.BLACK};
`;

export const ContentHeader = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid ${Color.BLACK};

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
    color: ${Color.BLACK};

    &.checkbox {
      width: 4.3%;
    }

    &.quantity,
    &.price,
    &.delivery-fee {
      width: 200px;
    }
  }

  @media screen and (max-width: 1024px) {
    .table-title {
      font-size: 14px;
      font-weight: 500;

      &.price,
      &.delivery-fee {
        width: 15%;
      }

      &.checkbox {
        width: 40px;
      }

      &.quantity {
        width: 120px;
      }
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
    background-color: ${Color.BLACK};
    color: ${Color.WHITE};
    border: none;
  }
`;
