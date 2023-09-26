import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(25, 25, 27, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLORS.bg.white};
  width: 30rem;
  /* height: 13rem; */
  gap: 24px;
  padding: 30px;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.input`
  border-radius: 8px;
  stroke: 1px;
  border-color: ${COLORS.font.black20};
  height: 48px;
  background-color: transparent;
  :focus {
    border-color: ${COLORS.font.black20};
  }
`;
export const ClosedButton = styled.div`
  text-align: right;
  cursor: pointer;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  border: 3px solid #707070;
  accent-color: ${COLORS.main.purple};
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;
