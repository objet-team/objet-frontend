import Content from '@/components/exhibition/Content';
import Image from 'next/image';
import { ShopItemDetailData } from '@/pages/shop/goods';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { useState } from 'react';
import * as styles from './GoodsDetail.style';

const formatPrice = (value: number) =>
  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const GoodsDetail = ({ data }: { data: ShopItemDetailData }) => {
  const [count, setCount] = useState(1);
  const [menu, setMenu] = useState<'content' | 'refund'>('content');

  const {
    imageList,
    artistName,
    artistProfileImage,
    name,
    price,
    deliveryPrice,
    contentData,
  } = data;
  return (
    <styles.Wrapper>
      <styles.Header>
        <styles.Section>
          <Image
            src={imageList[0]}
            width="550"
            height="550"
            alt="represent-img"
            className="represent-img"
          />
          <styles.ImagesWrapper>
            {imageList.slice(1).map((img: string) => (
              <Image src={img} width="76" height="76" alt="img" />
            ))}
          </styles.ImagesWrapper>
        </styles.Section>

        <styles.Section>
          <styles.Top>
            <styles.Row className="artist-profile">
              <Image
                src={artistProfileImage}
                width="28"
                height="28"
                alt="profile-img"
                className="profile-img"
              />
              <Text color={COLORS.font.black100} textStyleName="body1">
                {artistName}
              </Text>
            </styles.Row>

            <Text
              color={COLORS.font.black100}
              textStyleName="title"
              className="name"
            >
              {name}
            </Text>
            <Text color={COLORS.font.black100} textStyleName="title">
              {formatPrice(price)}원
            </Text>
          </styles.Top>
          <styles.Bottom>
            <Text color={COLORS.font.black100} textStyleName="subtitle">
              배송비 : {formatPrice(deliveryPrice)}원
            </Text>
            <Text
              color={COLORS.font.black100}
              textStyleName="subtitle"
              className="deliver-caption"
            >
              30,000원 이상 구매시 배송비 무료
            </Text>
            <styles.Row>
              <Text color={COLORS.font.black100} textStyleName="subtitle">
                수량
              </Text>
              <styles.CountButton>
                <Image
                  src="/shop/minus.svg"
                  alt="minus"
                  width="14"
                  height="14"
                  onClick={() => {
                    if (count > 1) setCount((prev) => prev - 1);
                  }}
                />
                <Text color={COLORS.font.black100} textStyleName="subtitle">
                  {count}
                </Text>
                <Image
                  src="/shop/plus.svg"
                  alt="plus"
                  width="14"
                  height="14"
                  onClick={() => setCount((prev) => prev + 1)}
                />
              </styles.CountButton>
            </styles.Row>
            <styles.Row>
              <Text color={COLORS.font.black100} textStyleName="subtitle">
                총 상품금액
              </Text>
              <Text color={COLORS.main.purple} textStyleName="title">
                {formatPrice(count * price)}원
              </Text>
            </styles.Row>
            <styles.Row>
              <styles.FinalButton>장바구니에 담기</styles.FinalButton>
              <styles.FinalButton className="purchase-btn">
                구매하기
              </styles.FinalButton>
            </styles.Row>
          </styles.Bottom>
        </styles.Section>
      </styles.Header>
      <styles.ContentWrapper>
        <styles.MenuWrapper>
          <styles.Menu
            onClick={() => setMenu('content')}
            className={menu === 'content' ? 'active-btn' : ''}
          >
            상품 정보
          </styles.Menu>
          <styles.Menu
            onClick={() => setMenu('refund')}
            className={menu === 'content' ? '' : 'active-btn'}
          >
            환불 및 교환 정보
          </styles.Menu>
          <styles.Line />
        </styles.MenuWrapper>
        {menu === 'content' && <Content data={contentData} />}
      </styles.ContentWrapper>
    </styles.Wrapper>
  );
};

export default GoodsDetail;
