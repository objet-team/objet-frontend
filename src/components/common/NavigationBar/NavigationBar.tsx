import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoIcon from '@public/icons/logo/LogoIcon.svg';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import * as styles from './NavigationBar.style';
import LoginModal from '@/components/login/LoginModal';
import ArtistRegisterModal from '@/components/artistRegister/ArtistRegisterModal';

const NavigationBar = () => {
  const [loginClick, setLoginClick] = useState(false);
  const [registerClick, setRegisterClick] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('root-modal'));
  }, [loginClick || registerClick]);
  const onLoginClick = () => {
    console.log(loginClick);
    setLoginClick(!loginClick);
  };
  const onRegisterClick = () => {
    setRegisterClick(!registerClick);
  };

  return (
    <div>
      <styles.Wrapper>
        <styles.NavMenu>
          <Link href="/">
            <LogoIcon />
          </Link>

          <Link href="/">
            <Text color={COLORS.font.black100} textStyleName="body1">
              홈
            </Text>
          </Link>
          <Link href="/">
            <Text color={COLORS.font.black100} textStyleName="body1">
              굿즈샵
            </Text>
          </Link>
        </styles.NavMenu>
        <styles.ProfileMenu>
          {loginClick && portalElement ? (
            <LoginModal setLoginClick={setLoginClick} loginClick={loginClick} />
          ) : (
            <styles.ProfileClickWrapper onClick={onLoginClick}>
              <Text color={COLORS.font.black100} textStyleName="body1">
                로그인
              </Text>
            </styles.ProfileClickWrapper>
          )}

          {registerClick && portalElement ? (
            <ArtistRegisterModal
              setRegisterClick={setRegisterClick}
              registerClick={registerClick}
            />
          ) : (
            <styles.ProfileClickWrapper onClick={onRegisterClick}>
              <Text color={COLORS.font.black100} textStyleName="body1">
                작가 등록
              </Text>
            </styles.ProfileClickWrapper>
          )}
        </styles.ProfileMenu>
      </styles.Wrapper>
    </div>
  );
};

export default NavigationBar;
