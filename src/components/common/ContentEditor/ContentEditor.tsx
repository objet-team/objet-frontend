import Image from 'next/image';
import { ElementType, ElementProps } from '@/constants/types/exhibition';
import { COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import * as styles from './ContentEditor.style';
import { useContentEditor } from './useContentEditor';

interface ContentEditorProps {
  placeholder?: string;
}

const ContentEditor = ({ placeholder }: ContentEditorProps) => {
  const { editorMode, editorMenu, data } = useContentEditor();

  const renderElement = (element: ElementProps) => {
    // align
    switch (element.type) {
      case 'text': {
        const { content, sizeType } = element;
        return (
          <Text color={COLORS.main.black} textStyleName={sizeType}>
            {content}
          </Text>
        );
      }
      case 'image': {
        const { id, url, width, height } = element;
        return (
          <Image
            src={url}
            alt={`exhibition-img-${id}`}
            width={width}
            height={height}
          />
        );
      }
      default: {
        return <>wrong element</>;
      }
    }
  };

  return (
    <styles.Wrapper>
      <styles.ContentWrapper>
        {placeholder && data.length < 0 && (
          <Text textStyleName="body1" color={COLORS.font.black60}>
            {placeholder}
          </Text>
        )}

        {data.map((element) => (
          <div key={element.id} className={`${element.align}-element`}>
            {renderElement(element)}
          </div>
        ))}

        {editorMode === 'text' && (
          <styles.TextInput
            onBlur={editorMenu.text.onCreateElement}
            placeholder="텍스트를 입력해주세요"
            className="text-input"
          />
        )}
      </styles.ContentWrapper>

      <styles.MenusWrapper>
        {(Object.keys(editorMenu) as ElementType[]).map((type) => (
          <styles.Menu
            type="button"
            key={type}
            onClick={editorMenu[type].onMenuClick}
          >
            <Image
              src={editorMenu[type].icon}
              alt="menu-icon"
              width={30}
              height={30}
            />
            {(type === 'image' || type === 'video') && (
              <styles.FileInput
                type="file"
                onChange={editorMenu[type].onCreateElement}
              />
            )}
            {editorMenu[type].label}
          </styles.Menu>
        ))}
      </styles.MenusWrapper>

      <styles.ButtonsWrapper />
    </styles.Wrapper>
  );
};

export default ContentEditor;
