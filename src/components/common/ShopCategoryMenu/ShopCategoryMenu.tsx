import Image from 'next/image';
import * as styles from './ShopCategoryMenu.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import { ShopType, ShopLabels } from '@/constants/types/shop';

interface ShopCategoryMenuProps {
  menu: ShopType;
  onClickMenu: (menu: ShopType) => void;
}

// 작품 카테고리 메뉴
const ShopCategoryMenu = ({ menu, onClickMenu }: ShopCategoryMenuProps) => (
  <styles.MenuWrapper>
    {(Object.keys(ShopLabels) as ShopType[]).map((c) => (
      <styles.CategoryFilter key={c} onClick={() => onClickMenu(c)}>
        <styles.Category className={c === menu ? 'active-category' : ''}>
          <Text
            color={c === menu ? COLORS.main.purple : COLORS.main.white}
            textStyleName="body1"
            className="label"
          >
            {ShopLabels[c]}
          </Text>
          <Image
            src={`/shopCategory/${c}.png`}
            alt={c}
            fill
            className="background-img"
          />
        </styles.Category>
        {c === menu && <styles.ActiveBackground />}
      </styles.CategoryFilter>
    ))}
  </styles.MenuWrapper>
);

export default ShopCategoryMenu;
