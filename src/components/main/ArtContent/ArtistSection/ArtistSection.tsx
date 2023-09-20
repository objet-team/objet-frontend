import React from 'react';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import { ArtistList } from '@/components/main/mainDummyData';
import * as styles from './ArtistSection.style';

const ArtistSection = () => (
  <styles.Wrapper>
    <styles.Section>
      <styles.TitleWrap>
        <Text color={COLORS.main.black} textStyleName="title">
          이달의 작가
        </Text>
        <Text color={COLORS.font.black60} textStyleName="subtitle">
          모브제가 PICK한 작가들의 이야기를 담아봤어요.
        </Text>
      </styles.TitleWrap>
      <styles.ContentWrap>
        {ArtistList.map(({ name, expert }) => (
          <styles.ArtistWrap key={name}>
            <styles.ProfileWrap />
            <Text color={COLORS.font.black100} textStyleName="body2B">
              {name}
            </Text>
            <Text color={COLORS.font.black100} textStyleName="body2R">
              {expert}
            </Text>
          </styles.ArtistWrap>
        ))}
      </styles.ContentWrap>
    </styles.Section>
  </styles.Wrapper>
);

export default ArtistSection;
