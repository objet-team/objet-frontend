import React from 'react';
import * as styles from './SortingMenu.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import { SortingType, SortingLabels } from '@/constants/types/art';

interface SortingMenuProps {
  menu: SortingType;
  onClickMenu: (menu: SortingType) => void;
}

// 작품 or 굿즈 정렬 메뉴
const SortingMenu = ({ menu, onClickMenu }: SortingMenuProps) => (
  <styles.SortingFilterWrap>
    {(Object.keys(SortingLabels) as SortingType[]).map((s, idx) => (
      <React.Fragment key={s}>
        <styles.Sort onClick={() => onClickMenu(s)}>
          <Text
            color={s === menu ? COLORS.font.black100 : COLORS.font.black20}
            textStyleName="body1"
            className="label"
          >
            {SortingLabels[s]}
          </Text>
        </styles.Sort>
        {idx !== 3 && <styles.Hr />}
      </React.Fragment>
    ))}
  </styles.SortingFilterWrap>
);

export default SortingMenu;
