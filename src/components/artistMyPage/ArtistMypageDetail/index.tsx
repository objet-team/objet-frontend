import ArtDetail from './ArtDetail/ArtDetail';
import Exhibition from './Exhibition/Exhibition';
import * as styles from './ArtistMypageDetail.style';

const ArtistMypageDetail = () => (
  <styles.Conatiner>
    <ArtDetail
      title="asdf"
      heartCnt={12}
      detail="asdfasdf"
      img="https://images.unsplash.com/photo-1682687220363-35e4621ed990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    />
    <Exhibition
      exhibitionItem={[
        {
          name: '뿌슝',
          detail: '숭숭',
          id: 0,
          imageList: [
            {
              xCor: 10,
              yCor: 30,
              width: 400,
              height: 400,
              id: 0,
              imgUrl:
                'https://images.unsplash.com/photo-1682687220363-35e4621ed990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            },
          ],
        },
      ]}
    />
  </styles.Conatiner>
);
export default ArtistMypageDetail;
