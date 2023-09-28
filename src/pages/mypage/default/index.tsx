import NavigationBar from '@/components/common/NavigationBar';
import ArtistNavigationBar from '@/components/common/NavigationBar/ArtistNavigationBar';
import LoginAfterNavigationBar from '@/components/common/NavigationBar/LoginAfterNavigationBar';
import DefaultUserMypage from '@/components/mypage/DefaultUserMypage';
import api from '@/services/TokenService';

const MypagePage = () => {
  const token = api.getToken();
  const role = api.getRole();

  return (
    <div>
      {token == null ? (
        <NavigationBar />
      ) : role === 'USER' ? (
        <LoginAfterNavigationBar />
      ) : (
        <ArtistNavigationBar />
      )}
      <DefaultUserMypage />
    </div>
  );
};
export default MypagePage;
