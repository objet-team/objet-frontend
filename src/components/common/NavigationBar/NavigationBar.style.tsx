import styled from '@emotion/styled';
import { COLORS } from '@/constants/styles';

export const Wrapper = styled.div({
  width: '100%',
  height: '56px',
  padding: '0px 80px',
  backgroundColor: COLORS.bg.white,
  boxShadow: '0px 0.5px 0px 0px #E5E5E5',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const NavMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',

  '> svg': {
    marginRight: '20px',
  },
});

export const ProfileMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const ProfileImage = styled.div({
  width: '24px',
  height: '24px',
  borderRadius: '12px',
  backgroundColor: '#48A7FF',
});

export const ProfileClickWrapper = styled.div`
  cursor: pointer;
`;
