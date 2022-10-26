import React from 'react';
import * as S from './style';

interface Props {
  children?: React.ReactNode;
}

const LayoutComponent = (props: Props) => {
  const { children } = props;

  return <S.Layout>{children}</S.Layout>;
};

export default LayoutComponent;
