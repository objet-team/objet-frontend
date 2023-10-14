import styled from '@emotion/styled';

interface ColContainerProps {
  gap: string;
}

export const ArtistInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

  .follow-btn {
    width: 95px;
    height: 40px;
  }

  .career-btn {
    width: 257px;
    height: 40px;
  }
`;
