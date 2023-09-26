import { useState } from 'react';
import Text from '@/components/common/Text';
import * as styles from './SelectCategory.style';
import { COLORS } from '@/constants/styles';

const SelectCategory = () => {
  const [goodsClick, setGoodsClick] = useState(false);
  const [exhibitionClick, setExhibitionClick] = useState(true);
  const onGoodsClick = () => {
    setGoodsClick(true);
    setExhibitionClick(false);
  };
  const onExhibitionClick = () => {
    setExhibitionClick(true);
    setGoodsClick(false);
  };
  return (
    <styles.Container>
      <div onClick={onExhibitionClick} style={{ cursor: 'pointer' }}>
        {exhibitionClick ? (
          <Text color={COLORS.font.black100} textStyleName="title">
            전시
          </Text>
        ) : (
          <Text color={COLORS.font.black20} textStyleName="title">
            전시
          </Text>
        )}
      </div>
      <styles.Bar />
      <div onClick={onGoodsClick} style={{ cursor: 'pointer' }}>
        {goodsClick ? (
          <Text color={COLORS.font.black100} textStyleName="title">
            굿즈
          </Text>
        ) : (
          <Text color={COLORS.font.black20} textStyleName="title">
            굿즈
          </Text>
        )}
      </div>
    </styles.Container>
  );
};

export default SelectCategory;
