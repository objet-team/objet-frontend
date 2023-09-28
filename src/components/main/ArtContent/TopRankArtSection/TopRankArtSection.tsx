import React from 'react';
import { ArtList } from '@/components/main/mainDummyData';
import * as styles from './TopRankArtSection.style';
import ArtItem from '@/components/common/ArtItem';
import { useGetProductPopular } from '@/hooks/useGetProductPopular';
const TopRankArtSection = () => {
  const { data, isLoading } = useGetProductPopular();
  console.log(data?.productInfos);
  return (
    <styles.Wrapper>
      <styles.Section>
        <styles.Row1>
          {data?.productInfos
            ?.slice(0, 3)
            .map((art) => (
              <ArtItem
                artistId={art.artistId}
                key={art.productId}
                image={art.thumbNailPath}
                artistName={art.artistName}
                likeCount={art.like}
              />
            ))}
        </styles.Row1>
        <styles.Row2>
          {data?.productInfos
            .slice(3, 7)
            .map((art) => (
              <ArtItem
                artistId={art.artistId}
                key={art.productId}
                image={art.thumbNailPath}
                artistName={art.artistName}
                likeCount={art.like}
              />
            ))}
        </styles.Row2>
        <styles.Row3>
          {data?.productInfos
            .slice(7, 11)
            .map((art) => (
              <ArtItem
                artistId={art.artistId}
                key={art.productId}
                image={art.thumbNailPath}
                artistName={art.artistName}
                likeCount={art.like}
              />
            ))}
        </styles.Row3>
      </styles.Section>
    </styles.Wrapper>
  );
};

export default TopRankArtSection;
