import Image from 'next/image';
import * as styles from './Banner.style';
import UserInfo from '../UserInfo/UserInfo';
import BannerImg from '../../../../public/mypage/BannerImg.png';

export interface BannerProps {
  img: string;
  name: string;
  email: string;
  followCount: number;
}

const Banner = ({ img, name, email, followCount }: BannerProps) => (
  <styles.BannerContainer>
    <UserInfo img={img} name={name} email={email} followCount={followCount} />
  </styles.BannerContainer>
);
export default Banner;
