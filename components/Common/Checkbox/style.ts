import styled from '@emotion/styled';
import * as Color from '@/constants/colors';

export const CheckboxContainer = styled.span`
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  min-width: 24px;
  min-height: 24px;
  line-height: 24px;

  & > input[type='checkbox'] {
    overflow: hidden;
    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
    width: 1px;
    height: 1px;
    border: 0px;
    background: transparent;
    visibility: hidden;
    appearance: none;
  }

  & > label {
    display: inline-block;
    position: relative;
    z-index: 1;
    color: ${Color.BLACK};
    cursor: pointer;
    vertical-align: top;
    padding-left: 24px;
    font-size: 14px;

    &.checked {
      &::before {
        border-color: ${Color.BLUE};
        background: ${Color.BLUE};
      }
      &::after {
        border-color: ${Color.WHITE};
      }
    }

    &::before {
      position: absolute;
      top: 0px;
      left: 0px;
      background: ${Color.WHITE};
      border: 1px solid ${Color.GRAY};
      border-radius: 2px;
      text-align: center;
      content: '';
      width: 22px;
      height: 22px;
      transition: background-color 0.2s ease 0s;
    }

    &::after {
      position: absolute;
      border-style: solid;
      border-color: ${Color.GRAY};
      border-image: initial;
      border-width: 0px 1px 1px 0px;
      transform: rotate(45deg);
      content: '';
      top: 4px;
      left: 8px;
      width: 6px;
      height: 12px;
      box-sizing: content-box;
    }
  }
`;
