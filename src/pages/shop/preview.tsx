export const runtime = 'experimental-edge';

import { GetServerSideProps, GetServerSidePropsContext as GSSPCTX } from 'next';
import { useRecoilValue } from 'recoil';
import { editorContentAtom, uploadFormAtom } from '@/states/GoodsAtom';
import api from '@/services/TokenService';
import PreviewBar from '@/components/shop/PreviewBar';
import BeforeUploadBar from '@/components/shop/BeforeUploadBar';
import GoodsDetail from '@/components/shop/GoodsDetail';
import { NormalGoodsDetailData } from './[gid]';

export interface PreviewPageProps {
  type: 'preview' | 'uploading';
}

export const getServerSideProps: GetServerSideProps = async (ctx: GSSPCTX) => {
  return { props: { type: ctx.query.type ? 'uploading' : 'preview' } };
};

/**
 * `/shop/preview`: 업로드 중 '미리보기' 버튼을 눌렀을 때
 * `/shop/preview?type=uploading`: 업로드 중 '다음' 버튼을 눌렀을 때
 */
const GoodsPreviewPage = ({ type }: PreviewPageProps) => {
  const { name, price, deliveryCharge, imageList } =
    useRecoilValue(uploadFormAtom);
  const contentData = useRecoilValue(editorContentAtom);

  const Bar = {
    preview: <PreviewBar />,
    uploading: <BeforeUploadBar />,
  };

  const data: NormalGoodsDetailData = {
    imageList: imageList.map((image) => ({
      contentOrder: image.order,
      url: image.url,
    })),
    artistName: api.getName() || 'artist name', // 자신의 이름
    artistProfileImage: '',
    name,
    price,
    deliveryCharge,
    contentData,
  };

  return (
    <>
      {Bar[type]}
      <div style={{ marginTop: 80 }}>
        <GoodsDetail data={data} />
      </div>
    </>
  );
};
export default GoodsPreviewPage;
