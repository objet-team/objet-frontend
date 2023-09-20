import { useRouter } from 'next/router';
import LoginBtn from '@/assets/button/KakaoButton.svg';

const KakaoLoginButton = () => {
  const router = useRouter();
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_APT_KEY;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI;
  const LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  function kakaoLogin() {
    router.push(LINK);
  }
  return (
    <div onClick={kakaoLogin}>
      <LoginBtn />
    </div>
  );
};
export default KakaoLoginButton;
