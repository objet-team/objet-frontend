import * as styles from './PurpleFillBtn.style.';

interface PurpleFillButton {
  label: string;
  onClick: () => void;
}
const PurpleFillBtn = ({ onClick, label }: PurpleFillButton) => (
  <styles.Button onClick={onClick}>{label}</styles.Button>
);
export default PurpleFillBtn;
