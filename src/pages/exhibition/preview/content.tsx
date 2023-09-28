import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import Content from '@/components/exhibition/Content';
import { COLORS } from '@/constants/styles';
import ArtistInfo from '@/components/common/ArtistInfo';
import { editorContentAtom } from '@/states/ExhibitionAtom';
import PreviewBar from '@/components/exhibition/PreviewBar';
import TopBar from '@/components/exhibition/TopBar';
import BeforeUploadBar from '@/components/exhibition/BeforeUploadBar';
import { GetServerSideProps, GetServerSidePropsContext as GSSCTX } from 'next';
import { PreviewPageProps } from './intro';

export const getServerSideProps: GetServerSideProps = async (ctx: GSSCTX) => {
  return { props: { type: ctx.query.type ? 'uploading' : 'preview' } };
};

const ExhibtionPreviewContentPage = ({ type }: PreviewPageProps) => {
  const data = useRecoilValue(editorContentAtom);
  return (
    <>
      {type === 'preview' ? <PreviewBar /> : <BeforeUploadBar />}
      <ContentWrapper>
        <TopBar
          imgUrl="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
          title="로지의 전시"
          artistName="로지"
        />
        <Content data={data} />
        <ArtistInfo
          img="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
          part={[]}
          name="sdf"
          info="sdf"
        />
      </ContentWrapper>
    </>
  );
};

export default ExhibtionPreviewContentPage;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.main.black};
  color: ${COLORS.main.white};
  display: flex;
  flex-direction: column;
  padding: 16px 80px;
  /*gap: 10rem;*/

  position: absolute;
  top: 72px;
  left: 0px;
`;
