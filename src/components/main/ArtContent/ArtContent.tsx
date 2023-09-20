import React, { useState } from 'react';
import { CategoryFilterType, SortFilterType } from './ArtContent.constant';
import ArtistSection from './ArtistSection/ArtistSection';
import ArtContentHeader from './ArtContentHeader';
import ArtSection from './ArtSection';
import TopRankArtSection from './TopRankArtSection';

import * as styles from './ArtContent.style';

export interface FilterType {
  category: CategoryFilterType;
  sort: SortFilterType;
}

const ArtContent = () => {
  const [filter, setFilter] = useState<FilterType>({
    category: 'all',
    sort: 'recommend',
  });

  return (
    <styles.Wrapper>
      <ArtContentHeader filter={filter} setFilter={setFilter} />
      <TopRankArtSection />
      <ArtistSection />
      <ArtSection />
      <styles.ContentWrap />
    </styles.Wrapper>
  );
};

export default ArtContent;
