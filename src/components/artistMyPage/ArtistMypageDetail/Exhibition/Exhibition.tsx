import * as styles from './Exhibition.style';
import ExhibitionItem, {
  ExhibitionItemProps,
} from './ExhibitionItem/ExhibitionItem';

export interface ExhibitionProps {
  exhibitionItem: ExhibitionItemProps[];
}

const Exhibition = ({ exhibitionItem }: ExhibitionProps) => (
  <styles.ExhibitionBackground>
    {exhibitionItem.map((item) => (
      <div key={item.id}>
        <ExhibitionItem
          id={12}
          name={item.name}
          detail={item.detail}
          imageList={item.imageList}
        />
      </div>
    ))}
  </styles.ExhibitionBackground>
);
export default Exhibition;
