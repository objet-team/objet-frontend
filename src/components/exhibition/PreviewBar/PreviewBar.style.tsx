import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${COLORS.main.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 100;

  position: fixed;
  top: 0px;
  left: 0px;

  .close-icon {
    position: absolute;
    top: 18px;
    right: 82px;
  }
`;
