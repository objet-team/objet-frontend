import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const IntroBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const ExhibitionBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.main.black};
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

export const TopBarContainer = styled.div`
  padding: 40px;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
