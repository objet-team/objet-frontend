import GoodsDetail from '@/components/shop/GoodsDetail';
import { useRouter } from 'next/router';

const sampleUrl =
  'https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80';

export interface ShopItemDetailData {
  imageList: string[];
  artistName: string;
  artistProfileImage: string;
  name: string;
  price: number;
  deliveryPrice: number;
  contentData: never[];
}

// TODO 라우팅 문제로 일단 path를 `/shop/goods` 로 설정해둔 상태
const GoodsDetailPage = () => {
  const router = useRouter();

  const data: ShopItemDetailData = {
    imageList: [sampleUrl, sampleUrl, sampleUrl, sampleUrl],
    artistName: 'artist name',
    artistProfileImage: sampleUrl,
    name: 'goods name',
    price: 10000,
    deliveryPrice: 3000,
    contentData: [],
  };

  return <GoodsDetail data={data} />;
};

export default GoodsDetailPage;
