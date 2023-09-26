import ArtistUserInfo from '../ArtistUserInfo/ArtistUserInfo';
import * as styles from './Banner.style';
import { COLORS } from '@/constants/styles';
import Text from '../Text';

const ShopBanner = () => (
  <styles.ShopBannerContainer>
    <Text color={COLORS.main.white} textStyleName="title">
      작가들의 개성이 담긴 굿즈들을 만나보세요.
    </Text>
  </styles.ShopBannerContainer>
);
export default ShopBanner;
