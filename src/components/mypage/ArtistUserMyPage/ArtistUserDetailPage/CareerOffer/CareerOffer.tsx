import ChatIcon from '@public/icons/mypage/Chat.svg';
import CareerLine from '@public/icons/mypage/CareerLine.svg';
import * as styles from './CareerOffer.style';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { GetHiringDataList } from '@/constants/types/hiring';

// export interface CareerInfoProps {
//   localDateTime: string;
//   company: string;
//   comment: string;
//   contact: string;
// }
// export interface CareerInfoList {
//   data: CareerInfoProps[];
// }

const CareerOffer = ({ hiringInfoList }: GetHiringDataList) => {
  const onClick = () => {};
  return (
    <styles.Container>
      <styles.RowContainer>
        <ChatIcon />
        <Text color={COLORS.font.black100} textStyleName="title">
          채용 제의
        </Text>
      </styles.RowContainer>
      {hiringInfoList?.map((item) => (
        <styles.CareerLineContainer key={hiringInfoList.indexOf(item)}>
          <styles.RowContainer>
            <CareerLine />
            <styles.ColContainer>
              <Text color={COLORS.font.black100} textStyleName="subtitle">
                {item.company}
              </Text>
              <Text color={COLORS.font.black60} textStyleName="body2B">
                {item.localDateTime.substring(0, 10)}
              </Text>
            </styles.ColContainer>
          </styles.RowContainer>
        </styles.CareerLineContainer>
      ))}
    </styles.Container>
  );
};
export default CareerOffer;
