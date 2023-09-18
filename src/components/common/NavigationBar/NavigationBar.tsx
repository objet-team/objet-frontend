import React from 'react';
import Link from 'next/link';
import { COLORS } from '@/constants/styles';
import LogoIcon from '@/assets/icons/logo/LogoIcon.svg';
import Text from '@/components/common/Text';
import * as styles from './NavigationBar.style';

const NavigationBar = () => (
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
      <styles.ProfileImage />
      <Text color={COLORS.font.black100} textStyleName="body1">
        작가 등록
      </Text>
    </styles.ProfileMenu>
  </styles.Wrapper>
);

export default NavigationBar;
