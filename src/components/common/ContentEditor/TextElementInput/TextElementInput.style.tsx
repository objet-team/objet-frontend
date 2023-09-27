import styled from '@emotion/styled';
import { COLORS, TEXT_STYLES, TextStyleName } from '@/constants/styles';
import { AlignType } from '@/constants/types/exhibition';

export const Wrapper = styled.div`
  position: relative;
`;

export const ModalWrapper = styled.div`
  width: 270px;
  height: 45px;
  background-color: ${COLORS.bg.white};
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px rgba(63, 63, 63, 0.25);
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  position: absolute;
  top: -45px;
  left: 0px;
`;

export interface StylesType {
  sizeType: TextStyleName;
  align: AlignType;
}

export const TextInput = styled.input<StylesType>(({ sizeType, align }) => ({
  width: '100%',
  padding: '15px 20px',
  border: 'none',

  color: COLORS.font.black100,
  fontSize: TEXT_STYLES[sizeType].fontSize,
  fontWeight: TEXT_STYLES[sizeType].fontWeight,
  textAlign: align,
}));

export const DropdownWrapper = styled.nav`
  width: 80px;
  height: 30px;

  color: ${COLORS.bg.black70};
  font-size: 13px;
`;

export const SelectedMenu = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;

  background-color: #f4f4f4;
  color: ${COLORS.bg.black70};
  padding: 0px 11px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuListWrap = styled.ul`
  position: relative;
  margin-top: 5px;

  width: 100%;
  background-color: #f4f4f4;
  border-radius: 3px;
  z-index: 1000;
  padding: 0px;

  clip-path: none !important;
  list-style: none;
`;

export const DropdownMenu = styled.li`
  width: fit-content;
  height: 30px;
  background-color: transparent;
  padding: 7px 10px;
  cursor: pointer;
`;

export const WriteButton = styled.button`
  margin-left: 10px;
`;
