import styled from '@emotion/styled';

interface ColContainerProps {
  gap: string;
}
interface TextContainerProps {
  gap: string;
}

export const ArtistInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ColContainer = styled.div<ColContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap};
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const TextContainer = styled.div<TextContainerProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap};
  padding: 2px;
`;
