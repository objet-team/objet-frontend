import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import ArtCategory from '@/components/common/ArtCategoryMenu';
import ContentEditor from '@/components/common/ContentEditor';
import * as styles from './UploadForm.style';

const UploadForm = () => (
  <styles.FormContainer>
    <styles.Field>
      <Text color={COLORS.main.black} textStyleName="subtitle">
        작품 분야
      </Text>
      <ArtCategory menu="all" onClickMenu={() => {}} />
    </styles.Field>
    <styles.Field>
      <Text color={COLORS.main.black} textStyleName="subtitle">
        작품명
      </Text>
      <styles.TextInput cols={1} className="title" />
    </styles.Field>
    <styles.Field>
      <Text color={COLORS.main.black} textStyleName="subtitle">
        작품 설명
      </Text>
      <styles.TextInput className="introduction" />
    </styles.Field>
    <styles.Field>
      <Text color={COLORS.main.black} textStyleName="subtitle">
        작품 업로드
      </Text>
      <ContentEditor placeholder="오른쪽 기능들을 사용하여 여러분의 전시를 완성해보세요." />
    </styles.Field>
  </styles.FormContainer>
);
export default UploadForm;
