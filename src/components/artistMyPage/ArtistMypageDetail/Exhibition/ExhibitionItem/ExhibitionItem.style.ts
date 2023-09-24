import styled from '@emotion/styled';

export interface ImageItemProps {
  xCor: number;
  yCor: number;
}
export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const ImageItem = styled.div<ImageItemProps>`
  position: absolute;
  left: ${(props) => props.xCor};
  right: ${(props) => props.yCor};
`;
