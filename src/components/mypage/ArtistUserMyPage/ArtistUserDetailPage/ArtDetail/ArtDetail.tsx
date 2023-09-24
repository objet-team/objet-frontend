import HeartIcon from '@public/icons/heart.svg';
import Image from 'next/image';
import Text from '@/components/common/Text';
import * as styles from './ArtDetail.style';
import { COLORS } from '@/constants/styles';
import ArtDetailEdit from '../ArtDetailEdit/ArtDetailEdit';
import ArtistCareer, { CareerProps } from '../CareerOffer/CareerOffer';

interface ArtDetailProps {
  title: string;
  detail: string;
  img: string;
  heartCnt: number;
}

const data: CareerProps[] = [
  {
    company: '삼성전자',
    date: '2023.09.12',
  },
  {
    company: '삼성전자',
    date: '2023.09.12',
  },
  {
    company: '삼성전자',
    date: '2023.09.12',
  },
];
const ArtDetail = ({ title, detail, heartCnt, img }: ArtDetailProps) => (
  <styles.Container>
    <styles.ArtContainer>
      <Image src={img} width={740} height={473} alt="작품" />
      <ArtistCareer data={data} />
    </styles.ArtContainer>
    <styles.TextContainer>
      <styles.RowContainer>
        <Text color={COLORS.font.black100} textStyleName="title">
          {title}
        </Text>
        <ArtDetailEdit />
      </styles.RowContainer>
      <styles.HeartContainer>
        <HeartIcon />
        <Text color={COLORS.font.black100} textStyleName="body2B">
          {heartCnt}
        </Text>
      </styles.HeartContainer>
    </styles.TextContainer>
    <Text color={COLORS.font.black100} textStyleName="body2R">
      {detail}
    </Text>
  </styles.Container>
);
export default ArtDetail;
