import { UploadFormValue } from '@/states/GoodsAtom';
import client from './API';

/** 일반 굿즈 등록 API  */
export const registerNormalGoods = async (
  inputs: UploadFormValue,
  content: any[],
): Promise<{
  message: string;
  productId: number;
}> => {
  try {
    const { name, price, deliveryCharge, imageList } = inputs;

    const thumbnails = imageList.map(({ order, url }) => ({
      contentOrder: order,
      url,
    }));

    const res = await client.post('/api/v1/goods/register/normal', {
      title: name,
      category: 'NORMAL',
      description: '', // todo
      isInclude: deliveryCharge !== 0,
      price,
      thumbnails,
      goodsDetail: content,
    });

    return res.data;
  } catch (error) {
    throw error;
  }
};
