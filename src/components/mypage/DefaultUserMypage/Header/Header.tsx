import { useState } from 'react';
import Text from '@/components/common/Text';
import * as styles from './Header.style';
import { COLORS } from '@/constants/styles';
import { CategoryType, SortingType } from '@/constants/types/art';
import SortingMenu from '@/components/common/SortingMenu/SortingMenu';
import ArtCategoryMenu from '@/components/common/ArtCategoryMenu';

export interface FilterType {
  category: CategoryType;
  sort: SortingType;
  content: 'goods' | 'exhibition';
}

// TODO 정렬 방식 현재 4개로 되어있는데 추후에 2개로 수정할게요
const Header = () => {
  const [filter, setFilter] = useState<FilterType>({
    category: 'graphicDesign',
    sort: 'recommend',
    content: 'exhibition',
  });
  const { category, sort, content } = filter;

  const onGoodsClick = () => {
    setFilter({ ...filter, content: 'goods' });
  };
  const onExhibitionClick = () => {
    setFilter({ ...filter, content: 'exhibition' });
  };

  const onSelectCategoryFilter = (c: CategoryType) => {
    setFilter((prev) => ({ ...prev, category: c }));
  };

  const onSelectSortFilter = (s: SortingType) => {
    setFilter((prev) => ({ ...prev, sort: s }));
  };
  return (
    <styles.Container>
      <styles.Row>
        <styles.ContentMenu>
          <div onClick={onExhibitionClick} style={{ cursor: 'pointer' }}>
            <Text
              color={
                content === 'exhibition'
                  ? COLORS.font.black100
                  : COLORS.font.black20
              }
              textStyleName="title"
            >
              스크랩한 전시
            </Text>
          </div>
          <styles.Bar />
          <div onClick={onGoodsClick} style={{ cursor: 'pointer' }}>
            <Text
              color={
                content === 'goods' ? COLORS.font.black100 : COLORS.font.black20
              }
              textStyleName="title"
            >
              스크랩한 굿즈
            </Text>
          </div>
        </styles.ContentMenu>
        <SortingMenu menu={sort} onClickMenu={onSelectSortFilter} />
      </styles.Row>
      <styles.CategoryMenuWrapper>
        <ArtCategoryMenu menu={category} onClickMenu={onSelectCategoryFilter} />
      </styles.CategoryMenuWrapper>
    </styles.Container>
  );
};

export default Header;
