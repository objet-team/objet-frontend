import ChatIcon from '@public/icons/mypage/Chat.svg';
import CareerLine from '@public/icons/mypage/CareerLine.svg';
import * as styles from './CareerOffer.style';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

export interface CareerProps {
  company: string;
  date: string;
}
export interface CareerListProps {
  data: CareerProps[];
}

const CareerOffer = ({ data }: CareerListProps) => {
  const onClick = () => {};
  return (
    <styles.Container>
      <styles.RowContainer>
        <ChatIcon />
        <Text color={COLORS.font.black100} textStyleName="title">
          채용 제의
        </Text>
      </styles.RowContainer>
      {data.map((item) => (
        <styles.CareerLineContainer key={data.indexOf(item)}>
          <styles.RowContainer>
            <CareerLine />
            <styles.ColContainer>
              <Text color={COLORS.font.black100} textStyleName="subtitle">
                {item.company}
              </Text>
              <Text color={COLORS.font.black60} textStyleName="body2B">
                {item.company}
              </Text>
            </styles.ColContainer>
          </styles.RowContainer>
        </styles.CareerLineContainer>
      ))}
    </styles.Container>
  );
};
export default CareerOffer;
