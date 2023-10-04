import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import * as styles from './BeforeUploadBar.style';
import { useRecoilValue } from 'recoil';
import { editorContentAtom, uploadFormAtom } from '@/states/ExhibitionAtom';
import { registerProduct } from '@/apis/product';
import { CategoryEnumConverter } from '@/constants/types/art';
import { useRouter } from 'next/router';

const BeforeUploadBar = () => {
  const router = useRouter();

  const inputs = useRecoilValue(uploadFormAtom);
  const { part, title, description } = inputs;
  const contentData = useRecoilValue(editorContentAtom);

  const uploadExhibition = async () => {
    const data = await registerProduct({
      title,
      description,
      category: CategoryEnumConverter[part],
      contents: contentData,
    });

    router.push(`/exhibition/${data.productId}`);
  };

  return (
    <styles.Wrapper>
      <Text color={COLORS.main.white} textStyleName="subtitle">
        작품 업로드를 진행할까요?
      </Text>
      <styles.UploadButton onClick={uploadExhibition}>
        작품 업로드
      </styles.UploadButton>
    </styles.Wrapper>
  );
};

export default BeforeUploadBar;
