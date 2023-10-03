import {
  GetProductPopularDto,
  GetProductWeeklyDto,
} from '@/constants/types/product';
import client from './client';
import { GetProductNewDto } from '@/constants/types/home';

/** 전시 작품 최신순 조회 API  */
export const getProductNew = async (): Promise<GetProductNewDto> => {
  try {
    const url = '/api/v1/product/new';
    const data = await client.get(url);
    return data.data;
  } catch (error) {
    throw error;
  }
};

/** 전시 작품 인기순 조회 API  */
export const getProductPopular = async (): Promise<GetProductPopularDto> => {
  try {
    const url = '/api/v1/product/popular';

    const data = await client.get(url);

    return data.data;
  } catch (error) {
    throw error;
  }
};

/** 금주의 모브제 조회 API  */
export const getProductWeekly = async (): Promise<GetProductWeeklyDto> => {
  try {
    const url = '/api/v1/product/weekly';
    const data = await client.get(url);

    return data.data;
  } catch (error) {
    throw error;
  }
};

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
