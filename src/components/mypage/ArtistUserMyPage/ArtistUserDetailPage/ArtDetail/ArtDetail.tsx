import HeartIcon from '@public/icons/heart.svg';
import Image from 'next/image';
import Text from '@/components/common/Text';
import * as styles from './ArtDetail.style';
import { COLORS } from '@/constants/styles';
import ArtDetailEdit from '../ArtDetailEdit/ArtDetailEdit';
import { GetHiringDataList } from '@/constants/types/hiring';
import CareerOffer from '../CareerOffer/CareerOffer';

interface ArtDetailProps {
  title: string;
  detail: string;
  img: string;
  heartCnt: number;
  careerData: GetHiringDataList;
}

const ArtDetail = ({
  title,
  detail,
  heartCnt,
  img,
  careerData,
}: ArtDetailProps) => (
  <styles.Container>
    <styles.ArtContainer>
      <Image src={img} width={740} height={473} alt="작품" />
      {careerData ? (
        <CareerOffer hiringInfoList={careerData.hiringInfoList} />
      ) : (
        <div>
          <Text color={COLORS.font.black100} textStyleName="title">
            채용제의가 존재하지 않습니다!
          </Text>
        </div>
      )}
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
