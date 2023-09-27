import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextElement = styled.div`
  position: relative;

  .left-element {
    text-align: left;
  }
  .center-element {
    text-align: center;
  }
  .right-element {
    text-align: right;
  }
`;

export const SpaceElement = styled.div`
  width: 100%;
  height: 50px;
`;
