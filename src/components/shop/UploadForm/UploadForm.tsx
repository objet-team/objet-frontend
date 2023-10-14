import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import ContentEditor from '@/components/common/ContentEditor';
import { uploadFormAtom } from '@/states/GoodsAtom';
import * as styles from './UploadForm.style';
import { uploadImage } from '@/apis/image';
import Image from 'next/image';

const UploadForm = () => {
  const [inputs, setInputs] = useRecoilState(uploadFormAtom);
  const { name, price, deliveryCharge, imageList } = inputs;

  const [containCharge, setContainCharge] = useState(false);

  // 이미지 업로드
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length < 1) return;

    const name = files[0].name;
    const url = await uploadImage(files[0]);

    setInputs({
      ...inputs,
      imageList: [...imageList, { order: imageList.length, name, url }],
    });
  };

  // 썸네일 이미지 제거
  const removeImageFile = (order: number) => {
    setInputs({
      ...inputs,
      imageList: imageList.filter((image) => image.order !== order),
    });
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
                  setContainCharge(false);
                  setInputs({ ...inputs, deliveryCharge: 0 });
                }}
                className={containCharge ? '' : 'active-btn'}
              >
                미포함
              </styles.DeliverButton>
              <styles.DeliverButton
                onClick={() => setContainCharge(true)}
                className={containCharge ? 'active-btn' : ''}
              >
                포함
              </styles.DeliverButton>
              <styles.TextInput
                className={`deliveryCharge ${
                  containCharge ? 'active-input' : ''
                }`}
                disabled={!containCharge}
                placeholder="배송비를 입력해주세요."
                type="number"
                value={deliveryCharge || ''}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    deliveryCharge: Number(e.target.value),
                  })
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
          </Text>
          <Text color={COLORS.font.black60} textStyleName="body2B">
            최대 10장까지 가능해요
          </Text>
        </styles.Row>
        <styles.ImgUploadBox>
          <styles.ImgUploadBtn>
            파일 업로드하기
            <styles.FileInput
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={onFileChange}
            />
          </styles.ImgUploadBtn>
          {imageList.map((image) => (
            <styles.ImgFileBox key={image.order}>
              {image.name}
              <Image
                src="/icons/close2.svg"
                alt="remove-file-icon"
                className="remove-icon"
                width="17"
                height="17"
                onClick={() => removeImageFile(image.order)}
              />
            </styles.ImgFileBox>
          ))}
        </styles.ImgUploadBox>
      </styles.Field>
      <styles.Field>
        <Text color={COLORS.main.black} textStyleName="subtitle">
          제품 상세 설명
        </Text>
        <ContentEditor
          domain="shop"
          placeholder="오른쪽 기능들을 사용하여 여러분의 굿즈 판매글을 완성해보세요."
        />
      </styles.Field>
    </styles.FormContainer>
  );
};
export default UploadForm;
