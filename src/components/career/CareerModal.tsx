import * as styles from './CarrerModal.style';
import { COLORS } from '@/constants/styles';
import Text from '../common/Text';
import CloseButton from '@/assets/button/CloseButton.svg';
import PurpleFillBtn from '../common/Button/PurpleFillBtn';

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
        <div onClick={onClick}>
          <CloseButton />
        </div>
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
        <PurpleFillBtn label="채용 제안하기" onClick={onClick} />
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};
export default CareerModal;
