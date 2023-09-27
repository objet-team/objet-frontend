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
`;

export const SideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .next-btn {
    color: ${COLORS.bg.white};
    background-color: ${COLORS.main.purple};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid ${COLORS.main.purple};
  color: ${COLORS.main.purple};
`;

export const PreviewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 auto;
`;

export const MenusWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
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

export const TextInputWrapper = styled.div`
  position: relative;
`;
