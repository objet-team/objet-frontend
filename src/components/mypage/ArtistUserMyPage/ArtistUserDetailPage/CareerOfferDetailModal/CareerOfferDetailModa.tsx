import { useState } from 'react';
import * as styles from './CareerOfferDetailModal.style';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

export interface CareerModalProps {
  date: string;
  company: string;
  comment: string;
  contact: string;
}
const CareerOfferDetailModal = ({
  date,
  company,
  comment,
  contact,
}: CareerModalProps) => {
  const [click, setClick] = useState(false);
  return (
    <styles.ModalBackground>
      <styles.ModalBox>
        <Text color={COLORS.font.black100} textStyleName="subtitle">
          {date}
        </Text>
        <Text color={COLORS.font.black100} textStyleName="subtitle">
          에
        </Text>
        <Text color={COLORS.main.purple} textStyleName="subtitle">
          {company}
        </Text>
        <Text color={COLORS.font.black100} textStyleName="subtitle">
          로 부터온 제의에요
        </Text>
      </styles.ModalBox>
    </styles.ModalBackground>
  );
};
