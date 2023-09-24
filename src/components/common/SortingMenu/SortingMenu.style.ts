import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .label {
    cursor: pointer;
  }
`;

export const Sort = styled.div``;

export const Hr = styled.div`
  width: 1px;
  height: 21px;
  background-color: ${COLORS.font.black20};
`;
