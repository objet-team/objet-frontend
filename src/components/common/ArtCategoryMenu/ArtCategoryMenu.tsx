import Image from 'next/image';
import * as styles from './ArtCategoryMenu.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import { CategoryLabels, CategoryType } from '@/constants/types/art';

interface ArtCategoryMenuProps {
  menu: CategoryType;
  onClickMenu: (menu: CategoryType) => void;
  /** '전체' 메뉴를 포함할지에 대한 여부. default:false */
  containAll?: boolean;
}

// 작품 카테고리 메뉴
const ArtCategoryMenu = ({
  menu,
  onClickMenu,
  containAll = false,
}: ArtCategoryMenuProps) => {
  const Categorys = (
    containAll
      ? Object.keys(CategoryLabels)
      : Object.keys(CategoryLabels).filter((type) => type !== 'all')
  ) as CategoryType[];

  return (
    <styles.MenuWrapper>
      {Categorys.map((c) => (
        <styles.CategoryFilter key={c} onClick={() => onClickMenu(c)}>
          <Text
            textStyleName="body1"
            color={c === menu ? COLORS.main.purple : COLORS.main.white}
            className={`label ${c === menu ? 'active-label' : ''}`}
          >
            {CategoryLabels[c]}
          </Text>
          {c === menu && (
            <Image
              src="/activeCategoryWrap.png"
              width="170"
              height="80"
              alt="active-wrap"
              className="active-wrap"
            />
          )}
          <Image src={`/category/${c}.png`} alt={c} fill />
        </styles.CategoryFilter>
      ))}
    </styles.MenuWrapper>
  );
};

export default ArtCategoryMenu;
