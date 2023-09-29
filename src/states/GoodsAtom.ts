import { atom } from 'recoil';
import { ElementProps } from '@/constants/types/editor';

interface UploadFormValue {
  name: string;
  price: number;
  deliveryFee: number;
  imageList: string[];
}

export const uploadFormAtom = atom<UploadFormValue>({
  key: 'goodsUploadFormAtom',
  default: {
    name: '',
    price: 0,
    deliveryFee: 0, // 값이 0인 경우 배송비 미포함
    imageList: [],
  },
});

export const editorContentAtom = atom<ElementProps[]>({
  key: 'goodsEditorContentAtom',
  default: [],
});
