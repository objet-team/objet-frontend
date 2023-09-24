import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid ${COLORS.font.black20};
  padding: 21px 20px;
  display: flex;
  flex-direction: column;

  .left-element {
    text-align: left;
  }
  .center-element {
    text-align: center;
  }
  .right-element {
    text-align: right;
  }
`;

export const MenusWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const ButtonsWrapper = styled.div``;

export const TextInput = styled.input`
  width: 100%;
  padding: 21px 20px;
  border: none;
  background-color: ${COLORS.bg.black05};

  color: ${COLORS.font.black60};
  font-size: 16px;
  font-weight: 600;
`;

export const Menu = styled.button`
  width: 75px;
  height: 75px;
  border: 1px solid ${COLORS.font.black20};
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;

export const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
