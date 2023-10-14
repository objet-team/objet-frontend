import CloseButton from '@public/icons/login/Login_close.svg';
import { COLORS } from '@/constants/styles';
import Text from '../common/Text';
import * as styles from './ArtistRegisterModal.style';
import Button from '../common/Button';
import DesignType from './DesginType/DesignType';
import api from '@/services/TokenService';
import useInput from '@/hooks/useInput';
import { PostArtistInfoReq } from '@/constants/types/mypage';
import { useState } from 'react';
import { postArtistInfo } from '@/apis/artist';

export interface ArtistRegisterModalProps {
  registerClick: boolean;
  setRegisterClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArtistRegisterModal = ({
  registerClick,
  setRegisterClick,
}: ArtistRegisterModalProps) => {
  const token = api.getToken();
  const [name, onNameChange] = useInput('');
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [info, onInfoChange] = useInput('');

  const onClick = async () => {
    const data: PostArtistInfoReq = {
      categoryList: categoryList,
      comment: info,
    };
    const res = await postArtistInfo(token, data);

    if (res.name == api.getName()) {
      api.setRole('ARTIST');
      window.alert('작가등록 성공');
      setRegisterClick(false);
      location.reload();
    }
  };
  const onCloseClick = () => {
    setRegisterClick(false);
  };
  return (
    <styles.ModalBackground>
      <styles.ModalBox>
        <styles.ClosedButton onClick={onCloseClick}>
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
          <styles.InputContainer value={name} onChange={onNameChange} />
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
          <DesignType
            categoryList={categoryList}
            setCategoryList={setCategoryList}
          />
        </styles.ColContainer>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              본인에 대한 한줄 소개
            </Text>
          </styles.RowContainer>
          <styles.InputContainer value={info} onChange={onInfoChange} />
        </styles.ColContainer>
        <styles.CheckboxContainer>
          <styles.CheckBox type="checkbox" />
          <Text color={COLORS.font.black60} textStyleName="caption">
            작가등록을 위한 개인정보 활용에 동의합니다
          </Text>
        </styles.CheckboxContainer>
        <styles.ButtonContainer>
          <Button fill="purple" onClick={onClick} label="작가등록 신청하기" />
        </styles.ButtonContainer>
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};
export default ArtistRegisterModal;
