import Image from 'next/image';
import * as styles from './ArtCategory.style';
import Text from '../Text';
import {
  CategoryFilterType,
  CategoryFilters,
} from '@/components/main/ArtContent/ArtContent.constant';
import { FilterType } from '@/components/main/ArtContent/ArtContent';
import { COLORS } from '@/constants/styles';

interface ArtContentHeaderProps {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

const ArtCategory = ({ filter, setFilter }: ArtContentHeaderProps) => {
  const { category: cFilter } = filter;

  const onSelectCategoryFilter = (c: CategoryFilterType) => {
    setFilter((prev) => ({ ...prev, category: c }));
  };

  return (
    <styles.CategoryFilterWrap>
      {(Object.keys(CategoryFilters) as CategoryFilterType[]).map((c) => (
        <styles.CategoryFilter
          key={c}
          onClick={() => onSelectCategoryFilter(c)}
        >
          <styles.Category className={c === cFilter ? 'active-category' : ''}>
            <Text
              color={c === cFilter ? COLORS.main.purple : COLORS.main.white}
              textStyleName="body1"
              className="label"
            >
              {CategoryFilters[c]}
            </Text>
            <Image
              src={`/category/${c}.png`}
              alt={c}
              fill
              className="background-img"
            />
          </styles.Category>
          {c === cFilter && <styles.ActiveBackground />}
        </styles.CategoryFilter>
      ))}
    </styles.CategoryFilterWrap>
  );
};

export default ArtCategory;
