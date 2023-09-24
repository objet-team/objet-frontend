import React, { useState } from 'react';
import ArtistSection from './ArtistSection/ArtistSection';
import ArtSection from '@/components/main/ArtSection';
import TopRankArtSection from './TopRankArtSection';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import SortingMenu from '@/components/common/SortingMenu/SortingMenu';
import ArtCategoryMenu from '@/components/common/ArtCategoryMenu';
import * as styles from './ArtContent.style';
import { CategoryType, SortingType } from '@/constants/types/art';

export interface FilterType {
  category: CategoryType;
  sort: SortingType;
}

const ArtContent = () => {
  const [filter, setFilter] = useState<FilterType>({
    category: 'all',
    sort: 'recommend',
  });

  const { category: cFilter, sort: sFilter } = filter;

  const onSelectCategoryFilter = (c: CategoryType) => {
    setFilter((prev) => ({ ...prev, category: c }));
  };

  const onSelectSortFilter = (s: SortingType) => {
    setFilter((prev) => ({ ...prev, sort: s }));
  };

  return (
    <styles.Wrapper>
      <styles.HeaderWrapper>
        <styles.Header>
          <styles.TitleWrap>
            <Text color={COLORS.main.black} textStyleName="title">
              취향 발견
            </Text>
            <Text color={COLORS.font.black60} textStyleName="subtitle">
              작가들의 감각적인 전시를 살펴보세요.
            </Text>
          </styles.TitleWrap>
          <ArtCategoryMenu
            menu={cFilter}
            onClickMenu={onSelectCategoryFilter}
          />
          <SortingMenu menu={sFilter} onClickMenu={onSelectSortFilter} />
        </styles.Header>
      </styles.HeaderWrapper>

      <TopRankArtSection />
      <ArtistSection />
      <ArtSection />
      <styles.ContentWrap />
    </styles.Wrapper>
  );
};

export default ArtContent;
