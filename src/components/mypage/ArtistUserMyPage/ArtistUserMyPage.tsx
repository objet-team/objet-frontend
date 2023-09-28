import SelectCategory from '@/components/ArtistProfile/SelectCategory/SelectCategory';
import * as styles from './ArtistUserMyPage.style';
import MyPageArt from '../myPargeArtSection/MyPageArt';
import ArtistBanner from '@/components/common/Banner/ArtistUserBanner';
import SortMenu from '@/components/common/SortingMenu';
import { useGetArtistInfo } from '@/hooks/useGetArtistInfo';
import api from '@/services/TokenService';
import { useState } from 'react';
import { useEffect } from 'react';

const ArtistUserMyPage = () => {
  const token = api.getToken();
  const { data, isLoading } = useGetArtistInfo(token);
  const [profile, setProfile] = useState<string>(
    '/mypage/DefaultProfileImg.png',
  );
  const [categoryList, setCategoryList] = useState<string[]>(['']);
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  useEffect(() => {
    if (data) {
      const { profile, categoryList, name, comment } = data;
      if (profile != null) {
        setProfile(profile);
      }
      if (name != null) {
        setName(name);
      }
      if (comment != null) {
        setComment(comment);
      }
      if (categoryList != null) {
        setCategoryList(categoryList);
      }
    }
  }, [isLoading]);

  return (
    <styles.Container>
      <ArtistBanner
        exhibitionCount={14}
        follower={1274}
        following={300}
        img={profile}
        name={name}
        part={categoryList}
        info={comment}
      />
      <styles.BannerContainer>
        <styles.CategoryContainer>
          <SelectCategory />
        </styles.CategoryContainer>
      </styles.BannerContainer>
      <MyPageArt />
    </styles.Container>
  );
};
export default ArtistUserMyPage;
