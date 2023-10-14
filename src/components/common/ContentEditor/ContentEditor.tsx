import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { AlignType, ElementProps, ElementType } from '@/constants/types/editor';
import { TextStyleName, COLORS } from '@/constants/styles';
import Text from '@/components/common/Text';
import TextElementInput from './TextElementInput';
import { editorContentAtom } from '@/states/ExhibitionAtom';
import Content from '@/components/exhibition/Content';
import * as styles from './ContentEditor.style';
import ImageElementInput from './ImageElementInput';
import { uploadImage } from '@/apis/image';

interface ContentEditorProps {
  domain: 'exhibition' | 'shop';
  placeholder?: string;
}

const ContentEditor = ({ domain, placeholder }: ContentEditorProps) => {
  const router = useRouter();

  const [editorMode, setEditorMode] = useState<ElementType | null>(null);
  const [data, setData] = useRecoilState<ElementProps[]>(editorContentAtom);

  const [imageUrl, setImageUrl] = useState('');

  // 텍스트 요소 추가 함수
  const addTextElement = (
    sizeType: TextStyleName,
    description: string,
    align?: AlignType,
  ) => {
    setData([
      ...data,
      {
        type: 'text',
        order: data.length + 1,
        sizeType,
        description,
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
        order: data.length + 1,
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
        order: data.length + 1,
      },
    ]);
  };

  // 텍스트 작성 완료 시 실행되는 함수
  const onCreateTextElement = (
    sizeType: TextStyleName,
    description: string,
    align: AlignType,
  ) => {
    addTextElement(sizeType, description, align);
    setEditorMode(null);
  };

  // 이미지 첨부파일 선택 완료시 실행되는 함수
  const onSelectImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length < 1) return;

    const url = await uploadImage(files[0]);
    setImageUrl(url);
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

  return (
    <styles.Wrapper>
      <styles.ContentWrapper>
        {placeholder && !data.length && (
          <Text textStyleName="body1" color={COLORS.font.black60}>
            {placeholder}
          </Text>
        )}

        {data.length > 0 && <Content isEditing data={data} />}

        {editorMode === 'text' && (
          <TextElementInput
            setEditorMode={setEditorMode}
            addTextElement={addTextElement}
          />
        )}

        {editorMode === 'image' && (
          <ImageElementInput
            imageUrl={imageUrl}
            setEditorMode={setEditorMode}
            addImageElement={addImageElement}
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
          <styles.Button
            className="next-btn"
            onClick={() => router.push(`/${domain}/preview?type=upload`)}
          >
            다음
          </styles.Button>
          <styles.Button onClick={() => {}}>임시 저장하기</styles.Button>
        </styles.ButtonsWrapper>
        <styles.PreviewButton onClick={() => router.push(`/${domain}/preview`)}>
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
