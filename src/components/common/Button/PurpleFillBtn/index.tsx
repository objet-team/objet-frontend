import * as styles from './PurpleFillBtn.style.';

interface PurpleFillButton {
  label: string;
}
const PurpleFillBtn = ({ label }: PurpleFillButton) => (
  <styles.Button>{label}</styles.Button>
);
export default PurpleFillBtn;
