import Banner from '@/components/common/Banner/Banner';
import MyPageArt from '../myPargeArtSection/MyPageArt';
import Header from './Header';
import * as styles from './DefaultUserMypage.style';
import { useGetAuthUserInfo } from '@/hooks/useGetAuthUserInfo';
import api from '@/services/TokenService';
import { useState } from 'react';
import DefaultProfileImg from '@public/mypage/DefaultProfileImg.png';
import { useEffect } from 'react';

const DefaultUserMypage = () => {
  const token = api.getToken();
  const { data, isLoading } = useGetAuthUserInfo(token);
  console.log(data);
  const [profile, setProfile] = useState<string>(
    '/mypage/DefaultProfileImg.png',
  );
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [followingArtistNum, setFollowingArtistNum] = useState<number>(0);
  useEffect(() => {
    if (data) {
      const { profile, email, name, followingArtistNum } = data;
      if (profile != null) {
        setProfile(profile);
      }
      if (email != null) {
        setEmail(email);
      }
      if (name != null) {
        setName(name);
      }
      if (followingArtistNum != null) {
        setFollowingArtistNum(followingArtistNum);
      }
    }
  }, [isLoading]);
  return (
    <styles.Container>
      <Banner
        img={profile}
        name={name}
        email={email}
        followCount={followingArtistNum}
        isArtist={false}
      />
      <Header />
      <styles.CenterContainer>
        <MyPageArt />
      </styles.CenterContainer>
    </styles.Container>
  );
};
export default DefaultUserMypage;
