import Image from 'next/image';
import React from 'react';
import * as styles from './Content.style';
import { ElementProps } from '@/constants/types/editor';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

export interface ContentProps {
  isEditing?: boolean;
  data: ElementProps[];
}

const Content = ({ isEditing = false, data }: ContentProps) => {
  const renderElement = (element: ElementProps) => {
    switch (element.type) {
      case 'text': {
        const { description, sizeType, align } = element;
        return (
          <styles.TextElement>
            <Text
              color={isEditing ? COLORS.main.black : COLORS.main.white}
              textStyleName={sizeType}
              className={`${align}-element`}
            >
              {description}
            </Text>
          </styles.TextElement>
        );
      }
      case 'image': {
        const { id, url, width, height, align } = element;
        return (
          <styles.ImageElement className={`${align}-element`}>
            <Image
              src={url}
              alt="exhibition-img"
              width={width}
              height={height}
            />
          </styles.ImageElement>
        );
      }
      case 'space': {
        return <styles.SpaceElement />;
      }
      default: {
        return <>NOT FOUND</>;
      }
    }
  };

  return (
    <styles.Wrapper>
      {data.map((element) => (
        <React.Fragment key={element.id}>
          {renderElement(element)}
        </React.Fragment>
      ))}
    </styles.Wrapper>
  );
};
export default Content;
