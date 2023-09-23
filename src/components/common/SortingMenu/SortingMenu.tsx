import Image from 'next/image';
import * as styles from './SortingMenu.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import { SortingType, SortingLabels } from '@/constants/types/art';

interface SortingMenuProps {
  menu: SortingType;
  onClickMenu: (menu: SortingType) => void;
}

// 작품 카테고리 메뉴
const SortingMenu = ({ menu, onClickMenu }: SortingMenuProps) => (
  <styles.CategoryFilterWrap>
    {(Object.keys(SortingLabels) as SortingType[]).map((c) => (
      <styles.CategoryFilter key={c} onClick={() => onClickMenu(c)}>
        <styles.Category className={c === menu ? 'active-category' : ''}>
          <Text
            color={c === menu ? COLORS.main.purple : COLORS.main.white}
            textStyleName="body1"
            className="label"
          >
            {SortingLabels[c]}
          </Text>
          <Image
            src={`/category/${c}.png`}
            alt={c}
            fill
            className="background-img"
          />
        </styles.Category>
        {c === menu && <styles.ActiveBackground />}
      </styles.CategoryFilter>
    ))}
  </styles.CategoryFilterWrap>
);

export default SortingMenu;
