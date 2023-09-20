import ArtistInfo from '../common/ArtistInfo';
import * as styles from './Exhibition.style';
import ExhibitionItem, { ExhibitionItemProps } from './ExhibitionItem';
import TopBar from './TopBar';

export interface ExhibitionProps {
  title: string;
  artistName: string;
  part: string;
  artistInfo: string;
  exhibitionItem: ExhibitionItemProps[];
}

const Exhibition = ({
  title,
  part,
  artistName,
  artistInfo,
  exhibitionItem,
}: ExhibitionProps) => (
  <styles.ExhibitionBackground>
    <styles.TopBarContainer>
      <TopBar
        imgUrl="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
        artistName={artistName}
        title={title}
      />
    </styles.TopBarContainer>
    {exhibitionItem.map((item) => (
      <div key={item.id}>
        <ExhibitionItem id={12} name="뿌슝" detail="뿌슝슝" imageList={[]} />
      </div>
    ))}
    <ArtistInfo
      img="https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
      part={part}
      name={artistName}
      info={artistInfo}
    />
  </styles.ExhibitionBackground>
);
export default Exhibition;
