export type CategoryFilterType =
  | 'all'
  | 'graphicDesign'
  | 'motion'
  | 'uiux'
  | 'illustration'
  | 'characterDesign';

export type SortFilterType = 'recommend' | 'new' | 'popular' | 'follower';

export const CategoryFilters: Record<CategoryFilterType, string> = {
  all: '전체',
  graphicDesign: '그래픽디자인',
  motion: '영상&모션그래픽',
  uiux: 'UI&UX',
  illustration: '일러스트레이션',
  characterDesign: '캐릭터디자인',
};

export const SortFilters: Record<SortFilterType, string> = {
  recommend: '추천순',
  new: '최신순',
  popular: '좋아요순',
  follower: '좋아요한 작가만',
};
