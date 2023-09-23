import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Container = styled.div`
  border: 1px solid rgba(25, 25, 27, 0.2);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  box-sizing: content-box;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`;
export const FilledContainer = styled.div`
  background-color: ${COLORS.main.purple};
  border-radius: 16px;
  padding: 4px;
  display: flex;
  justify-content: center;
  white-space: nowrap;

  align-items: center;
  cursor: pointer;
`;
