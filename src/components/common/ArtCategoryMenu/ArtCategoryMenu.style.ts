import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 24px 0px 40px;
`;

export const CategoryFilter = styled.div`
  width: 170px;
  height: 80px;
  position: relative;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  .label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.font.black60};
    z-index: 10;
  }

  .active-label {
    background-color: transparent;
  }

  .active-wrap {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 5;
  }
`;

export const NonActiveBox = styled.div`
  width: 170px;
  height: 80px;
  background-color: ${COLORS.font.black60};
`;
