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
`;

export const TextInput = styled.textarea`
  width: 100%;
  border: 1px solid ${COLORS.font.black20};
  padding: 21px 20px;
  resize: none;

  color: ${COLORS.font.black60};
  font-size: 16px;
  font-weight: 600;

  .title {
    height: 64px;
  }

  .introduction {
    height: 240px;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
