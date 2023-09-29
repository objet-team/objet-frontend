import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const FormContainer = styled.div`
  padding: 40px 80px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

  .delivery-field,
  .image-label {
    gap: 8px;
  }
`;

export const TextInput = styled.input`
  width: 100%;
  height: 64px;
  border: 1px solid ${COLORS.font.black20};
  padding: 21px 20px;

  color: ${COLORS.font.black60};
  font-size: 16px;
  font-weight: 600;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  .deliveryFee {
    width: 200px;
  }

  .price-field {
    width: 100%;
    margin-right: 20px;
  }

  .active-btn {
    background-color: ${COLORS.main.purple};
    color: ${COLORS.main.white};
  }

  .active-input {
    border: 1px solid ${COLORS.main.purple};
  }
`;

export const DeliverButton = styled.button`
  width: 170px;
  height: 64px;
  border-radius: 300px;
  border: 1px solid ${COLORS.font.black20};

  font-size: 16px;
  font-weight: 600;
  color: ${COLORS.main.black};
`;

export const ImgUploadBox = styled.div`
  width: 100%;
  height: 64px;
  border: 1px solid ${COLORS.font.black20};
  padding: 0px 15px;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ImgUploadBtn = styled.button`
  width: 146px;
  height: 35px;
  margin-right: 8px;

  border: 1px solid ${COLORS.font.black20};
  border-radius: 8px;
  background-color: ${COLORS.bg.black05};
  font-size: 14px;
  font-weight: 600;
`;

export const ImgFileBox = styled.button`
  width: 146px;
  height: 35px;
  border: 1px solid ${COLORS.font.black20};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  padding: 7px 16px;
`;

export const FileInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;
