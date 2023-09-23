import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 48px 80px;
`;

export const Header = styled.div`
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
`;

export const CategoryFilterWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 24px 0px 40px;
`;

export const SortingFilterWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .label {
    cursor: pointer;
  }
`;

export const CategoryFilter = styled.div`
  width: 170px;
  height: 80px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  .active-category {
    width: 146px;
    height: 56px;
    border-radius: 100px;
    background: rgba(255, 255, 255, 0.8);
  }

  .active-category .label {
    background-color: transparent;
  }
  .active-category .background-img {
    border-radius: 100px;
  }
`;

export const Category = styled.div`
  width: 170px;
  height: 80px;
  position: relative;

  .label {
    width: 100%;
    height: 100%;
    background-color: ${COLORS.font.black60};
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
`;

export const Sort = styled.div``;

export const ActiveBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.main.purple};
  position: absolute;
  top: 0px;
  z-index: -1;
`;

export const Hr = styled.div`
  width: 1px;
  height: 21px;
  background-color: ${COLORS.font.black20};
`;

export const ContentWrap = styled.div`
  display: grid;
`;

export const TopRankWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
