import { atom } from 'recoil';
import { ElementProps } from '@/constants/types/exhibition';
import { CategoryType } from '@/constants/types/art';

interface UploadFormValue {
  part: CategoryType;
  title: string;
  description: string;
}

export const uploadFormAtom = atom<UploadFormValue>({
  key: 'uploadFormAtom',
  default: {
    part: 'all',
    title: '',
    description: '',
  },
});

export const editorContentAtom = atom<ElementProps[]>({
  key: 'editorContentAtom',
  default: [],
});
