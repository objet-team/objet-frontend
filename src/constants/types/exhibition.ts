import { TextStyleName } from '../styles';

export type AlignType = 'left' | 'center' | 'right';

interface CommonElement {
  id: number;
  align: AlignType;
}

// 텍스트 요소
export interface TextElement extends CommonElement {
  type: 'text';
  sizeType: TextStyleName;
  content: string;
}

// 이미지 요소
export interface ImageElement extends CommonElement {
  type: 'image';
  width: number;
  height: number;
  url: string;
}

// 비디오 요소
export interface VideoElement extends Omit<ImageElement, 'type'> {
  type: 'video';
}

// 여백 요소
export interface SpaceElement extends CommonElement {
  type: 'space';
}

export type ElementType =
  | TextElement
  | ImageElement
  | VideoElement
  | SpaceElement;
