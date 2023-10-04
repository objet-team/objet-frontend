import CloseButton from '@public/icons/login/Login_close.svg';
import Image from 'next/image';
import ImageEdit from '@public/icons/mypage/ProfileImgEdit.svg';
import { useRef, useState } from 'react';
import { COLORS } from '@/constants/styles';
import Text from '../../../common/Text';
import * as styles from './ProfileEditModal.style';
import Button from '../../../common/Button';
import useInput from '@/hooks/useInput';
import useDetectClose from '@/hooks/useDetectClose';
import { CategoryLabels, CategoryType } from '@/constants/types/art';
import { DropDown } from './DropDown/DropDown';

export interface ArtistProfileEditModalProps {
  editClick: boolean;
  setEditClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const ArtistProfileEditModal = ({
  editClick,
  setEditClick,
}: ArtistProfileEditModalProps) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const [designTypeIdentify, setDesignTypeIdentify] = useState('');
  const [name, onChangeName] = useInput('');
  const [description, onChangeDescription] = useInput('');
  const onClick = () => {
    setEditClick(!editClick);
  };
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  const onDropDownClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <styles.ModalBackground>
      <styles.ModalBox>
        <styles.ClosedButton onClick={onClick}>
          <CloseButton />
        </styles.ClosedButton>
        <styles.TopContainer>
          <styles.ImageContainer>
            <Image
              src="https://images.unsplash.com/photo-1692055651074-879fd6ab7909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3165&q=80"
              width={96}
              height={96}
              alt="프로필이미지"
              style={{
                display: 'block',
                borderRadius: '50%',
              }}
            />
            <styles.EditContainer>
              <ImageEdit />
            </styles.EditContainer>
          </styles.ImageContainer>
        </styles.TopContainer>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              이름
            </Text>
            <Text color={COLORS.main.purple} textStyleName="body1">
              *
            </Text>
          </styles.RowContainer>
          <styles.InputContainer
            placeholder="기존이름"
            value={name}
            onChange={onChangeName}
          />
        </styles.ColContainer>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              디자인 분야
            </Text>
            <Text color={COLORS.main.purple} textStyleName="body1">
              *
            </Text>
          </styles.RowContainer>
          <div>
            <div ref={dropDownRef}>
              <styles.DropDownInput
                onClick={onDropDownClick}
                type="button"
                value={designTypeIdentify}
                placeholder="˯"
              />
              {isOpen && (
                <ul>
                  {(Object.keys(CategoryLabels) as CategoryType[]).map(
                    (value) => (
                      <DropDown
                        key={value}
                        value={value}
                        setIsOpen={setIsOpen}
                        setDesignTypeIdentify={setDesignTypeIdentify}
                        isOpen={isOpen}
                      />
                    ),
                  )}
                </ul>
              )}
            </div>
          </div>
        </styles.ColContainer>
        <styles.ColContainer>
          <styles.RowContainer>
            <Text color={COLORS.main.black} textStyleName="body1">
              본인에 대한 한줄 소개
            </Text>
          </styles.RowContainer>
          <styles.InputContainer
            placeholder="수정중일 때"
            value={description}
            onChange={onChangeDescription}
          />
        </styles.ColContainer>
        <styles.CheckboxContainer>
          <styles.CheckBox type="checkbox" />
          <Text color={COLORS.font.black60} textStyleName="caption">
            작가등록을 위한 개인정보 활용에 동의합니다
          </Text>
        </styles.CheckboxContainer>
        <styles.ButtonContainer>
          <Button onClick={onClick} label="작가등록 신청하기" />
        </styles.ButtonContainer>
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};
export default ArtistProfileEditModal;
