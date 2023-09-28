import { useRecoilValue } from 'recoil';
import { editorContentAtom, uploadFormAtom } from '@/states/ExhibitionAtom';
import PreviewBar from '@/components/exhibition/PreviewBar';
import styled from '@emotion/styled';
import Intro from '@/components/exhibition/Intro';
import { COLORS } from '@/constants/styles';
import { GetServerSideProps, GetServerSidePropsContext as GSSPCTX } from 'next';
import BeforeUploadBar from '@/components/exhibition/BeforeUploadBar';
import ArtistInfo from '@/components/common/ArtistInfo';
import { useState } from 'react';
import TopBar from '@/components/exhibition/TopBar';
import Content from '@/components/exhibition/Content';

export interface PreviewPageProps {
  type: 'preview' | 'uploading';
}

export const getServerSideProps: GetServerSideProps = async (ctx: GSSPCTX) => {
  return { props: { type: ctx.query.type ? 'uploading' : 'preview' } };
};

const ExhibitionPreviewPage = ({ type }: PreviewPageProps) => {
  const { title, description } = useRecoilValue(uploadFormAtom);
  const data = useRecoilValue(editorContentAtom);

  const [step, setStep] = useState<'intro' | 'content'>('intro');

  const Bar = {
    preview: <PreviewBar />,
    uploading: <BeforeUploadBar />,
  };

  return (
    <>
      {Bar[type]}
      <IntroWrapper>
        {step === 'intro' && (
          <>
            <Intro
              title={title}
              description={description}
              moveToExhibition={() => {}}
            />
            <ArtistInfo
              img="https://images.unsplash.com/photo-1694572620159-e69049aeba00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
              part={['UXUI디자이너']}
              info="나는 유어슈 미녀 로지"
              name="로지"
            />
          </>
        )}
        {step === 'content' && (
          <>
            <TopBar
              imgUrl="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
              title="로지의 전시"
              artistName="로지"
            />
            <Content data={data} />
          </>
        )}
        <ArtistInfo
          img="https://images.unsplash.com/photo-1694572620159-e69049aeba00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
          part={['UXUI디자이너']}
          info="나는 유어슈 미녀 로지"
          name="로지"
        />
      </IntroWrapper>
    </>
  );
};
export default ExhibitionPreviewPage;

const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${COLORS.main.black};
  color: ${COLORS.main.white};
  padding: 16px 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  position: absolute;
  top: 72px;
  left: 0px;
`;
