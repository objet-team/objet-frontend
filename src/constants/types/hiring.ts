export interface HiringData {
  localDateTime: string;
  company: string;
  coment: string;
}

export interface GetHiringDatList {
  hiringInfoList: HiringData[];
}
