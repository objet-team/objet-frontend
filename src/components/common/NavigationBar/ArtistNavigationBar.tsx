import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoIcon from '@public/icons/logo/LogoIcon.svg';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import * as styles from './NavigationBar.style';

const ArtistNavigationBar = () => {
  const [goodsClick, setGoodsClick] = useState(false);
  const [uploadClick, setUploadClick] = useState(false);

  const onGoodsClick = () => {
    setGoodsClick(!goodsClick);
  };
  const onUploadClick = () => {
    setUploadClick(!uploadClick);
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
          <Link href="/shop">
            <Text color={COLORS.font.black100} textStyleName="body1">
              굿즈샵
            </Text>
          </Link>
        </styles.NavMenu>
        <styles.ProfileMenu>
          <Link href="/mypage/artist">
            <styles.ProfileImage />
          </Link>
          <styles.ProfileClickWrapper onClick={onGoodsClick}>
            <Text color={COLORS.font.black100} textStyleName="body1">
              작품업로드
            </Text>
          </styles.ProfileClickWrapper>
          <styles.ProfileClickWrapper onClick={onUploadClick}>
            <Text color={COLORS.font.black100} textStyleName="body1">
              굿즈판매
            </Text>
          </styles.ProfileClickWrapper>
        </styles.ProfileMenu>
      </styles.Wrapper>
    </div>
  );
};

export default ArtistNavigationBar;
