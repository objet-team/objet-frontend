import Banner from '../common/Banner/Banner';
import MyPageArt from '../myPargeArtSection/MyPageArt';
import SelectCategory from './SelectCategory/SelectCategory';
import * as styles from './ArtistProfile.style';

const ArtistProfile = () => (
  <styles.Container>
    <Banner
      isArtist
      name="로지"
      img="https://images.unsplash.com/photo-1695239510467-f1e93d649c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
      part="UX/UI"
      info="유어슈 미녀 로지"
    />
    <styles.CategoryContainer>
      <SelectCategory />
    </styles.CategoryContainer>
    <MyPageArt />
  </styles.Container>
);
export default ArtistProfile;
