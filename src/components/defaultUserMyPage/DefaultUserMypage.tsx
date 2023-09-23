import { useState } from 'react';
import WhiteFillBtn from '../common/Button/WhiteFillBtn';
import UserInfo from '../common/UserInfo/UserInfo';
import Banner from '../common/Banner/Banner';
import SelectCategory from './SelectCategory/SelectCategory';
import ArtContentHeader from '../main/ArtContent/ArtContentHeader';
import ArtCategory from '../common/ArtCategory/ArtCategory';
import { FilterType } from '@/components/main/ArtContent/ArtContent';
import ArtSection from '../main/ArtSection';
import MyPageArt from '../myPargeArtSection/MyPageArt';
import * as styles from './DefaultUserMypage.style';

const DefaultUserMypage = () => {
  const [filter, setFilter] = useState<FilterType>({
    category: 'all',
    sort: 'recommend',
  });
  return (
    <styles.Container>
      <Banner
        img="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2580&q=80"
        name="로지"
        email="a@naver.com"
        followCount={32}
        isArtist={false}
      />
      <styles.CategoryContainer>
        <SelectCategory />
      </styles.CategoryContainer>
      <styles.CenterContainer>
        <ArtCategory filter={filter} setFilter={setFilter} />
        <MyPageArt />
      </styles.CenterContainer>
    </styles.Container>
  );
};
export default DefaultUserMypage;
