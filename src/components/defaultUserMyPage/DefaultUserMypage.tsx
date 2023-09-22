import WhiteFillBtn from '../common/Button/WhiteFillBtn';
import UserInfo from '../common/UserInfo/UserInfo';
import Banner from '../common/Banner/Banner';

const DefaultUserMypage = () => (
  <div>
    <Banner
      img="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2580&q=80"
      name="로지"
      email="a@naver.com"
      followCount={32}
    />
  </div>
);
export default DefaultUserMypage;
