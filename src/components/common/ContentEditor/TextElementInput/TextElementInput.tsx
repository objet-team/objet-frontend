import { useState } from 'react';
import { TEXT_STYLE_NAME, TextStyleName } from '@/constants/styles';
import { AlignType, ElementType } from '@/constants/types/editor';

import * as styles from './TextElementInput.style';

const TextElementInput = ({
  setEditorMode,
  addTextElement,
}: {
  setEditorMode: React.Dispatch<React.SetStateAction<ElementType | null>>;
  addTextElement: (
    sizeType: TextStyleName,
    content: string,
    align: AlignType,
  ) => void;
}) => {
  const [value, setValue] = useState('');
  const [menu, setMenu] = useState<'text' | 'align' | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<styles.StylesType>({
    sizeType: 'title',
    align: 'left',
  });

  const { sizeType, align } = selectedStyle;

  const onClickCreateButton = () => {
    if (value.length > 0) {
      addTextElement(sizeType, value, align);
    }
    setEditorMode(null);
    setSelectedStyle({ sizeType: 'title', align: 'left' });
  };

  return (
    <styles.Wrapper>
      <styles.TextInput
        value={value}
        sizeType={sizeType}
        align={align}
        onChange={(e) => setValue(e.target.value)}
        placeholder="텍스트를 입력해주세요"
        className="text-input"
      />

      <styles.ModalWrapper>
        <styles.DropdownWrapper>
          <styles.SelectedMenu onClick={() => setMenu('text')}>
            {sizeType}
            {/* <ArrowButton color={COLORS.gray484} /> */}
          </styles.SelectedMenu>
          {menu === 'text' && (
            <styles.MenuListWrap>
              {(Object.keys(TEXT_STYLE_NAME) as TextStyleName[])
                .filter((t) => t !== sizeType)
                .map((t) => (
                  <styles.DropdownMenu
                    key={t}
                    onClick={() => {
                      setSelectedStyle({ ...selectedStyle, sizeType: t });
                      setMenu(null);
                    }}
                  >
                    {t}
                  </styles.DropdownMenu>
                ))}
            </styles.MenuListWrap>
          )}
        </styles.DropdownWrapper>
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
          작성 완료
        </styles.WriteButton>
      </styles.ModalWrapper>
    </styles.Wrapper>
  );
};

export default TextElementInput;
