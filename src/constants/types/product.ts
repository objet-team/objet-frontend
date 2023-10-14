import { CategoryEnum } from './art';
import { ElementProps } from './editor';

export interface GetProductData {
  rank: number;
  productId: number;
  title: string;
  category: string;
  like: number;
  artistId: number;
  artistName: string;
  artistPicPath: string;
  thumbNailPath: string;
}

export interface GetProductPopularDto {
  productInfos: GetProductData[];
}
export interface GetProductWeeklyDto {
  productInfos: GetProductData[];
}

export interface GetProductNewDto {
  productInfos: GetProductData[];
}

export interface ProductDetailData {
  productId: number;
  title: string;
  category: string;
  detail: string;
  like: number;
  artistName: string;
  artistInfo: string;
  artistPicPath: string;
  contents: ElementProps[];
}

export enum UserTypes {
  DEFAULT,
  ARTIST,
}

/** 작품 업로드 request data */
export interface ProductRegisterReq {
  title: string;
  description: string;
  category: CategoryEnum;
  contents: ElementProps[];
}
