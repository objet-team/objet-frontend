import React from 'react';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import { useGetProductWeekly } from '@/hooks/useGetProductWeekly';
import Image from 'next/image';
import * as styles from './MainBanner.style';

const MainBanner = () => {
  const { data, isLoading } = useGetProductWeekly();

  return (
    <styles.Wrapper>
      <styles.Banner>
        <styles.TitleWrap>
          <Text color={COLORS.main.black} textStyleName="title">
            금주의 오브제
          </Text>
        </styles.TitleWrap>
        <styles.PostWrap>
          {isLoading
            ? // Skeleton UI
              new Array(4)
                .fill(0)
                .map((_, idx) => (
                  <styles.Post key={idx} className="post"></styles.Post>
                ))
            : data?.productInfos.map((info) => (
                <styles.Post key={info.productId} className="post">
                  <Text
                    color={COLORS.main.white}
                    textStyleName="body2B"
                    className="index"
                  >
                    {info.rank}
                  </Text>
                  <Image
                    src="/icons/flag.svg"
                    alt="flag-icon"
                    width={36}
                    height={48}
                    className="flag"
                  />
                  <Image src={info.thumbNailPath} alt="weekly-img" fill />
                </styles.Post>
              ))}
        </styles.PostWrap>
      </styles.Banner>
    </styles.Wrapper>
  );
};

export default MainBanner;
