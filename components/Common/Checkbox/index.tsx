import React from 'react';
import * as S from './style';

interface Props {
  isChecked: boolean;
  onChangeHandler: () => void;
}

const Checkbox = (props: Props) => {
  const { isChecked, onChangeHandler } = props;

  return (
    <S.CheckboxContainer onClick={() => onChangeHandler()}>
      <input type="checkbox" defaultChecked={isChecked} />
      <label className={isChecked ? 'checked' : ''} />
    </S.CheckboxContainer>
  );
};

export default Checkbox;
