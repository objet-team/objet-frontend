import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import * as styles from './BeforeUploadBar.style';

// TODO naming..
const BeforeUploadBar = () => {
  const uploadPost = () => {};
  return (
    <styles.Wrapper>
      <Text color={COLORS.main.white} textStyleName="subtitle">
        굿즈 판매글이 완성되었어요. 이 상태로 글을 업로드할까요?
      </Text>
      <styles.UploadButton onClick={uploadPost}>
        판매글 업로드하기
      </styles.UploadButton>
    </styles.Wrapper>
  );
};

export default BeforeUploadBar;
