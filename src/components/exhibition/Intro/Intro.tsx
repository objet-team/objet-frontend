import { useRouter } from 'next/router';
import DoorIcon from '@public/icons/exhibition/Door.svg';
import { COLORS } from '@/constants/styles';
import ArtistInfo, { ArtistInfoProps } from '@/components/common/ArtistInfo';
import Text from '@/components/common/Text';
import * as styles from './Intro.style';
import { usePathname } from 'next/navigation';

export interface IntroProps {
  title: string;
  description: string;
  moveToExhibition: () => void;
}

/** 전시회 인트로  */
const Intro = ({ title, description, moveToExhibition }: IntroProps) => {
  const router = useRouter();
  return (
    <styles.IntroWrapper>
      <Text textStyleName="title" color={COLORS.main.white}>
        {title}
      </Text>
      <Text
        textStyleName="subtitle"
        color={COLORS.bg.opa60White}
        className="description"
      >
        {description}
      </Text>
      <DoorIcon onClick={moveToExhibition} />
    </styles.IntroWrapper>
  );
};

export default Intro;
