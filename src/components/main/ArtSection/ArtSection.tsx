import React from 'react';
import * as styles from './ArtSection.style';
import { ArtList } from '@/components/main/mainDummyData';
import ArtItem from '@/components/common/ArtItem';
import { useGetProductNew } from '@/hooks/useGetProductNew';

const ArtSection = () => {
  const { data, isLoading } = useGetProductNew();
  // <styles.Wrapper>
  //   <styles.Section>
  //     {[...ArtList, ArtList[0]].map((art) => (
  //       <ArtItem
  //         key={art.id}
  //         image={art.image}
  //         artistName={art.artistName}
  //         likeCount={art.likeCount}
  //       />
  //     ))}
  //   </styles.Section>
  // </styles.Wrapper>;
  return (
    <styles.Wrapper>
      <styles.Section>
        {data?.productInfos.map((art) => (
          <ArtItem
            artistId={art.artistId}
            key={art.productId}
            image={art.thumbNailPath}
            artistName={art.artistName}
            likeCount={art.like}
          />
        ))}
      </styles.Section>
    </styles.Wrapper>
  );
};

export default ArtSection;
