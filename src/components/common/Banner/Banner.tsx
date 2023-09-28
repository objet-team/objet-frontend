import Image from 'next/image';
import * as styles from './Banner.style';
import UserInfo from '../UserInfo/UserInfo';
import BannerImg from '../../../../public/mypage/BannerImg.png';
import ArtistInfo from '../ArtistInfo';

export interface BannerProps {
  isArtist: boolean;
  img: string;
  name: string;
  email?: string;
  followCount?: number;
  part?: string[];
  info?: string;
}

const Banner = ({
  isArtist,
  img,
  name,
  email,
  followCount,
  part,
  info,
}: BannerProps) => (
  <styles.BannerContainer>
    {isArtist ? (
      <ArtistInfo img={img} name={name} part={part} info={info} />
    ) : (
      <UserInfo
        img={img}
        name={name}
        email={email as string}
        followCount={followCount as number}
      />
    )}
  </styles.BannerContainer>
);
export default Banner;
