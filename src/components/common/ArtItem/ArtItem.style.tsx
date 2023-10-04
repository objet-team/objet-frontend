import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 36px;
`;
export const ArtWrapper = styled.div`
  cursor: pointer;
`;
export const ArtInfoWrap = styled.div`
  width: 100%;
  height: 28px;
  position: absolute;
  bottom: -36px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ProfileImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: ${COLORS.bg.black05};
  position: relative;
  cursor: pointer;

  .artist-img {
    width: 100%;
    height: 100%;
  }
`;

export const LikeWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
