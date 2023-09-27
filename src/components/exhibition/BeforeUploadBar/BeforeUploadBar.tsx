import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import * as styles from './BeforeUploadBar.style';

// TODO
const BeforeUploadBar = () => {
  const uploadExhibition = () => {};
  return (
    <styles.Wrapper>
      <Text color={COLORS.main.white} textStyleName="subtitle">
        작품 업로드를 진행할까요?
      </Text>
      <styles.UploadButton onClick={uploadExhibition}>
        작품 업로드
      </styles.UploadButton>
    </styles.Wrapper>
  );
};

export default BeforeUploadBar;
