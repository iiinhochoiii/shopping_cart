import React from 'react';
import * as S from './style';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button = (props: Props) => {
  const { children } = props;
  return <S.Container {...props}>{children}</S.Container>;
};

export default Button;
