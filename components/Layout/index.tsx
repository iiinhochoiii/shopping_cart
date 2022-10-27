import React from 'react';
import * as S from './style';
import Header from './Header';

interface Props {
  children?: React.ReactNode;
}

const LayoutComponent = (props: Props) => {
  const { children } = props;

  return (
    <S.Layout>
      <Header />
      <S.Container>{children}</S.Container>
    </S.Layout>
  );
};

export default LayoutComponent;
