import Image from 'next/image';
import LoginBtn from '../../../../public/button/KakaoButton.svg';

const KakaoLoginButton = () => (
  <Image src={LoginBtn} width={440} height={408} alt="카카오 로그인 버튼" />
);
export default KakaoLoginButton;
