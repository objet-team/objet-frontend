import Image from 'next/image';
import { useState, useEffect } from 'react';
import WhiteFillBtn from '../Button/WhiteFillBtn';
import PurpleFillBtn from '../Button/PurpleFillBtn';
import * as styles from './ArtistInfo.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import CareerModal from '@/components/career/CareerModal';

export interface ArtistInfoProps {
  img: string;
  part: string[];
  name: string;
  info: string;
}

const ArtistInfo = ({ img, part, name, info }: ArtistInfoProps) => {
  const [follow, setFollow] = useState(false);
  const [careerClick, setCareerClick] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);
  useEffect(() => {
    setPortalElement(document.getElementById('root-modal'));
  }, [careerClick]);
  const onFollowClick = () => {
    setFollow(!follow);
  };
  const onCareerClick = () => {
    setCareerClick(!careerClick);
  };
  return (
    <styles.ArtistInfoContainer>
      <styles.ColContainer gap="20px">
        <styles.ColContainer gap="8px">
          <Image
            src={
              'https://images.unsplash.com/photo-1695239510467-f1e93d649c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80'
            }
            width={96}
            height={96}
            alt="프로필이미지"
            style={{ display: 'block', borderRadius: '50%' }}
          />
          {part.map((item) => (
            <Text color={COLORS.main.white} textStyleName="body2B">
              {item}
            </Text>
          ))}
          <Text color={COLORS.main.white} textStyleName="subtitle">
            {name}
          </Text>
          <Text color={COLORS.main.white} textStyleName="body2R">
            {info}
          </Text>
        </styles.ColContainer>
        <styles.RowContainer>
          {follow ? (
            <PurpleFillBtn label="팔로잉" onClick={onFollowClick} />
          ) : (
            <WhiteFillBtn label="팔로우" onClick={onFollowClick} />
          )}
          {careerClick && portalElement ? (
            <CareerModal
              careerClick={careerClick}
              setCareerClick={setCareerClick}
            />
          ) : (
            <WhiteFillBtn label="채용 제의하기" onClick={onCareerClick} />
          )}
        </styles.RowContainer>
      </styles.ColContainer>
    </styles.ArtistInfoContainer>
  );
};

export default ArtistInfo;
