import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const FormContainer = styled.div`
  background-color: ${COLORS.bg.white};
  padding: 40px 80px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
`;

export const TextInput = styled.textarea`
  /*border: none;*/
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

export const EditorWrapper = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid ${COLORS.font.black20};
  display: flex;
  flex-direction: column;

  .text-input {
    border: none;
    background-color: ${COLORS.bg.black05};
  }

  .left-element {
    text-align: left;
  }
  .center-element {
    text-align: center;
  }
  .right-element {
    text-align: right;
  }
`;
