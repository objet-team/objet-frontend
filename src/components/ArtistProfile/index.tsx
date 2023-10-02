import Banner from '@/components/common/Banner/Banner';
import MyPageArt from '../mypage/myPargeArtSection/MyPageArt';
import SelectCategory from './SelectCategory/SelectCategory';
import * as styles from './ArtistProfile.style';
import { useRouter } from 'next/router';
import { useGetArtistInfoPublic } from '@/hooks/useGetArtistInfoPublic';
import api from '@/services/TokenService';
import { useState } from 'react';
import { useEffect } from 'react';

const ArtistProfile = () => {
  // 파라미터에서 id 추출
  const token = api.getToken();
  const router = useRouter();
  const id = router.query.id as string;

  const { data, isLoading } = useGetArtistInfoPublic(token, parseInt(id));
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
      <Banner
        isArtist
        artistId={parseInt(id)}
        name={name}
        img={profile}
        part={categoryList}
        info={comment}
      />
      <styles.CategoryContainer>
        <SelectCategory />
      </styles.CategoryContainer>
      <MyPageArt />
    </styles.Container>
  );
};
export default ArtistProfile;
