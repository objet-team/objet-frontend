import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${COLORS.main.purple};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;

  position: fixed;
  top: 0px;
  left: 0px;
`;

export const UploadButton = styled.button`
  width: 170px;
  height: 40px;
  background-color: ${COLORS.bg.white};
  color: ${COLORS.main.purple};

  display: flex;
  align-items: center;
  justify-content: center;
`;
