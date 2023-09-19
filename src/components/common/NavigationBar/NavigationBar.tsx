import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { COLORS } from '@/constants/styles';
import LogoIcon from '@/assets/icons/logo/LogoIcon.svg';
import Text from '@/components/common/Text';
import * as styles from './NavigationBar.style';
import LoginModal from '@/components/login/LoginModal';

const NavigationBar = () => {
  const [loginClick, setLoginClick] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('root-modal'));
  }, [loginClick]);
  const onLoginClick = () => {
    console.log(loginClick);
    setLoginClick(!loginClick);
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

          <Text color={COLORS.font.black100} textStyleName="body1">
            작가 등록
          </Text>
        </styles.ProfileMenu>
      </styles.Wrapper>
    </div>
  );
};

export default NavigationBar;
