export const runtime = 'edge';

import ArtistProfile from '@/components/ArtistProfile';
import NavigationBar from '@/components/common/NavigationBar';
import ArtistNavigationBar from '@/components/common/NavigationBar/ArtistNavigationBar';
import LoginAfterNavigationBar from '@/components/common/NavigationBar/LoginAfterNavigationBar';
import api from '@/services/TokenService';

import {
  GetServerSideProps as GSSP,
  GetServerSidePropsContext as GSSP_CTX,
} from 'next';

export const getServerSideProps: GSSP = async (context: GSSP_CTX) => {
  const artistId = Number(context.query.id as string);
  return { props: { artistId } };
};

const ArtistProfilePage = ({ artistId }: { artistId: number }) => {
  const token = api.getToken();
  const role = api.getRole();

  return (
    <>
      {token == null ? (
        <NavigationBar />
      ) : role === 'USER' ? (
        <LoginAfterNavigationBar />
      ) : (
        <ArtistNavigationBar />
      )}
      <ArtistProfile id={artistId} />
    </>
  );
};
export default ArtistProfilePage;
