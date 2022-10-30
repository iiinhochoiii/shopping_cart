import styled from '@emotion/styled';
import * as Color from '@/constants/colors';

export const CardContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  table-layout: fixed;

  .table-content {
    display: table-cell;
    padding: 30px 0px;
    line-height: 24px;
    color: ${Color.BLACK};
    text-align: center;
    vertical-align: middle;
  }
`;

export const CheckboxContent = styled.div`
  width: 4.3%;
  border-top: 1px solid ${Color.GRAY};

  @media screen and (max-width: 1024px) {
    width: 40px;
  }
`;

export const InfoContent = styled.div`
  display: table-cell;
  border-top: 1px solid ${Color.GRAY};
  font-size: 18px;
  color: ${Color.BLACK};
  vertical-align: middle;
  position: relative;
  padding: 27px 60px 30px 0px;
  text-align: left !important;

  & > div {
    display: flex;
  }

  .delete-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 24px;
    height: 24px;
    background: none;
    border: 1px solid ${Color.GRAY};
    color: ${Color.GRAY2};
    width: 50px;
  }

  @media screen and (max-width: 1024px) {
    .delete-btn {
      top: 5px;
      left: 0px;
    }
  }

  @media screen and (max-width: 766px) {
    & > div {
      flex-wrap: wrap;
    }
  }
`;

export const InfoImage = styled.div`
  width: 110px;
  height: 110px;
  margin: 3px 25px 0px 0px;
  position: relative;
  font-size: 18px;

  @media screen and (max-width: 1024px) {
    & > div {
      display: flex;
      flex-wrap: wrap;
    }
    .delete-btn {
      top: 5px;
      left: 0px;
    }
  }

  @media screen and (max-width: 766px) {
    width: 100%;
    padding-bottom: 100%;
  }
`;

export const InfoWrap = styled.div`
  width: 60%;

  p {
    margin: 0 0 5px 0;
    font-size: 13px;
  }

  .name {
    font-weight: bold;
    text-decoration: underline;
  }

  @media screen and (max-width: 766px) {
    width: 100%;

    .name {
      margin-top: 10px;
    }
  }
`;

export const QuantityContent = styled.div`
  width: 200px;
  border-style: solid;
  border-color: ${Color.GRAY};
  border-image: initial;
  border-width: 1px 1px 0px;
  font-size: 18px;

  & > div {
    display: flex;
    width: 108px;
    margin: auto;

    & > button {
      min-height: 25px;
      width: 36px;
      height: 36px;
      border: 1px solid ${Color.GRAY};
      background: ${Color.WHITE};
      font-size: 20px;
      font-weight: 400;
      color: ${Color.GRAY2};
    }

    & > input {
      color: ${Color.BLACK};
      outline: none;
      width: 37px;
      height: 36px;
      border-width: 1px 0px 1px 0px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: ${Color.GRAY};
      border-bottom-color: ${Color.GRAY};
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 120px;
  }
`;

export const PriceContent = styled.div`
  border-top: 1px solid ${Color.GRAY};
  border-right: 1px solid ${Color.GRAY};
  width: 200px;
  font-size: 18px;

  & > span {
    font-size: 20px;
    font-weight: 600;
  }

  @media screen and (max-width: 1024px) {
    width: 15%;
    font-size: 14px;

    & > span {
      font-size: 16px;
      font-weight: 400;
    }
  }
`;

export const DeliveryContent = styled.div`
  border-top: 1px solid ${Color.GRAY};
  width: 200px;
  font-size: 15px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    width: 15%;
    font-size: 13px;
  }
`;
