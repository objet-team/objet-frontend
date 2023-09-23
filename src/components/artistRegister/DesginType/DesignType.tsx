import { DesignTypeData } from './DesignTypeData';
import DesignTypeItem from './DesignTypeItem';
import * as styles from './DestignType.style';

const DesignType = () => (
  <styles.DesignTypeContainer>
    {DesignTypeData.map((item) => (
      <DesignTypeItem key={DesignTypeData.indexOf(item)} label={item} />
    ))}
  </styles.DesignTypeContainer>
);
export default DesignType;
