import Image from 'next/image';
import { useState, useEffect } from 'react';
import CareerIcon from '@public/icons/exhibition/Career.svg';
import ShareIcon from '@public/icons/exhibition/Share.svg';
import ScrapIcon from '@public/icons/exhibition/Scrap.svg';
import HeartIcon from '@public/icons/exhibition/Heart.svg';
import * as styles from './TopBar.style';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import CareerModal from '../../career/CareerModal';

export interface TopbarProps {
  imgUrl: string;
  title: string;
  artistName: string;
}

const TopBar = ({ imgUrl, title, artistName }: TopbarProps) => {
  const [careerClick, setCareerClick] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('root-modal'));
  }, [careerClick]);

  const onCareerClick = () => {
    setCareerClick(!careerClick);
  };
  const onHeartClick = () => {};
  const onScrapClick = () => {};
  const onShareClick = () => {};
  const onFollowClick = () => {};
  return (
    <styles.TopBarContainer>
      <styles.RowContainer>
        <styles.LeftContainer>
          <styles.RowContainer>
            <Image
              src={imgUrl}
              width={96}
              height={96}
              alt="프로필이미지"
              style={{ display: 'block', borderRadius: '50%' }}
            />
            <styles.ColContainer>
              <Text color={COLORS.main.white} textStyleName="subtitle">
                {title}
              </Text>
              <styles.RowContainer>
                <Text color={COLORS.main.white} textStyleName="body1">
                  {artistName}
                </Text>
                <div onClick={onFollowClick}>
                  <Text color={COLORS.main.white} textStyleName="body1">
                    팔로우
                  </Text>
                </div>
              </styles.RowContainer>
            </styles.ColContainer>
          </styles.RowContainer>
        </styles.LeftContainer>
        <styles.RightContainer>
          <styles.RowContainer>
            {careerClick && portalElement ? (
              <CareerModal
                careerClick={careerClick}
                setCareerClick={setCareerClick}
              />
            ) : (
              <styles.Button onClick={onCareerClick}>
                <CareerIcon />
              </styles.Button>
            )}

            <styles.Button onClick={onHeartClick}>
              <HeartIcon />
            </styles.Button>
            <styles.Button onClick={onScrapClick}>
              <ScrapIcon />
            </styles.Button>
            <styles.Button onClick={onShareClick}>
              <ShareIcon />
            </styles.Button>
          </styles.RowContainer>
        </styles.RightContainer>
      </styles.RowContainer>
    </styles.TopBarContainer>
  );
};
export default TopBar;
