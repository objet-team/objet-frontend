import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 407px;
  margin: 48px 0px;
  padding: 48px 80px 56px;
  background-color: ${COLORS.bg.black05};
`;

export const Section = styled.div`
  width: fit-content;
  margin: 0px auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 32px;
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ArtistWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrap = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 85px;
  background-color: ${COLORS.bg.white};
  margin-bottom: 12px;
`;
