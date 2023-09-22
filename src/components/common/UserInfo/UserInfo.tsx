import Image from 'next/image';
import { useState } from 'react';
import * as styles from './UserInfo.style';
import Text from '../Text';
import { COLORS } from '@/constants/styles';
import WhiteFillBtn from '../Button/WhiteFillBtn';

interface UserInfoProps {
  img: string;
  email: string;
  name: string;
  followCount: number;
}

const UserInfo = ({ img, email, name, followCount }: UserInfoProps) => {
  const [editName, setEditName] = useState(false);
  const onClick = () => {};
  return (
    <styles.UserInfoContainer>
      <Image
        src={img}
        width={96}
        height={96}
        alt="프로필이미지"
        style={{ display: 'block', borderRadius: '50%' }}
      />
      <Text color={COLORS.main.white} textStyleName="body2R">
        {email}
      </Text>
      <Text color={COLORS.main.white} textStyleName="subtitle">
        {name}
      </Text>
      <styles.FollowContainer>
        <Text color={COLORS.main.white} textStyleName="body2R">
          팔로우한 작가
        </Text>
        <Text color={COLORS.main.white} textStyleName="body2B">
          {followCount}
        </Text>
      </styles.FollowContainer>
      <div onClick={onClick}>
        <WhiteFillBtn label="프로필 수정하기" />
      </div>
    </styles.UserInfoContainer>
  );
};
export default UserInfo;