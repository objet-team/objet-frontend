import * as styles from './MyPageArt.style';
import { MyPageArtList } from '@/components/main/mainDummyData';
import MyPageArtItem from './MyPageArtItem';

const MyPageArt = () => {
  const onClick = () => {};

  return (
    <styles.Wrapper>
      <styles.Section>
        {MyPageArtList.map((art) => (
          <MyPageArtItem
            key={art.id}
            profileImg={art.artistImg}
            artistName={art.artistName}
            title={art.title}
            artImg={art.image}
            heartCount={art.likeCount}
          />
        ))}
      </styles.Section>
    </styles.Wrapper>
  );
};
export default MyPageArt;
