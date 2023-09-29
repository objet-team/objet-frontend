import { ProductDetailData } from '@/constants/types/home';
import client from './client';
import { AxiosResponse } from 'axios';

// TODO axios가 edge runtime 지원 안하는 이슈로 일단 fetch로 대체
/** 전시 작품 상세 보기 데이터 조회 API */
export const getProductDetatil = async (id: number) => {
  try {
    //const res = await client.get<
    //  ProductDetailData,
    //  AxiosResponse<ProductDetailData>,
    //  { id: number }
    //>(`/api/v1/product/detail/${id}`);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/detail/${id}`,
      {
        method: 'GET',
      },
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
};
export default getProductDetatil;
