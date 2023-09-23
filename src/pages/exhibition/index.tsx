import ArtistInfo from '@/components/common/ArtistInfo';
import Content from '@/components/exhibition/Content';
import TopBar from '@/components/exhibition/TopBar';

const ExhibitionPage = () => (
  <>
    <TopBar
      imgUrl="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
      title="로지의 전시"
      artistName="로지"
    />
    <Content
      artistName="로지"
      exhibitionItem={[]}
      part="uxui디자인"
      artistInfo="유어슈 미녀 로지"
    />
    {/* <ArtistInfo
      img="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
      part="uxui디자인"
      name="로지"
      info="유어슈 미녀 로지"
    /> */}
  </>
);
export default ExhibitionPage;
