import ArtistUserInfo from '../ArtistUserInfo/ArtistUserInfo';
import * as styles from './Banner.style';

export interface ArtistBannerProps {
  img: string;
  part: string[];
  name: string;
  info: string;
  exhibitionCount: number;
  follower: number;
  following: number;
}

const ArtistBanner = ({
  img,
  name,
  exhibitionCount,
  following,
  follower,
  part,
  info,
}: ArtistBannerProps) => (
  <styles.BannerContainer>
    <ArtistUserInfo
      img={img}
      name={name}
      exhibitionCount={exhibitionCount}
      following={following}
      follower={follower}
      part={part}
      info={info}
    />
  </styles.BannerContainer>
);
export default ArtistBanner;
