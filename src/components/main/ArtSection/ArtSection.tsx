import React from 'react';
import * as styles from './ArtSection.style';
import { ArtList } from '@/components/main/mainDummyData';
import ArtItem from '@/components/common/ArtItem';

const ArtSection = () => (
  <styles.Wrapper>
    <styles.Section>
      {[...ArtList, ArtList[0]].map((art) => (
        <ArtItem
          key={art.id}
          image={art.image}
          artistName={art.artistName}
          likeCount={art.likeCount}
        />
      ))}
    </styles.Section>
  </styles.Wrapper>
);

export default ArtSection;
