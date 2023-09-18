import React from 'react';
import { ArtList } from '@/components/main/mainDummyData';
import * as styles from './TopRankArtSection.style';
import ArtItem from '@/components/common/ArtItem';

const TopRankArtSection = () => (
  <styles.Wrapper>
    <styles.Section>
      <styles.Row1>
        {ArtList.slice(0, 3).map((art) => (
          <ArtItem
            key={art.id}
            image={art.image}
            artistName={art.artistName}
            likeCount={art.likeCount}
          />
        ))}
      </styles.Row1>
      <styles.Row2>
        {ArtList.slice(3, 7).map((art) => (
          <ArtItem
            key={art.id}
            image={art.image}
            artistName={art.artistName}
            likeCount={art.likeCount}
          />
        ))}
      </styles.Row2>
      <styles.Row3>
        {ArtList.slice(7, 11).map((art) => (
          <ArtItem
            key={art.id}
            image={art.image}
            artistName={art.artistName}
            likeCount={art.likeCount}
          />
        ))}
      </styles.Row3>
    </styles.Section>
  </styles.Wrapper>
);

export default TopRankArtSection;
