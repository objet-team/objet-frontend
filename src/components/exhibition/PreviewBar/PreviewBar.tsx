import Image from 'next/image';
import { useRouter } from 'next/router';
import Text from '@/components/common/Text';
import * as styles from './PreviewBar.style';
import { COLORS } from '@/constants/styles';

const PreviewBar = () => {
  const router = useRouter();
  return (
    <styles.Wrapper>
      <Text color={COLORS.main.white} textStyleName="body1">
        아래는 고객이 보는 실제 전시 화면입니다. <br />( 1 / 2 )
      </Text>
      <Image
        src="/icons/close.svg"
        alt="close-icon"
        className="close-icon"
        width="36"
        height="36"
        onClick={() => router.push('/exhibition/upload')}
      />
    </styles.Wrapper>
  );
};

export default PreviewBar;
