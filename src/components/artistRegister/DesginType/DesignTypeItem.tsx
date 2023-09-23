import { useState } from 'react';
import * as styles from './DesignTypeItem.style';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

interface DesignTypeItemProps {
  label: string;
}

const DesignTypeItem = ({ label }: DesignTypeItemProps) => {
  const [click, setClick] = useState(false);
  const onClick = () => {
    setClick(!click);
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
