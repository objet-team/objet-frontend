import NavigationBar from '@/components/common/NavigationBar';
import UploadForm from '@/components/shop/UploadForm';
import { useRouter } from 'next/router';

const GoodsUploadPage = () => {
  const router = useRouter();

  return (
    <>
      <NavigationBar />
      <UploadForm />
    </>
  );
};
export default GoodsUploadPage;
