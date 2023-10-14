import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

interface StyledButtonProps {
  theme: 'purple' | 'white';
}

const BgColor: any = { purple: COLORS.main.purple, white: COLORS.bg.white };
const TextColor: any = { purple: COLORS.bg.white, white: COLORS.main.purple };

export const StyledButton = styled.button<StyledButtonProps>`
  width: 257px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => BgColor[props.theme]};
  color: ${(props) => TextColor[props.theme]};
`;
