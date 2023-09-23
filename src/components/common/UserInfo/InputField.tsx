import { useState } from 'react';
import InputClose from '@public/icons/mypage/inputClose.svg';
import * as styles from './InputField.style';

const InputField = () => {
  const [value, setValue] = useState<string>('');
  const onClick = () => {
    setValue('');
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <styles.InputContainer>
      <styles.InputField value={value} onChange={onChange} />
      <styles.ButtonContainer onClick={onClick}>
        <InputClose />
      </styles.ButtonContainer>
    </styles.InputContainer>
  );
};
export default InputField;
