import styled from '@emotion/styled';

const gray = '#E4E4E4';

export const CardContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const InfoContent = styled.div`
  display: table-cell;
  border-top: 1px solid ${gray};
  font-size: 18px;
  color: rgb(0, 0, 0);
  vertical-align: middle;
  position: relative;
  padding: 27px 60px 30px 0px;
  text-align: left;

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
    border: 1px solid #e4e4e4;
    color: #5d5d5d;
    width: 50px;
    cursor: pointer;
  }
`;

export const InfoImage = styled.div`
  width: 110px;
  height: 110px;
  margin: 3px 25px 0px 0px;
  position: relative;
`;

export const InfoWrap = styled.div`
  p {
    margin: 0 0 5px 0;
    font-size: 13px;
  }

  .name {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const QuantityContent = styled.div`
  display: table-cell;
  padding: 30px 0px;
  font-size: 18px;
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: middle;
  width: 200px;
  border-style: solid;
  border-color: ${gray};
  border-image: initial;
  border-width: 1px 1px 0px;

  & > div {
    display: flex;
    width: 108px;
    margin: auto;

    & > button {
      min-height: 25px;
      width: 36px;
      height: 36px;
      border: 1px solid ${gray};
      background: #fff;
      font-size: 20px;
      font-weight: 400;
      color: rgb(160, 160, 160);
    }

    & > input {
      display: block;
      color: rgb(26, 26, 26);
      outline: none;
      margin: 0px;
      padding: 0px;
      width: 37px;
      height: 36px;
      border-width: 1px 0px 1px 0px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: ${gray};
      border-bottom-color: ${gray};
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }
  }
`;

export const PriceContent = styled.div`
  display: table-cell;
  padding: 30px 0px;
  border-top: 1px solid ${gray};
  border-right: 1px solid ${gray};
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: middle;
  width: 200px;
  font-size: 18px;
  font-weight: bold;

  & > span {
    font-size: 20px;
    font-weight: 600;
  }
`;

export const DeliveryContent = styled.div`
  display: table-cell;
  padding: 30px 0px;
  border-top: 1px solid ${gray};
  line-height: 24px;
  color: rgb(0, 0, 0);
  text-align: center;
  vertical-align: middle;
  width: 200px;
  font-size: 15px;
  font-weight: 600;
`;