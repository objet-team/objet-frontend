export interface GetProductData {
  rank: number;
  productId: number;
  title: string;
  category: string;
  like: number;
  artistName: string;
  artistPicPath: string;
  thumbNailPath: string;
}

export interface GetProductPopularDto {
  productInfos: GetProductData[];
}

export interface GetProductNewDto {
  productInfos: GetProductData[];
}
