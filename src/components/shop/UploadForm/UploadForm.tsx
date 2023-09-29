import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import ContentEditor from '@/components/common/ContentEditor';
import { uploadFormAtom } from '@/states/GoodsAtom';
import * as styles from './UploadForm.style';

const UploadForm = () => {
  const [inputs, setInputs] = useRecoilState(uploadFormAtom);
  const { name, price, deliveryFee, imageList } = inputs;

  const [containFee, setContainFee] = useState(false);

  // 이미지 업로드
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    //setInputs({ ...inputs, imageList: [...imageList, ''] });
  };

  return (
    <styles.FormContainer>
      <styles.Field>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          굿즈 이름
        </Text>
        <styles.TextInput
          className="name"
          placeholder="판매를 원하는 굿즈의 이름을 입력해주세요."
          value={name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
      </styles.Field>
      <styles.Field>
        <styles.Row>
          <styles.Field className="price-field">
            <Text color={COLORS.main.black} textStyleName="subtitle">
              가격
            </Text>
            <styles.TextInput
              className="price"
              placeholder="굿즈의 판매 가격을 입력해주세요."
              type="number"
              value={price || ''}
              onChange={(e) =>
                setInputs({ ...inputs, price: Number(e.target.value) })
              }
            />
          </styles.Field>
          <styles.Field>
            <Text color={COLORS.main.black} textStyleName="subtitle">
              배송비 포함여부
            </Text>
            <styles.Row className="delivery-field">
              <styles.DeliverButton
                onClick={() => {
                  setContainFee(false);
                  setInputs({ ...inputs, deliveryFee: 0 });
                }}
                className={containFee ? '' : 'active-btn'}
              >
                미포함
              </styles.DeliverButton>
              <styles.DeliverButton
                onClick={() => setContainFee(true)}
                className={containFee ? 'active-btn' : ''}
              >
                포함
              </styles.DeliverButton>
              <styles.TextInput
                className={`deliveryFee ${containFee ? 'active-input' : ''}`}
                disabled={!containFee}
                placeholder="배송비를 입력해주세요."
                type="number"
                value={deliveryFee || ''}
                onChange={(e) =>
                  setInputs({ ...inputs, deliveryFee: Number(e.target.value) })
                }
              />
            </styles.Row>
          </styles.Field>
        </styles.Row>
      </styles.Field>
      <styles.Field>
        <styles.Row className="image-label">
          <Text color={COLORS.main.black} textStyleName="subtitle">
            굿즈 사진 업로드
            <styles.FileInput
              type="file"
              //  accept="image/jpg,impge/png,image/jpeg,image/gif"
              onChange={onFileChange}
            />
          </Text>
          <Text color={COLORS.font.black60} textStyleName="body2B">
            최대 10장까지 가능해요
          </Text>
        </styles.Row>
        <styles.ImgUploadBox>
          <styles.ImgUploadBtn>파일 업로드하기</styles.ImgUploadBtn>
        </styles.ImgUploadBox>
      </styles.Field>
      <styles.Field>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          제품 상세 설명
        </Text>
        <ContentEditor placeholder="오른쪽 기능들을 사용하여 여러분의 굿즈 판매글을 완성해보세요." />
      </styles.Field>
    </styles.FormContainer>
  );
};
export default UploadForm;
