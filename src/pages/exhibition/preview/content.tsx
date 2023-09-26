/* eslint-disable @typescript-eslint/no-use-before-define */
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import Content from '@/components/exhibition/Content';
import { COLORS } from '@/constants/styles';
import ArtistInfo from '@/components/common/ArtistInfo';
import { editorContentAtom } from '@/states/ExhibitionAtom';
import PreviewBar from '@/components/exhibition/PreviewBar';

const ExhibtionPreviewPage = () => {
  const data = useRecoilValue(editorContentAtom);
  return (
    <>
      <PreviewBar />
      <PreviewWrapper>
        <Content data={data} />
        <ArtistInfo
          img="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
          part="dfs"
          name="sdf"
          info="sdf"
        />
      </PreviewWrapper>
    </>
  );
};

export default ExhibtionPreviewPage;

export const PreviewWrapper = styled.div`
  height: 100vh;
  background-color: ${COLORS.main.black};
  color: ${COLORS.main.white};
  display: flex;
  flex-direction: column;

  padding: 60px 80px;
  gap: 10rem;
`;
