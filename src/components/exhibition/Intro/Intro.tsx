import { useRouter } from 'next/router';
import DoorIcon from '@public/icons/exhibition/Door.svg';
import { COLORS } from '@/constants/styles';
import ArtistInfo, { ArtistInfoProps } from '@/components/common/ArtistInfo';
import Text from '@/components/common/Text';
import * as styles from './Intro.style';

export interface IntroProps {
  title: string;
  description: string;
  artistInfo?: ArtistInfoProps;
}

const Intro = ({ title, description, artistInfo }: IntroProps) => {
  const router = useRouter();
  const nextPath = `/exhibition/${
    router.asPath.includes('preview') ? 'preview' : 'next'
  }/content`;

  return (
    <styles.IntroBackground>
      <Text textStyleName="title" color={COLORS.main.white}>
        {title}
      </Text>
      <Text textStyleName="subtitle" color={COLORS.bg.opa60White}>
        {description}
      </Text>
      <div onClick={() => router.push(nextPath)}>
        <DoorIcon />
      </div>
      <ArtistInfo
        img="https://images.unsplash.com/photo-1694572620159-e69049aeba00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
        part="UXUI디자이너"
        info="나는 유어슈 미녀 로지"
        name="로지"
      />
    </styles.IntroBackground>
  );
};

export default Intro;
