import React from 'react';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import FlagIcon from '@/assets/icons/flag.svg';
import * as styles from './MainBanner.style';

const MainBanner = () => (
  <styles.Wrapper>
    <styles.Banner>
      <styles.TitleWrap>
        <Text color={COLORS.main.black} textStyleName="title">
          금주의 오브제
        </Text>
      </styles.TitleWrap>
      <styles.PostWrap>
        {new Array(4).fill(0).map((n, idx) => (
          <styles.Post className="post" key={n}>
            <FlagIcon />
            <Text
              color={COLORS.main.white}
              textStyleName="body2B"
              className="index"
            >
              {`0${idx + 1}`.slice(-2)}
            </Text>
          </styles.Post>
        ))}
      </styles.PostWrap>
    </styles.Banner>
  </styles.Wrapper>
);

export default MainBanner;
