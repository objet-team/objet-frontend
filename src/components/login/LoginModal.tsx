import * as styles from './LoginModal.style';
import KakaoLoginButton from '../common/KakaoLoginButton/KakaoLoginButton';
import Text from '../common/Text';
import { COLORS } from '@/constants/styles';
import CloseButton from '@/assets/button/CloseButton.svg';

const LoginModal = () => (
  <styles.ModalBackground>
    <styles.ModalBox>
      <styles.ClosedButton>
        <CloseButton />
      </styles.ClosedButton>
      <styles.ModalText>
        <Text color={COLORS.font.black100} textStyleName="subtitle">
          간편하게 로그인하고 모브제의 다양한 서비스를 이용해보세요.
        </Text>
      </styles.ModalText>

      <KakaoLoginButton />
    </styles.ModalBox>
  </styles.ModalBackground>
);
export default LoginModal;
