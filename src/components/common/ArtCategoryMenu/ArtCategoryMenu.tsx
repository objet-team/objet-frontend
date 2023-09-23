import Image from 'next/image';
import * as styles from './ArtCategoryMenu.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import { CategoryLabels, CategoryType } from '@/constants/types/art';

interface ArtCategoryMenuProps {
  menu: CategoryType;
  onClickMenu: (menu: CategoryType) => void;
}

// 작품 카테고리 메뉴
const ArtCategoryMenu = ({ menu, onClickMenu }: ArtCategoryMenuProps) => (
  <styles.CategoryFilterWrap>
    {(Object.keys(CategoryLabels) as CategoryType[]).map((c) => (
      <styles.CategoryFilter key={c} onClick={() => onClickMenu(c)}>
        <styles.Category className={c === menu ? 'active-category' : ''}>
          <Text
            color={c === menu ? COLORS.main.purple : COLORS.main.white}
            textStyleName="body1"
            className="label"
          >
            {CategoryLabels[c]}
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

export default ArtCategoryMenu;
