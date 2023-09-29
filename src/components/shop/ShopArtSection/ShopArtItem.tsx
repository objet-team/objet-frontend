import Image from 'next/image';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import HeartIcon from '@public/icons/heart.svg';
import * as styles from './ShopPageArtItem';
import { useState } from 'react';
import { useEffect } from 'react';

interface ShopPageArtItemProps {
  title: string;
  artImg: string;
  profileImg: string;
  artistName: string;
  heartCount: number;
}

const ShopPageArtItem = ({
  title,
  artImg,
  profileImg,
  artistName,
  heartCount,
}: ShopPageArtItemProps) => {
  return (
    <styles.ArtItemContainer>
      <styles.ImageContainer>
        <Image
          objectFit="contain"
          width={265}
          height={195}
          src={artImg}
          alt="작품"
        />
      </styles.ImageContainer>
      <styles.TextContainer>
        <Text color={COLORS.font.black100} textStyleName="body2B">
          {title}
        </Text>
        <styles.HeartContainer>
          <HeartIcon />
          <Text color={COLORS.font.black100} textStyleName="body2B">
            {heartCount}
          </Text>
        </styles.HeartContainer>
      </styles.TextContainer>
      <styles.TextContainer>
        <styles.RowContainer>
          <Image
            src={profileImg}
            width={20}
            height={20}
            alt="프로필이미지"
            style={{ display: 'block', borderRadius: '50%' }}
          />
          <Text color={COLORS.font.black100} textStyleName="caption">
            {title}
          </Text>
        </styles.RowContainer>
      </styles.TextContainer>
    </styles.ArtItemContainer>
  );
};
export default ShopPageArtItem;
