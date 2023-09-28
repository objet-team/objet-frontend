import { useState } from 'react';
import * as styles from './DesignTypeItem.style';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { DesignTypeData, KeyArray } from './DesignTypeData';

interface DesignTypeItemProps {
  label: string;
  categoryList: string[];
  setCategoryList: React.Dispatch<React.SetStateAction<string[]>>;
}
function getKeyByValue(object: any, value: string) {
  return Object.keys(DesignTypeData).find((key) => object[key] === value);
}

const DesignTypeItem = ({
  label,
  categoryList,
  setCategoryList,
}: DesignTypeItemProps) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
    console.log(click);
    const value = getKeyByValue(DesignTypeData, label);
    if (click == false) {
      setCategoryList([...categoryList, value as string]);
    } else {
      const newCategoryList = categoryList.filter((it) => it !== value);
      setCategoryList(newCategoryList);
      console.log('삭제된', categoryList);
    }
  };
  return (
    <div>
      {click ? (
        <styles.FilledContainer onClick={onClick}>
          <Text color={COLORS.main.white} textStyleName="body2R">
            {label}
          </Text>
        </styles.FilledContainer>
      ) : (
        <styles.Container onClick={onClick}>
          <Text color={COLORS.font.black100} textStyleName="body2R">
            {label}
          </Text>
        </styles.Container>
      )}
    </div>
  );
};
export default DesignTypeItem;
