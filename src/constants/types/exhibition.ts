import { TextStyleName } from '../styles';

export type ElementType = 'text' | 'image' | 'video' | 'space';
export type AlignType = 'left' | 'center' | 'right';

interface CommonElementProps {
  id: number;
  align: AlignType;
}

// 텍스트 요소
export interface TextElementProps extends CommonElementProps {
  type: 'text';
  sizeType: TextStyleName;
  content: string;
}

// 이미지 요소
export interface ImageElementProps extends CommonElementProps {
  type: 'image';
  width: number;
  height: number;
  url: string;
}

// 비디오 요소
export interface VideoElementProps extends Omit<ImageElementProps, 'type'> {
  type: 'video';
}

// 여백 요소
export interface SpaceElementProps extends Omit<CommonElementProps, 'align'> {
  type: 'space';
}

export type ElementProps =
  | TextElementProps
  | ImageElementProps
  | VideoElementProps
  | SpaceElementProps;
