export interface GetMyPageDataDto {
  name: string;
  profile: string;
  followingArtistNum: 0;
  email: string;
}

export interface GetArtistMyPageDto {
  comment: string;
  name: string;
  categoryList: string[];
  profile: string;
}

export interface PostArtistInfoReq {
  comment: string;
  categoryList: string[];
}
export interface PostArtistInfoRes {
  comment: string;
  name: string;
  categoryList: string[];
  profile: string;
}
