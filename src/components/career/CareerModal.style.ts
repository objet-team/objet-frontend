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

export const InputContainer = styled.input``;