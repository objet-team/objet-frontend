import Image from 'next/image';
import ArtistBtn from '../Button/WhiteFillBtn';
import * as styles from './ArtistInfo.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';

export interface ArtistInfoProps {
  img: string;
  part: string;
  name: string;
  info: string;
}

const ArtistInfo = ({ img, part, name, info }: ArtistInfoProps) => (
  <styles.ArtistInfoContainer>
    <styles.ColContainer gap="20px">
      <styles.ColContainer gap="8px">
        <Image
          src={img}
          width={96}
          height={96}
          alt="프로필이미지"
          style={{ display: 'block', borderRadius: '50%' }}
        />
        <Text color={COLORS.main.white} textStyleName="body2B">
          {part}
        </Text>
        <Text color={COLORS.main.white} textStyleName="subtitle">
          {name}
        </Text>
        <Text color={COLORS.main.white} textStyleName="body2R">
          {info}
        </Text>
      </styles.ColContainer>
      <styles.RowContainer>
        <ArtistBtn label="팔로우" />
        <ArtistBtn label="채용 제의하기" />
      </styles.RowContainer>
    </styles.ColContainer>
  </styles.ArtistInfoContainer>
);

export default ArtistInfo;
