import { COLORS } from '@/constants/styles';
import ArtistInfo, { ArtistInfoProps } from '../common/ArtistInfo';
import Text from '../common/Text';
import * as styles from './Exhibition.style';
import DoorIcon from '@/assets/icons/exhibition/Door.svg';

export interface IntroProps {
  title: string;
  detail: string;
  artistInfo: ArtistInfoProps;
}

const Intro = () => (
  <styles.IntroBackground>
    <Text textStyleName="title" color={COLORS.main.white}>
      캐시로지
    </Text>
    <Text textStyleName="subtitle" color={COLORS.bg.opa60White}>
      작품설명쓰
    </Text>
    <DoorIcon />
    <ArtistInfo
      img="https://images.unsplash.com/photo-1694572620159-e69049aeba00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
      part="UXUI디자이너"
      info="나는 유어슈 미녀 로지"
      name="로지"
    />
  </styles.IntroBackground>
);
export default Intro;
