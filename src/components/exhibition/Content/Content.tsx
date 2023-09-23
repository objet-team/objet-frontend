import ArtistInfo from '@/components/common/ArtistInfo';
import * as styles from './Content.style';
import ExhibitionItem, { ExhibitionItemProps } from '../ExhibitionItem';

export interface ContentProps {
  artistName: string;
  part: string;
  artistInfo: string;
  exhibitionItem: ExhibitionItemProps[];
}

const Content = ({
  part,
  artistName,
  artistInfo,
  exhibitionItem,
}: ContentProps) => (
  <styles.ExhibitionBackground>
    {exhibitionItem.map((item) => (
      <div key={item.id}>
        <ExhibitionItem name="뿌슝" detail="뿌슝슝" imageList={[]} />
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
export default Content;
