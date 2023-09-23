import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding: 48px 80px 108px;
`;

export const Section = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 265px);
  grid-template-rows: repeat(3, 231px);
  gap: 40px 20px;
`;
