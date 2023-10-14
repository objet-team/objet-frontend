import GoodsDetail from '@/components/shop/GoodsDetail';
import { ElementProps } from '@/constants/types/editor';
import { useRouter } from 'next/router';

export interface NormalGoodsDetailData {
  imageList: { contentOrder: number; url: string }[];
  artistName: string;
  artistProfileImage: string;
  name: string;
  price: number;
  deliveryCharge: number;
  contentData: ElementProps[];
}

const sampleUrl =
  'https://images.unsplash.com/photo-1694900565922-d279cef76fd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80';

const sampleData: NormalGoodsDetailData = {
  imageList: [
    { contentOrder: 0, url: sampleUrl },
    { contentOrder: 1, url: sampleUrl },
    { contentOrder: 2, url: sampleUrl },
    { contentOrder: 3, url: sampleUrl },
  ],
  artistName: 'artist name',
  artistProfileImage: sampleUrl,
  name: 'goods name',
  price: 10000,
  deliveryCharge: 3000,
  contentData: [],
};

const GoodsDetailPage = () => {
  return <GoodsDetail data={sampleData} />;
};

export default GoodsDetailPage;
