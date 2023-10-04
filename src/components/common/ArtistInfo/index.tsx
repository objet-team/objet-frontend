import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '../Button';
import * as styles from './ArtistInfo.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import CareerModal from '@/components/career/CareerModal';
import api from '@/services/TokenService';
import { useGetFollowAvailability } from '@/hooks/useGetFollowAvailability';
import { followArtist } from '@/apis/follow';

export interface ArtistInfoProps {
  artistId: number;
  productId?: number;
  img: string;
  part?: string[];
  name: string;
  info?: string;
}

const ArtistInfo = ({
  artistId,
  productId,
  img,
  part,
  name,
  info,
}: ArtistInfoProps) => {
  const [follow, setFollow] = useState(false);
  const [careerClick, setCareerClick] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);
  const token = api.getToken();

  const { data: followData } = useGetFollowAvailability(token, artistId);
  console.log(followData);
  if (follow == false) {
    setFollow(true);
  }

  useEffect(() => {
    setPortalElement(document.getElementById('root-modal'));
  }, [careerClick]);

  // 팔로우 버튼 누르면 실행되는 함수
  const onFollowClick = async () => {
    console.log(artistId);
    const response = await followArtist(artistId);
    console.log(response);
    if (response) {
      setFollow(!follow);
    }
  };

  // 채용 제의하기 버튼 누르면 실행되는 함수
  const onCareerClick = () => {
    setCareerClick(!careerClick);
  };

  return (
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
            {part?.join(' ')}
          </Text>
          <Text color={COLORS.main.white} textStyleName="subtitle">
            {name}
          </Text>
          <Text color={COLORS.main.white} textStyleName="body2R">
            {info}
          </Text>
        </styles.ColContainer>
        <styles.RowContainer>
          <Button
            fill={follow ? 'purple' : 'white'}
            label="팔로우"
            onClick={onFollowClick}
            className="follow-btn"
          />
          <Button
            fill="white"
            label="채용 제의하기"
            onClick={onCareerClick}
            className="career-btn"
          />
          {careerClick && portalElement && (
            <CareerModal
              productId={productId as number}
              careerClick={careerClick}
              setCareerClick={setCareerClick}
            />
          )}
        </styles.RowContainer>
      </styles.ColContainer>
    </styles.ArtistInfoContainer>
  );
};

export default ArtistInfo;
