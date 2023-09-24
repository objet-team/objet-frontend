import { useState } from 'react';
import {
  AlignType,
  ElementProps,
  ElementType,
} from '@/constants/types/exhibition';
import { TextStyleName } from '@/constants/styles';

export const useContentEditor = () => {
  const [editorMode, setEditorMode] = useState<ElementType | null>(null);
  const [data, setData] = useState<ElementProps[]>([]);

  // 텍스트 요소 추가
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

  // 이미지 요소 추가
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

  // 텍스트 추가
  const onblurTextInput = (e: React.FocusEvent<HTMLInputElement>) => {
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

  const editorMenu: Record<ElementType, any> = {
    text: {
      label: '텍스트 추가',
      icon: '/icons/editor/text.svg',
      onMenuClick: () => setEditorMode('text'),
      onCreateElement: onblurTextInput,
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
      onMenuClick: () => setEditorMode('space'),
      onCreateElement: onSelectImage,
    },
  };

  return { editorMode, editorMenu, data };
};
