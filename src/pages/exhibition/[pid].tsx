export const runtime = 'experimental-edge';

import { getProductDetatil } from '@/apis/product';
import ArtistInfo from '@/components/common/ArtistInfo';
import Content from '@/components/exhibition/Content';
import Intro from '@/components/exhibition/Intro/Intro';
import TopBar from '@/components/exhibition/TopBar';
import { COLORS } from '@/constants/styles';
import { ProductDetailData } from '@/constants/types/home';
import styled from '@emotion/styled';
import {
  GetServerSideProps as GSSP,
  GetServerSidePropsContext as GSSP_CTX,
} from 'next';
import { useState } from 'react';

export const getServerSideProps: GSSP = async (context: GSSP_CTX) => {
  const id = Number(context.query.pid as string);
  const data = await getProductDetatil(id);

  return { props: { data } };
};

const ExhibitionPage = ({ data }: { data: ProductDetailData }) => {
  const [step, setStep] = useState<'intro' | 'content'>('intro');

  const {
    productId,
    artistId,
    title,
    category,
    detail,
    like,
    artistName,
    artistInfo,
    artistPicPath,
    contents,
  } = data;

  return (
    <Wrapper>
      {step === 'intro' && (
        <Intro
          title={title}
          description={detail}
          moveToExhibition={() => setStep('content')}
        />
      )}
      {step === 'content' && (
        <>
          <TopBar
            productId={productId}
            imgUrl={artistPicPath}
            title={title}
            artistName={artistName}
          />
          <Content data={contents} />
        </>
      )}
      <ArtistInfo
        artistId={artistId}
        img={artistPicPath}
        part={[category]}
        info={artistInfo}
        name={artistName}
      />
    </Wrapper>
  );
};

export default ExhibitionPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.main.black};
  color: ${COLORS.main.white};
  padding: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;
