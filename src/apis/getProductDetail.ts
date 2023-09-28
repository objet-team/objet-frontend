import { ProductDetailData } from '@/constants/types/home';
import client from './client';
import { AxiosResponse } from 'axios';

/** 전시 작품 상세 보기 데이터 조회 API */
export const getProductDetatil = async (id: number) => {
  try {
    const res = await client.get<
      ProductDetailData,
      AxiosResponse<ProductDetailData>,
      { id: number }
    >(`/api/v1/product/detail/${id}`);

    return res.data;
  } catch (error) {
    throw error;
  }
};
export default getProductDetatil;
