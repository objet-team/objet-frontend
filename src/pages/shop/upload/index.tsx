import NavigationBar from '@/components/common/NavigationBar';
import UploadForm from '@/components/exhibition/UploadForm';
import { useRouter } from 'next/router';

const ShopUploadPage = () => {
  const router = useRouter();

  return (
    <>
      <NavigationBar />
      <div>실물 굿즈</div>
      <div>NFT 굿즈</div>
    </>
  );
};
export default ShopUploadPage;
