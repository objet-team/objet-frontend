import * as styles from './ShopPageArt.style';
import { MyPageArtList } from '@/components/main/mainDummyData';
import ShopPageArtItem from '@/components/shop/ShopArtSection/ShopArtItem';
import { useGetGoodsPopularNormal } from '@/hooks/useGetGoodsPopularNormal';
import { useEffect } from 'react';
import { useState } from 'react';

const ShopPageArt = () => {
  const onClick = () => {};

  const { data, isLoading } = useGetGoodsPopularNormal();

  console.log(data);
  return (
    <styles.Wrapper>
      <styles.Section>
        {data?.goodsInfos.map((art) => (
          <ShopPageArtItem
            key={art.productId}
            profileImg={
              art.artistPicPath == null
                ? '/mypage/DefaultProfileImg.png'
                : art.artistPicPath
            }
            artistName={art.artistName}
            title={art.title}
            artImg={art.thumbNailPath}
            heartCount={art.like}
          />
        ))}
      </styles.Section>
    </styles.Wrapper>
  );
};
export default ShopPageArt;
