import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const TopBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  width: 100%;
  padding: 90px 0px 60px;
  background-color: ${COLORS.main.black};
`;

export const Button = styled.button``;

export const RowContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const LeftContainer = styled.div``;
export const RightContainer = styled.div``;
