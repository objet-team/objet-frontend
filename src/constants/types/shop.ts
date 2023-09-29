import { GetProductData } from './home';

export type ShopType = 'real' | 'nft';

export const ShopLabels: Record<ShopType, string> = {
  real: '실물 굿즈',
  nft: 'NFT 굿즈',
};

export interface GetGoodsPopularNormalDto {
  goodsInfos: GetProductData[];
}
