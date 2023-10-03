import axios from 'axios';
import client from './client';

/** 전시 작품 최신순 조회 API  */
export const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const res = await client.post('/api/v1/image/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
