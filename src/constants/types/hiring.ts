export interface HiringData {
  localDateTime: string;
  company: string;
  coment: string;
}

export interface GetHiringDataList {
  hiringInfoList: HiringData[];
}
