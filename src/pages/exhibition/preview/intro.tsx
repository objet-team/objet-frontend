import { useRecoilValue } from 'recoil';
import { uploadFormAtom } from '@/states/ExhibitionAtom';
import Intro from '@/components/exhibition/Intro';
import PreviewBar from '@/components/exhibition/PreviewBar';

const ExhibitionIntroPage = () => {
  const { title, description } = useRecoilValue(uploadFormAtom);

  return (
    <>
      <PreviewBar />
      <Intro title={title} description={description} />
    </>
  );
};
export default ExhibitionIntroPage;
