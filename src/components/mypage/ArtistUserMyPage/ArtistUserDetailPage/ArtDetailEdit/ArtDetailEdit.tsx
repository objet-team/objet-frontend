import { useState } from 'react';
import Text from '@/components/common/Text';
import * as styles from './ArtDetailEdit.style';
import { COLORS } from '@/constants/styles';

const ArtDetailEdit = () => {
  const [editClick, setEditClick] = useState(false);
  const [deleteClick, setDeleteClick] = useState(true);
  const onEditClick = () => {};
  const onDeleteClick = () => {};
  return (
    <styles.Container>
      <div onClick={onEditClick} style={{ cursor: 'pointer' }}>
        <Text color={COLORS.font.black20} textStyleName="body1">
          글 수정하기
        </Text>
      </div>
      <styles.Bar />
      <div onClick={onDeleteClick} style={{ cursor: 'pointer' }}>
        <Text color={COLORS.font.black20} textStyleName="body1">
          글 수정하기
        </Text>
      </div>
    </styles.Container>
  );
};

export default ArtDetailEdit;
