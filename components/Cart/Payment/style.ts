import styled from '@emotion/styled';

export const PaymentContainer = styled.section`
  margin: 100px 0 50px 0;
`;

export const Content = styled.div`
  border-bottom: 1px solid rgb(0, 0, 0);
`;

export const ContentTitleWrap = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  border-top: 4px solid rgb(0, 0, 0);
  border-bottom: 1px solid rgb(228, 228, 228);

  .table-title {
    display: table-cell;
    padding: 0px;
    border: 0px;
    height: 74px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: rgb(0, 0, 0);
    vertical-align: middle;
    text-align: center;

    &.price {
      width: 36%;
    }

    &.delivery-fee {
      width: 28%;
    }

    &.payment {
      width: 36%;
    }
  }

  @media screen and (max-width: 766px) {
    .table-title {
      font-size: 14px;
    }
  }
`;

export const ContentPayInfoWrap = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;

  .table-content {
    display: table-cell;
    position: relative;
    height: 149px;
    padding: 55px 2% 0px;
    text-align: center;
    vertical-align: top;
    box-sizing: border-box;

    & > p {
      font-size: 32px;
      font-weight: bold;
      vertical-align: -4px;
      margin: 0;
    }

    & > i {
      display: block;
      position: absolute;
      left: -15px;
      top: 40%;
      width: 30px;
      height: 30px;
    }
    &.price {
      width: 36%;

      & > span {
        display: block;
        margin-top: 10px;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }

    &.delivery-fee {
      width: 28%;

      & > i {
        background: url(//img.29cm.co.kr/next29cm/order/icon_cout.gif) 0px 0px /
          60px 30px no-repeat;
      }
    }

    &.payment {
      width: 36%;

      & > i {
        background: url(//img.29cm.co.kr/next29cm/order/icon_cout.gif) -30px 0px /
          60px 30px no-repeat;
      }

      & > span {
        margin-top: 10px;
        font-size: 0.875rem;
        font-weight: 500;
        color: rgb(255, 72, 0);
      }
    }
  }

  @media screen and (max-width: 766px) {
    .table-content {
      & > p {
        font-size: 18px;
      }

      &.payment {
        & > span {
          font-size: 12px;
        }
      }
    }
  }
`;
