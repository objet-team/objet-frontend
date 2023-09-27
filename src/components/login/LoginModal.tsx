import CloseButton from '@public/icons/login/Login_close.svg';
import * as styles from './LoginModal.style';
import KakaoLoginButton from '@/components/common/KakaoLoginButton/KakaoLoginButton';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { useRouter } from 'next/router';

export interface LoginModalProps {
  loginClick: boolean;
  setLoginClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal = ({ setLoginClick, loginClick }: LoginModalProps) => {
  const onClick = () => {
    setLoginClick(!loginClick);
  };
  return (
    <styles.ModalBackground>
      <styles.ModalBox>
        <styles.ClosedButton onClick={onClick}>
          <CloseButton />
        </styles.ClosedButton>
        <styles.TextBox>
          <styles.ModalText>
            <Text color={COLORS.font.black100} textStyleName="subtitle">
              간편하게 로그인하고 모브제의 다양한 서비스를 이용해보세요.
            </Text>
          </styles.ModalText>

          <KakaoLoginButton />
        </styles.TextBox>
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};

export default LoginModal;
