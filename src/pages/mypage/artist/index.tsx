import NavigationBar from '@/components/common/NavigationBar';
import ArtistNavigationBar from '@/components/common/NavigationBar/ArtistNavigationBar';
import ArtistUserMyPage from '@/components/mypage/ArtistUserMyPage/ArtistUserMyPage';
import api from '@/services/TokenService';

const ArtistUserMypagePage = () => {
  const token = api.getToken();
  const role = api.getRole();
  return (
    <div>
      <ArtistNavigationBar />
      <ArtistUserMyPage />
    </div>
  );
};
export default ArtistUserMypagePage;
