import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 335px;
  padding: 40px 80px 32px;
  background-color: ${COLORS.bg.black05};
`;

export const Banner = styled.div`
  width: fit-content;
  overflow-x: hidden;
  margin: 0 auto;
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const PostWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  max-width: 1120px;

  .post:nth-child(odd) {
    margin-top: -24px;
  }

  .post:nth-child(even) {
    margin-bottom: -24px;
  }
`;

export const Post = styled.div`
  width: 285px;
  height: 176px;
  background-color: ${COLORS.bg.white};
  position: relative;
  cursor: pointer;

  .flag {
    position: absolute;
    top: 0px;
    right: 16px;
    z-index: 100;
  }

  .index {
    position: absolute;
    top: 13px;
    right: 30px;
    z-index: 101;
  }
`;
