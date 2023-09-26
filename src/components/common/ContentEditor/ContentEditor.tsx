import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import {
  AlignType,
  ElementProps,
  ElementType,
} from '@/constants/types/exhibition';
import { TextStyleName, COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import * as styles from './ContentEditor.style';
import TextElementInput from './TextElementInput';
import { editorAtom } from '@/states/EditorAtom';

interface ContentEditorProps {
  placeholder?: string;
}

const ContentEditor = ({ placeholder }: ContentEditorProps) => {
  const router = useRouter();
  const [editorMode, setEditorMode] = useState<ElementType | null>(null);
  const [data, setData] = useRecoilState<ElementProps[]>(editorAtom);

  // 텍스트 요소 추가 함수
  const addTextElement = (
    sizeType: TextStyleName,
    content: string,
    align?: AlignType,
  ) => {
    setData([
      ...data,
      {
        type: 'text',
        id: data.length + 1,
        sizeType,
        content,
        align: align || 'left',
      },
    ]);
  };

  // 이미지 요소 추가 함수
  const addImageElement = (
    width: number,
    height: number,
    url: string,
    align?: AlignType,
  ) => {
    setData([
      ...data,
      {
        type: 'image',
        id: data.length + 1,
        width,
        height,
        url,
        align: align || 'left',
      },
    ]);
  };

  // 여백 요소 추가 함수
  const addSpaceElement = () => {
    setData([
      ...data,
      {
        type: 'space',
        id: data.length + 1,
      },
    ]);
  };

  // 텍스트 작성 완료 시 실행되는 함수
  const onCreateTextElement = (
    sizeType: TextStyleName,
    content: string,
    align: AlignType,
  ) => {
    addTextElement(sizeType, content, align);
    setEditorMode(null);
  };

  // 이미지 첨부파일 선택 완료시 실행되는 함수
  // TODO connect server api
  const onSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const file = e.target.files[0];
    const url =
      'https://images.unsplash.com/photo-1695239510467-f1e93d649c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80';
    addImageElement(300, 300, url, 'right');
  };

  const editorMenu: Record<ElementType, any> = {
    text: {
      label: '텍스트 추가',
      icon: '/icons/editor/text.svg',
      onMenuClick: () => setEditorMode('text'),
      onCreateElement: onCreateTextElement,
    },
    image: {
      label: '이미지 추가',
      icon: '/icons/editor/image.svg',
      onMenuClick: () => setEditorMode('image'),
      onCreateElement: onSelectImage,
    },
    video: {
      label: '비디오 추가',
      icon: '/icons/editor/video.svg',
      onMenuClick: () => setEditorMode('video'),
      onCreateElement: () => {},
    },
    space: {
      label: '여백 추가',
      icon: '/icons/editor/space.svg',
      onMenuClick: addSpaceElement,
    },
  };

  // 컨텐츠 요소들을 렌더링하는 함수
  const renderElement = (element: ElementProps) => {
    // align
    switch (element.type) {
      case 'text': {
        const { content, sizeType, align } = element;
        return (
          <styles.TextElement className={`${align}-element`}>
            <Text color={COLORS.main.black} textStyleName={sizeType}>
              {content}
            </Text>
          </styles.TextElement>
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
      case 'space': {
        return <styles.Space />;
      }
      default: {
        return <>wrong element</>;
      }
    }
  };

  return (
    <styles.Wrapper>
      <styles.ContentWrapper>
        {placeholder && data.length < 1 && (
          <Text textStyleName="body1" color={COLORS.font.black60}>
            {placeholder}
          </Text>
        )}

        {data.length > 0 &&
          data.map((element) => (
            <React.Fragment key={element.id}>
              {renderElement(element)}
            </React.Fragment>
          ))}

        {editorMode === 'text' && (
          <TextElementInput
            setEditorMode={setEditorMode}
            onCreateTextElement={onCreateTextElement}
          />
        )}
      </styles.ContentWrapper>
      <styles.SideWrapper>
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
        <styles.ButtonsWrapper>
          <styles.Button className="next-btn" onClick={() => {}}>
            다음
          </styles.Button>
          <styles.Button onClick={() => {}}>임시 저장하기</styles.Button>
        </styles.ButtonsWrapper>
        <styles.PreviewButton
          onClick={() => router.push('/exhibition/preview')}
        >
          <Image
            src="/icons/editor/preview.svg"
            alt="preview-icon"
            width="19"
            height="17"
          />
          <Text textStyleName="caption" color={COLORS.font.black100}>
            화면 미리보기
          </Text>
        </styles.PreviewButton>
      </styles.SideWrapper>
    </styles.Wrapper>
  );
};

export default ContentEditor;
