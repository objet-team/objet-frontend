import ArtistProfile from '@/components/ArtistProfile';
import NavigationBar from '@/components/common/NavigationBar';
import ArtistNavigationBar from '@/components/common/NavigationBar/ArtistNavigationBar';
import LoginAfterNavigationBar from '@/components/common/NavigationBar/LoginAfterNavigationBar';
import { useGetArtistInfoPublic } from '@/hooks/useGetArtistInfoPublic';
import api from '@/services/TokenService';
import { useRouter } from 'next/router';

const ArtistProfilePage = () => {
  const token = api.getToken();
  const role = api.getRole();
  console.log(role);

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
