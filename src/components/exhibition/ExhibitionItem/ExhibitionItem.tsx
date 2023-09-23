import Image from 'next/image';
import * as styles from './ExhibitionItem.style';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { ExhibitionItem as ItemType } from '@/constants/types/exhibition';

interface ExhibitionItemProps extends Omit<ItemType, 'id'> {}

const ExhibitionItem = ({ name, detail, imageList }: ExhibitionItemProps) => (
  <styles.Container>
    <styles.ColContainer>
      <Text color={COLORS.main.white} textStyleName="title">
        {name}
      </Text>
      <Text color={COLORS.main.white} textStyleName="subtitle">
        {detail}
      </Text>
    </styles.ColContainer>
    <styles.ImageContainer>
      {imageList.map((item) => (
        <styles.ImageItem key={item.id} xCor={item.xCor} yCor={item.yCor}>
          <Image
            src={item.imgUrl}
            width={item.width}
            height={item.height}
            alt={item.id.toString()}
          />
        </styles.ImageItem>
      ))}
    </styles.ImageContainer>
  </styles.Container>
);
export default ExhibitionItem;
