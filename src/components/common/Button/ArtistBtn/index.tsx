import * as styles from './ArtistBtn.style';

interface ArtistButton {
  label: string;
}
const ArtistBtn = ({ label }: ArtistButton) => (
  <styles.Button>{label}</styles.Button>
);
export default ArtistBtn;
