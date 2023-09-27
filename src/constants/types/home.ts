export interface GetProductPopular {
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
  productInfos: GetProductPopular[];
}
