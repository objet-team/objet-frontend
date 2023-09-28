import { DesignTypeData } from './DesignTypeData';
import DesignTypeItem from './DesignTypeItem';
import * as styles from './DestignType.style';

interface DesignTypeProps {
  categoryList: string[];
  setCategoryList: React.Dispatch<React.SetStateAction<string[]>>;
}
const DesignType = ({ categoryList, setCategoryList }: DesignTypeProps) => (
  <styles.DesignTypeContainer>
    {Object.entries(DesignTypeData).map(([key, value]) => (
      <DesignTypeItem
        categoryList={categoryList}
        setCategoryList={setCategoryList}
        key={key}
        label={value}
      />
    ))}
  </styles.DesignTypeContainer>
);
export default DesignType;
