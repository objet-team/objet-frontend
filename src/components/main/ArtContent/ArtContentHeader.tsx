import React from 'react';
import Image from 'next/image';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import * as styles from './ArtContent.style';
import {
  CategoryFilterType,
  CategoryFilters,
  SortFilterType,
  SortFilters,
} from '@/components/main/ArtContent/ArtContent.constant';
import { FilterType } from '@/components/main/ArtContent/ArtContent';
import ArtCategoryMenu from '@/components/common/ArtCategoryMenu/ArtCategoryMenu';

interface ArtContentHeaderProps {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const ArtContentHeader = ({ filter, setFilter }: ArtContentHeaderProps) => {
  const { category: cFilter, sort: sFilter } = filter;

  const onSelectCategoryFilter = (c: CategoryFilterType) => {
    setFilter((prev) => ({ ...prev, category: c }));
  };

  const onSelectSortFilter = (s: SortFilterType) => {
    setFilter((prev) => ({ ...prev, sort: s }));
  };

  return (
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
        <ArtCategoryMenu menu={cFilter} onClickMenu={onSelectCategoryFilter} />
        <styles.SortingFilterWrap>
          {(Object.keys(SortFilters) as SortFilterType[]).map((s, idx) => (
            <React.Fragment key={s}>
              <styles.Sort onClick={() => onSelectSortFilter(s)}>
                <Text
                  color={
                    s === sFilter ? COLORS.font.black100 : COLORS.font.black20
                  }
                  textStyleName="body1"
                  className="label"
                >
                  {SortFilters[s]}
                </Text>
              </styles.Sort>
              {idx !== 3 && <styles.Hr />}
            </React.Fragment>
          ))}
        </styles.SortingFilterWrap>
      </styles.Header>
    </styles.HeaderWrapper>
  );
};

export default ArtContentHeader;
