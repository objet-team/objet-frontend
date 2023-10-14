import CloseButton from '@public/icons/login/Login_close.svg';
import * as styles from './CareerModal.style';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import postHiring from '@/apis/postHiring';
import api from '@/services/TokenService';
import useInput from '@/hooks/useInput';
import { PostHiringReq } from '@/constants/types/user';

export interface CareerModalProps {
  productId: number;
  careerClick: boolean;
  setCareerClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const CareerModal = ({
  productId,
  careerClick,
  setCareerClick,
}: CareerModalProps) => {
  const [company, onCompanyChange] = useInput('');
  const [comment, onCommentChange] = useInput('');
  const [contact, onContactChange] = useInput('');
  const onClick = async () => {
    const data: PostHiringReq = {
      comment: comment,
      company: company,
      contact: contact,
    };
    const token = api.getToken();
    const response = await postHiring(token, productId, data);
    if (response) {
      window.alert('채용제안 성공');
      location.reload();
    }
    setCareerClick(!careerClick);
  };
  const onCloseClick = () => {
    setCareerClick(!careerClick);
  };
  return (
    <styles.ModalBackground>
      <styles.ModalBox>
        <styles.ClosedButton onClick={onCloseClick}>
          <CloseButton />
        </styles.ClosedButton>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          채용제안서를 위한 몇가지 정보를 입력해주세요
        </Text>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              회사명
            </Text>
            <Text color={COLORS.main.purple} textStyleName="body1">
              *
            </Text>
          </styles.RowContainer>
          <styles.InputContainer value={company} onChange={onCompanyChange} />
        </styles.ColContainer>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              내용
            </Text>
            <Text color={COLORS.main.purple} textStyleName="body1">
              *
            </Text>
          </styles.RowContainer>
          <styles.InputContainer value={comment} onChange={onCommentChange} />
        </styles.ColContainer>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              연락처
            </Text>
            <Text color={COLORS.main.purple} textStyleName="body1">
              *
            </Text>
          </styles.RowContainer>
          <styles.InputContainer value={contact} onChange={onContactChange} />
        </styles.ColContainer>
        <styles.CheckboxContainer>
          <styles.CheckBox type="checkbox" />
          <Text color={COLORS.font.black60} textStyleName="caption">
            채용제안을 위한 개인정보 활용에 동의합니다
          </Text>
        </styles.CheckboxContainer>
        <styles.ButtonContainer>
          <Button fill="purple" label="채용 제안하기" onClick={onClick} />
        </styles.ButtonContainer>
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};
export default CareerModal;
