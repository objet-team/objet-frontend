import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { useRecoilValue } from 'recoil';
import { editorContentAtom, uploadFormAtom } from '@/states/GoodsAtom';
import { useRouter } from 'next/router';
import { registerNormalGoods } from '@/apis/goods';

import * as styles from './BeforeUploadBar.style';

const BeforeUploadBar = () => {
  const router = useRouter();

  const inputs = useRecoilValue(uploadFormAtom);
  const contentData = useRecoilValue(editorContentAtom);

  const uploadGoods = async () => {
    const data = await registerNormalGoods(inputs, contentData);

    router.push(`/shop/${data.productId}`);
  };

  return (
    <styles.Wrapper>
      <Text color={COLORS.main.white} textStyleName="subtitle">
        굿즈 판매글이 완성되었어요. 이 상태로 글을 업로드할까요?
      </Text>
      <styles.UploadButton onClick={uploadGoods}>
        판매글 업로드하기
      </styles.UploadButton>
    </styles.Wrapper>
  );
};

export default BeforeUploadBar;
