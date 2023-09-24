import CloseButton from '@public/icons/login/Login_close.svg';
import { COLORS } from '@/constants/styles';
import Text from '../common/Text';
import * as styles from './ArtistRegisterModal.style';
import PurpleFillBtn from '../common/Button/PurpleFillBtn';
import DesignType from './DesginType/DesignType';

export interface ArtistRegisterModalProps {
  registerClick: boolean;
  setRegisterClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArtistRegisterModal = ({
  registerClick,
  setRegisterClick,
}: ArtistRegisterModalProps) => {
  const onClick = () => {
    setRegisterClick(false);
  };
  return (
    <styles.ModalBackground>
      <styles.ModalBox>
        <styles.ClosedButton onClick={onClick}>
          <CloseButton />
        </styles.ClosedButton>
        <Text color={COLORS.font.black100} textStyleName="subtitle">
          작가등록을 위해 몇 가지 정보를 입력해주세요.
        </Text>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              이름
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
              디자인 분야
            </Text>
            <Text color={COLORS.main.purple} textStyleName="body1">
              *
            </Text>
            <Text color={COLORS.font.black60} textStyleName="body2R">
              (중복선택 가능)
            </Text>
          </styles.RowContainer>
          <DesignType />
        </styles.ColContainer>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              본인에 대한 한줄 소개
            </Text>
          </styles.RowContainer>
          <styles.InputContainer />
        </styles.ColContainer>
        <styles.CheckboxContainer>
          <styles.CheckBox type="checkbox" />
          <Text color={COLORS.font.black60} textStyleName="caption">
            작가등록을 위한 개인정보 활용에 동의합니다
          </Text>
        </styles.CheckboxContainer>
        <styles.ButtonContainer>
          <PurpleFillBtn onClick={onClick} label="작가등록 신청하기" />
        </styles.ButtonContainer>
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};
export default ArtistRegisterModal;
