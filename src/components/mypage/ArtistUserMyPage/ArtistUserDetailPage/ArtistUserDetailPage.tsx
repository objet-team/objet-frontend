import { useGetHiringProduct } from '@/hooks/useGetHiringProduct';
import ArtDetail from './ArtDetail/ArtDetail';
import * as styles from './ArtistUserDetailPage.style';
import api from '@/services/TokenService';
import { useGetProductDetail } from '@/hooks/useGetProductDetail';
import { GetHiringDataList } from '@/constants/types/hiring';

const ArtistUserDetailPage = () => {
  const token = api.getToken();
  const { data: productData } = useGetProductDetail(7);
  const { data: hiringData } = useGetHiringProduct(token, 7);
  return (
    <styles.Conatiner>
      <ArtDetail
        careerData={hiringData as GetHiringDataList}
        title={productData?.title as string}
        heartCnt={productData?.like as number}
        detail={productData?.detail as string}
        img={productData?.artistPicPath as string}
      />
      {/* <Exhibition
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
    /> */}
    </styles.Conatiner>
  );
};
export default ArtistUserDetailPage;
