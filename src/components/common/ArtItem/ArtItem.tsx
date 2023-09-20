import React from 'react';
import Image from 'next/image';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import LikeIcon from '@/assets/icons/heart.svg';
import * as styles from './ArtItem.style';

export interface ArtItemProps {
  image: string;
  artistName: string;
  artistProfileImg?: string;
  likeCount: number;
  className?: string;
}

const ArtItem = ({
  image,
  artistName,
  artistProfileImg,
  likeCount,
  className,
}: ArtItemProps) => (
  <styles.Wrapper className={className}>
    <Image src={image} fill alt="art-img" className="art-img" />
    <styles.ArtInfoWrap>
      <styles.ProfileWrap>
        <styles.ProfileImage>
          {artistProfileImg && (
            <Image
              src={artistProfileImg}
              fill
              alt="artist-img"
              objectFit="contain"
              className="artist-img"
            />
          )}
        </styles.ProfileImage>
        <Text color={COLORS.font.black100} textStyleName="body2B">
          {artistName}
        </Text>
      </styles.ProfileWrap>
      <styles.LikeWrap>
        <LikeIcon />
        <Text color={COLORS.font.black100} textStyleName="body2B">
          {likeCount}
        </Text>
      </styles.LikeWrap>
    </styles.ArtInfoWrap>
  </styles.Wrapper>
);

export default ArtItem;
