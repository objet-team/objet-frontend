import ArtistProfile from '@/components/ArtistProfile';
import NavigationBar from '@/components/common/NavigationBar';
import ArtistNavigationBar from '@/components/common/NavigationBar/ArtistNavigationBar';
import LoginAfterNavigationBar from '@/components/common/NavigationBar/LoginAfterNavigationBar';
import api from '@/services/TokenService';

const ArtistProfilePage = () => {
  const token = api.getToken();
  const role = api.getRole();

  return (
    <>
      {token == null ? (
        <NavigationBar />
      ) : role === 'USER' ? (
        <LoginAfterNavigationBar />
      ) : (
        <ArtistNavigationBar />
      )}
      <ArtistProfile />
    </>
  );
};
export default ArtistProfilePage;
