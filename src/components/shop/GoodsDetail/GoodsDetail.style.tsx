import { COLORS } from '@/constants/styles';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 64px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  min-width: 1120px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
`;

export const Section = styled.div`
  min-width: 550px;
  height: 647px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;

  .name {
    margin-bottom: 16px;
  }

  .artist-profile {
    width: fit-content;
    gap: 4px;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 19px;
  overflow-x: hidden;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .deliver-caption {
    margin-bottom: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .purchase-btn {
    width: 352px;
    background-color: ${COLORS.main.purple};
    color: ${COLORS.bg.white};
  }

  .profile-img {
    background-color: ${COLORS.bg.black05};
    border-radius: 14px;
  }
`;

export const CountButton = styled.div`
  width: 122px;
  height: 40px;
  padding: 14px 16px;
  border: 2px solid #d9d9d9;
  border-radius: 7px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const FinalButton = styled.button`
  width: 190px;
  height: 56px;
  border: 1px solid ${COLORS.main.purple};
  color: ${COLORS.main.purple};
  font-size: 22px;
  font-weight: 600;
`;

export const ContentWrapper = styled.div`
  min-width: 1120px;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  position: relative;

  .active-btn {
    border: 1px solid ${COLORS.font.black100};
    color: ${COLORS.font.black100};
  }
`;

export const Menu = styled.div`
  width: 256px;
  height: 100%;
  color: ${COLORS.font.black20};
  background-color: ${COLORS.bg.white};
  border: 1px solid ${COLORS.font.black20};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${COLORS.font.black20};

  position: absolute;
  left: 0px;
  bottom: 0px;
`;
