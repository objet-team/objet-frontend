import { useRecoilValue } from 'recoil';
import { uploadFormAtom } from '@/states/ExhibitionAtom';
import Intro from '@/components/exhibition/Intro';
import BeforeUploadBar from '@/components/exhibition/BeforeUploadBar';

const ExhibitionIntroPage = () => {
  const { title, description } = useRecoilValue(uploadFormAtom);

  return (
    <>
      <BeforeUploadBar />
      <Intro title={title} description={description} />
    </>
  );
};
export default ExhibitionIntroPage;
