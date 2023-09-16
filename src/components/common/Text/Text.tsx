import React from 'react';
import { TextStyleName } from '@/constants/styles';
import * as styles from './Text.style';

export interface TextProps {
  children: React.ReactNode;
  /** 텍스트 색  */
  color: string;
  /** 텍스트 스타일 종류 */
  textStyleName: TextStyleName;
  /** 컴포넌트로 생성할 요소의 클래스명 */
  className?: string;
}

/**
 * 주어진 인자를 바탕으로 스타일을 적용한 텍스트 컴포넌트
 */
const Text = ({ children, color, textStyleName, className }: TextProps) => (
  <styles.StyledText
    color={color}
    textStyleName={textStyleName}
    className={className}
  >
    {children}
  </styles.StyledText>
);

export default Text;
