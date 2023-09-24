import Banner from '@/components/common/Banner/Banner';
import MyPageArt from '../myPargeArtSection/MyPageArt';
import Header from './Header';
import * as styles from './DefaultUserMypage.style';

const DefaultUserMypage = () => (
  <styles.Container>
    <Banner
      img="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2580&q=80"
      name="로지"
      email="a@naver.com"
      followCount={32}
      isArtist={false}
    />
    <Header />
    <styles.CenterContainer>
      <MyPageArt />
    </styles.CenterContainer>
  </styles.Container>
);
export default DefaultUserMypage;
