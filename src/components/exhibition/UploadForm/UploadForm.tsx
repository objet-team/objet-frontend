import { useRecoilState } from 'recoil';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import ArtCategory from '@/components/common/ArtCategoryMenu';
import ContentEditor from '@/components/common/ContentEditor';
import * as styles from './UploadForm.style';
import { uploadFormAtom } from '@/states/ExhibitionAtom';
import { CategoryType } from '@/constants/types/art';

const UploadForm = () => {
  const [inputs, setInputs] = useRecoilState(uploadFormAtom);
  const { part, title, description } = inputs;

  return (
    <styles.FormContainer>
      <styles.Field>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          작품 분야
        </Text>
        <ArtCategory
          menu={part}
          onClickMenu={(menu: CategoryType) =>
            setInputs({ ...inputs, part: menu })
          }
        />
      </styles.Field>
      <styles.Field>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          작품명
        </Text>
        <styles.TextInput
          cols={1}
          className="title"
          placeholder="작품명을 입력해주세요."
          value={title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
      </styles.Field>
      <styles.Field>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          작품 설명
        </Text>
        <styles.TextInput
          className="introduction"
          placeholder="작품에 대한 설명을 입력해주세요."
          value={description}
          onChange={(e) =>
            setInputs({ ...inputs, description: e.target.value })
          }
        />
      </styles.Field>
      <styles.Field>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          작품 업로드
        </Text>
        <ContentEditor placeholder="오른쪽 기능들을 사용하여 여러분의 전시를 완성해보세요." />
      </styles.Field>
    </styles.FormContainer>
  );
};
export default UploadForm;
