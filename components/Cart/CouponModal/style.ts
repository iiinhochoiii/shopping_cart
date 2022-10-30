import styled from '@emotion/styled';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalInner = styled.div`
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 480px;
  height: 320px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 20px;
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & > h3 {
    font-size: 22px;
    font-weight: 500;
    margin: 0;
  }

  & > button {
    border: 1px solid #333;
    background: none;
  }
`;

export const ContentTable = styled.table`
  margin-top: 20px;
  width: 100%;
  border-top: 2px solid #333;
  border-bottom: 1px solid #333;
  border-spacing: 0;

  & > thead {
    & > tr {
      height: 40px;
      & > th {
        border-bottom: 1px solid #333;
        font-size: 13px;
        font-weight: 400;
      }
    }
  }

  & > tbody {
    text-align: center;
    & > tr {
      height: 45px;
      & > td {
        font-size: 14px;
        font-weight: 600;

        &:first-child {
          text-align: left;
        }

        .table-content-title {
          display: flex;

          & > input[type='radio'] {
            width: 18px;
            height: 18px;
            margin-right: 10px;
          }

          & > span {
            margin: 3px 0 auto 0;
          }
        }
      }
    }
  }
`;

export const SelectBtn = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 32px;
  border: 1px solid #333;
  background: none;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;
