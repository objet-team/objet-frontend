import Text from '@/components/common/Text';
import * as styles from './UploadForm.style';
import { COLORS } from '@/constants/styles';
import ArtCategory from '@/components/common/ArtCategoryMenu/ArtCategoryMenu';
import Editor from './Editor';

const UploadForm = () => (
  <styles.FormContainer>
    <styles.Field>
      <Text color={COLORS.main.black} textStyleName="subtitle">
        작품 분야
      </Text>
      <ArtCategory
        filter={{ category: 'all', sort: 'recommend' }}
        setFilter={() => {}}
      />
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
      <Editor />
    </styles.Field>
  </styles.FormContainer>
);
export default UploadForm;
