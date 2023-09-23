import * as styles from './WhiteFillBtn.style';

interface WhiteFillBtnProps {
  label: string;
  onClick: () => void;
}
const WhiteFillBtn = ({ label, onClick }: WhiteFillBtnProps) => (
  <styles.Button onClick={onClick}>{label}</styles.Button>
);
export default WhiteFillBtn;
