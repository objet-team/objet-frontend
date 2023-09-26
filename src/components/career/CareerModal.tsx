import CloseButton from '@public/icons/login/Login_close.svg';
import * as styles from './CareerModal.style';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import PurpleFillBtn from '@/components/common/Button/PurpleFillBtn';

export interface CareerModalProps {
  careerClick: boolean;
  setCareerClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const CareerModal = ({ careerClick, setCareerClick }: CareerModalProps) => {
  const onClick = () => {
    setCareerClick(!careerClick);
  };
  return (
    <styles.ModalBackground>
      <styles.ModalBox>
        <styles.ClosedButton onClick={onClick}>
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
          <styles.InputContainer />
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
          <styles.InputContainer />
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
          <styles.InputContainer />
        </styles.ColContainer>
        <styles.CheckboxContainer>
          <styles.CheckBox type="checkbox" />
          <Text color={COLORS.font.black60} textStyleName="caption">
            채용제안을 위한 개인정보 활용에 동의합니다
          </Text>
        </styles.CheckboxContainer>
        <styles.ButtonContainer>
          <PurpleFillBtn label="채용 제안하기" onClick={() => {}} />
        </styles.ButtonContainer>
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};
export default CareerModal;
