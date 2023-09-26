import * as styles from './ShopPageArt.style';
import { MyPageArtList } from '@/components/main/mainDummyData';
import ShopPageArtItem from '@/components/shop/ShopArtSection/ShopArtItem';

const ShopPageArt = () => {
  const onClick = () => {};

  return (
    <styles.Wrapper>
      <styles.Section>
        {MyPageArtList.map((art) => (
          <ShopPageArtItem
            key={art.id}
            profileImg={art.artistImg}
            artistName={art.artistName}
            title={art.title}
            artImg={art.image}
            heartCount={art.likeCount}
          />
        ))}
      </styles.Section>
    </styles.Wrapper>
  );
};
export default ShopPageArt;
