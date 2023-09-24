import { useState } from 'react';
import Text from '@/components/common/Text';
import * as styles from './SelectFilter.style';
import { COLORS } from '@/constants/styles';

const SelectFilter = () => {
  const [heartClick, setHeartClick] = useState(false);
  const [latestClick, setLatestClick] = useState(true);
  const onHeartClick = () => {
    setHeartClick(true);
    setLatestClick(false);
  };
  const onLatestClick = () => {
    setLatestClick(true);
    setHeartClick(false);
  };
  return (
    <styles.Container>
      <div onClick={onLatestClick} style={{ cursor: 'pointer' }}>
        {latestClick ? (
          <Text color={COLORS.font.black100} textStyleName="body1">
            최신순
          </Text>
        ) : (
          <Text color={COLORS.font.black20} textStyleName="body1">
            최신순
          </Text>
        )}
      </div>
      <styles.Bar />
      <div onClick={onHeartClick} style={{ cursor: 'pointer' }}>
        {heartClick ? (
          <Text color={COLORS.font.black100} textStyleName="body1">
            좋아요순
          </Text>
        ) : (
          <Text color={COLORS.font.black20} textStyleName="body1">
            좋아요순
          </Text>
        )}
      </div>
    </styles.Container>
  );
};

export default SelectFilter;
