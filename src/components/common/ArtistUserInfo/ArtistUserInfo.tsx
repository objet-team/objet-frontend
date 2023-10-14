import Image from 'next/image';
import { useState, useEffect } from 'react';
import Button from '../Button';
import * as styles from './ArtistUserInfo.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import ArtistProfileEditModal from '@/components/mypage/ArtistUserMyPage/ProfileEdit/ProfileEditModal';

export interface ArtistUserInfoProps {
  img: string;
  part: string[];
  name: string;
  info: string;
  exhibitionCount: number;
  follower: number;
  following: number;
}

const ArtistUserInfo = ({
  img,
  part,
  name,
  info,
  exhibitionCount,
  follower,
  following,
}: ArtistUserInfoProps) => {
  const [editClick, setEditClick] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);
  useEffect(() => {
    setPortalElement(document.getElementById('root-modal'));
  }, [editClick]);

  const onEditClick = () => {
    setEditClick(!editClick);
  };
  return (
    <styles.ArtistInfoContainer>
      <styles.ColContainer gap="12px">
        <styles.ColContainer gap="8px">
          <Text color={COLORS.main.white} textStyleName="subtitle">
            {name}
          </Text>
          <Image
            src={img}
            width={96}
            height={96}
            alt="프로필이미지"
            style={{ display: 'block', borderRadius: '50%' }}
          />
          <styles.RowContainer>
            {part.map((item) => (
              <Text color={COLORS.main.white} textStyleName="body2R">
                {item}
              </Text>
            ))}
          </styles.RowContainer>

          <Text color={COLORS.main.white} textStyleName="body2R">
            {info}
          </Text>
        </styles.ColContainer>
        <styles.TextContainer gap="6px">
          <styles.TextContainer gap="4px">
            <Text color={COLORS.main.white} textStyleName="body2R">
              전시
            </Text>
            <Text color={COLORS.main.white} textStyleName="body2B">
              {exhibitionCount}
            </Text>
          </styles.TextContainer>

          <styles.TextContainer gap="4px">
            <Text color={COLORS.main.white} textStyleName="body2R">
              팔로워
            </Text>
            <Text color={COLORS.main.white} textStyleName="body2B">
              {follower}
            </Text>
          </styles.TextContainer>
          <styles.TextContainer gap="4px">
            <Text color={COLORS.main.white} textStyleName="body2R">
              팔로잉
            </Text>
            <Text color={COLORS.main.white} textStyleName="body2B">
              {following}
            </Text>
          </styles.TextContainer>
        </styles.TextContainer>
        {portalElement && editClick ? (
          <ArtistProfileEditModal
            editClick={editClick}
            setEditClick={setEditClick}
          />
        ) : (
          <Button fill="white" label="프로필 수정하기" onClick={onEditClick} />
        )}
      </styles.ColContainer>
    </styles.ArtistInfoContainer>
  );
};

export default ArtistUserInfo;
