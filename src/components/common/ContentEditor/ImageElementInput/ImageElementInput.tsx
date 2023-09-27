import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { COLORS, TEXT_STYLE_NAME, TextStyleName } from '@/constants/styles';
import { AlignType, ElementType } from '@/constants/types/exhibition';

import * as styles from './ImageElementInput.style';
import Text from '../../Text';

const ImageElementInput = ({
  imageUrl,
  setEditorMode,
  addImageElement,
}: {
  imageUrl: string;
  setEditorMode: React.Dispatch<React.SetStateAction<ElementType | null>>;
  addImageElement: (
    width: number,
    height: number,
    url: string,
    align?: AlignType,
  ) => void;
}) => {
  const [menu, setMenu] = useState<'align' | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<{
    width: number;
    height: number;
    align: AlignType;
  }>({
    width: 300,
    height: 300,
    align: 'left',
  });

  const { width, height, align } = selectedStyle;

  const onClickCreateButton = () => {
    addImageElement(width, height, imageUrl, align);
    setEditorMode(null);
  };

  return (
    <styles.Wrapper>
      <styles.ImageWrapper className={align}>
        <Image src={imageUrl} alt="editor-img" width={width} height={height} />
      </styles.ImageWrapper>

      <styles.ModalWrapper>
        <Text textStyleName="caption" color={COLORS.font.black60}>
          너비
        </Text>
        <styles.SizeInput
          value={width}
          onChange={(e) =>
            setSelectedStyle({
              ...selectedStyle,
              width: Number(e.target.value),
            })
          }
          placeholder="width"
        />
        <Text textStyleName="caption" color={COLORS.font.black60}>
          높이
        </Text>
        <styles.SizeInput
          value={height}
          onChange={(e) =>
            setSelectedStyle({
              ...selectedStyle,
              height: Number(e.target.value),
            })
          }
          placeholder="height"
        />
        <Text textStyleName="caption" color={COLORS.font.black60}>
          정렬
        </Text>
        <styles.DropdownWrapper>
          <styles.SelectedMenu onClick={() => setMenu('align')}>
            {align}
            {/* <ArrowButton color={COLORS.gray484} /> */}
          </styles.SelectedMenu>
          {menu === 'align' && (
            <styles.MenuListWrap>
              {(['left', 'center', 'right'] as AlignType[])
                .filter((a) => a !== align)
                .map((a) => (
                  <styles.DropdownMenu
                    key={a}
                    onClick={() => {
                      setSelectedStyle({ ...selectedStyle, align: a });
                      setMenu(null);
                    }}
                  >
                    {a}
                  </styles.DropdownMenu>
                ))}
            </styles.MenuListWrap>
          )}
        </styles.DropdownWrapper>
        <styles.WriteButton type="button" onClick={onClickCreateButton}>
          추가
        </styles.WriteButton>
      </styles.ModalWrapper>
    </styles.Wrapper>
  );
};

export default ImageElementInput;
