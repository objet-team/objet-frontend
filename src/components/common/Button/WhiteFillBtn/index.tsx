import * as styles from './WhiteFillBtn.style';

interface WhiteFillBtnProps {
  label: string;
}
const WhiteFillBtn = ({ label }: WhiteFillBtnProps) => (
  <styles.Button>{label}</styles.Button>
);
export default WhiteFillBtn;
