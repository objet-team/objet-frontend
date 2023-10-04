import * as styles from './Banner.style';
import UserInfo from '../UserInfo/UserInfo';
import ArtistInfo from '../ArtistInfo';

export interface BannerProps {
  isArtist: boolean;
  img: string;
  name: string;
  email?: string;
  followCount?: number;
  part?: string[];
  info?: string;
  artistId?: number;
}

const Banner = ({
  isArtist,
  img,
  name,
  email,
  followCount,
  part,
  info,
  artistId,
}: BannerProps) => (
  <styles.BannerContainer>
    {isArtist ? (
      <ArtistInfo
        img={img}
        name={name}
        part={part}
        info={info}
        artistId={artistId as number}
      />
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
