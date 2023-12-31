import NavigationBar from '@/components/common/NavigationBar';
import Shop from '@/components/shop';
import api from '@/services/TokenService';
import ArtistNavigationBar from '@/components/common/NavigationBar/ArtistNavigationBar';
import LoginAfterNavigationBar from '@/components/common/NavigationBar/LoginAfterNavigationBar';

const ShopPage = () => {
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
      <Shop />
    </div>
  );
};
export default ShopPage;
