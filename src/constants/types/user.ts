export interface GetUserDto {
  accessToken: string;
  role: string;
  userId: number;
  userName: string;
}

export interface PostHiringReq {
  company: string;
  comment: string;
  contact: string;
}
export interface PostHiringRes {
  localDateTime: string;
  company: string;
  comment: string;
  contact: string;
}
