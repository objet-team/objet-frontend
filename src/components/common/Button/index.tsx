import * as styles from './Button.style';

interface ButtonProps {
  label: string;
  fill: 'purple' | 'white';
  onClick: () => void;
  className?: string;
}

const Button = ({ label, fill, onClick, className }: ButtonProps) => (
  <styles.StyledButton theme={fill} onClick={onClick} className={className}>
    {label}
  </styles.StyledButton>
);
export default Button;
