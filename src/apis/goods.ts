import client from './API';

/** 굿즈 등록 API  */
export const registerGoods = async (
  type: 'NORMAL' | 'NFT',
  inputs: any,
): Promise<{
  message: string;
  productId: number;
}> => {
  try {
    const res = await client.post('/api/v1/goods/register/normal', inputs);
    return res.data;
  } catch (error) {
    throw error;
  }
};

//{
//  "title": "string",
//  "category": "string",
//  "description": "string",
//  "isInclude": true,
//  "deliveryCharge": 0,
//  "price": 0,
//  "thumbnails": [
//    {
//      "contentOrder": 0,
//      "url": "string"
//    }
//  ],
//  "goodsDetails": [
//    {}
//  ]
//}
