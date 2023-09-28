import React from 'react';
import Image from 'next/image';
import LikeIcon from '@public/icons/heart.svg';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import * as styles from './ArtItem.style';
import { useRouter } from 'next/router';

export interface ArtItemProps {
  id: number;
  image: string;
  artistName: string;
  artistProfileImg?: string;
  likeCount: number;
  className?: string;
  artistId: number;
}

const ArtItem = ({
  id,
  artistId,
  image,
  artistName,
  artistProfileImg,
  likeCount,
  className,
}: ArtItemProps) => {
  const router = useRouter();
  const onItemClick = () => router.push(`/exhibition/${id}`);
  const onProfileClick = () => {
    router.push(
      {
        pathname: `/artistProfile/${artistId}`,
        query: {
          id: artistId,
        },
      },
      `/artistProfile/${artistId}`,
    );
  };
  return (
    <styles.Wrapper className={className}>
      <Image src={image} fill alt="art-img" className="art-img" />
      <styles.ArtInfoWrap>
        <styles.ProfileWrap>
          <styles.ProfileImage onClick={onProfileClick}>
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
};

export default ArtItem;
