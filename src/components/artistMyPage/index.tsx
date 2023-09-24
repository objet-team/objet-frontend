import Banner from '../common/Banner/Banner';
import SelectCategory from './SelectCategory/SelectCategory';
import * as styles from './ArtistMypage.style';
import MyPageArt from '../myPargeArtSection/MyPageArt';
import SelectFilter from './SelectFilter/SelectFilter';
import ArtistBanner from '../common/Banner/ArtistUserBanner';

const ArtistMyPage = () => {
  const onChange = () => {};
  return (
    <styles.Container>
      <ArtistBanner
        exhibitionCount={14}
        follower={1274}
        following={300}
        img="https://images.unsplash.com/photo-1682687220363-35e4621ed990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        name="로지"
        part="UX/UI 디자이너"
        info="하이"
      />
      <styles.BannerContainer>
        <styles.CategoryContainer>
          <SelectCategory />
        </styles.CategoryContainer>
        <styles.CategoryContainer>
          <SelectFilter />
        </styles.CategoryContainer>
      </styles.BannerContainer>
      <MyPageArt />
    </styles.Container>
  );
};
export default ArtistMyPage;
