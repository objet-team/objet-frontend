import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

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
