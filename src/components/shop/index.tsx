import { useState } from 'react';
import { ShopType } from '@/constants/types/shop';
import ShopBanner from '../common/Banner/ShopBanner';
import ShopCategoryMenu from '../common/ShopCategoryMenu/ShopCategoryMenu';
import * as styles from './Shop.style';
import { SortingType } from '@/constants/types/art';
import SortingMenu from '../common/SortingMenu/SortingMenu';
import MyPageArt from '../mypage/myPargeArtSection/MyPageArt';
import ShopPageArt from './ShopArtSection/ShopPageArt';

export interface FilterType {
  category: ShopType;
  sort: SortingType;
}
const Shop = () => {
  const [filter, setFilter] = useState<FilterType>({
    category: 'real',
    sort: 'recommend',
  });

  const { category: cFilter, sort: sFilter } = filter;

  const onSelectCategoryFilter = (c: ShopType) => {
    setFilter((prev) => ({ ...prev, category: c }));
  };

  const onSelectSortFilter = (s: SortingType) => {
    setFilter((prev) => ({ ...prev, sort: s }));
  };

  return (
    <styles.Container>
      <ShopBanner />
      <ShopCategoryMenu menu={cFilter} onClickMenu={onSelectCategoryFilter} />
      <SortingMenu menu={sFilter} onClickMenu={onSelectSortFilter} />
      <ShopPageArt />
    </styles.Container>
  );
};
export default Shop;
