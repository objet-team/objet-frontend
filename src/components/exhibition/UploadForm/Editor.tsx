import { createElement, useRef, useState } from 'react';
import Image from 'next/image';
import { AlignType, ElementType } from '@/constants/types/exhibition';
import { COLORS, TextStyleName } from '@/constants/styles';
import Text from '@/components/common/Text';
import * as styles from './UploadForm.style';

const menus = [
  'ADD_IMAGE',
  'ADD_TEXT',
  'ADD_VIDEO',
  'GRID_SETTING',
  'ADD_SPACE',
] as const;

const Editor = () => {
  const [editorMode, setEditorMode] = useState<'text' | 'image' | null>(null);
  const [result, setResult] = useState<ElementType[]>([]);

  // 텍스트 요소 추가
  const addTextElement = (
    sizeType: TextStyleName,
    content: string,
    align?: AlignType,
  ) => {
    setResult([
      ...result,
      {
        type: 'text',
        id: result.length + 1,
        sizeType,
        content,
        align: align || 'left',
      },
    ]);
  };

  // 이미지 요소 추가
  const addImageElement = (
    width: number,
    height: number,
    url: string,
    align?: AlignType,
  ) => {
    setResult([
      ...result,
      {
        type: 'image',
        id: result.length + 1,
        width,
        height,
        url,
        align: align || 'left',
      },
    ]);
  };

  const renderElement = (element: ElementType) => {
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

  // 텍스트 추가
  const onblurTextInput = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    // sizeType, align
    addTextElement('title', e.target.value, 'center');
    setEditorMode(null);
  };

  // 이미지 추가
  const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const { files } = e.target;
    const url =
      'https://images.unsplash.com/photo-1695239510467-f1e93d649c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80';
    addImageElement(100, 100, url, 'center');
  };

  return (
    <>
      <styles.EditorWrapper>
        {result.map((element) => (
          <div key={element.id} className={`${element.align}-element`}>
            {renderElement(element)}
          </div>
        ))}
        {editorMode === 'text' && (
          <styles.TextInput
            onBlur={onblurTextInput}
            placeholder="텍스트를 입력해주세요"
            className="text-input"
          />
        )}
      </styles.EditorWrapper>
      <button type="button" onClick={() => setEditorMode('text')}>
        텍스트 추가
      </button>
      <button type="button" onClick={() => setEditorMode('image')}>
        이미지 추가
        <input
          type="file"
          name="images"
          onChange={onSelectImage}
          accept=".png, .jpg,image/*"
        />
      </button>
    </>
  );
};

export default Editor;
