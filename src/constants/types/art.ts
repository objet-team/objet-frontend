// 프론트에서 사용하는 카테고리 타입
export type CategoryType =
  //| 'all'
  | 'graphicDesign'
  | 'motion'
  | 'uiux'
  | 'illustration'
  | 'characterDesign'
  | 'photography'
  | 'crafts'
  | 'ceramicAndGlass';

// 서버에 전달할 카테고리 Enum
export type CategoryEnum =
  | 'UX_UI'
  | 'GRAPHIC_DESIGN'
  | 'VIDEO_AND_MOTION_GRAPHICS'
  | 'ILLUSTRATION'
  | 'CHARACTER_DESIGN'
  | 'PHOTOGRAPHY'
  | 'CRAFTS'
  | 'CERAMICS_AND_GLASS';

// 프론트 type -> 서버 Enum
export const CategoryEnumConverter: Record<CategoryType, CategoryEnum> = {
  graphicDesign: 'GRAPHIC_DESIGN',
  motion: 'VIDEO_AND_MOTION_GRAPHICS',
  uiux: 'UX_UI',
  illustration: 'ILLUSTRATION',
  characterDesign: 'CHARACTER_DESIGN',
  photography: 'PHOTOGRAPHY',
  crafts: 'CRAFTS',
  ceramicAndGlass: 'CERAMICS_AND_GLASS',
};

export const CategoryLabels: Record<CategoryType, string> = {
  //all: '전체',
  graphicDesign: '그래픽디자인',
  motion: '영상&모션그래픽',
  uiux: 'UI&UX',
  illustration: '일러스트레이션',
  characterDesign: '캐릭터디자인',
  photography: '사진',
  crafts: '공예',
  ceramicAndGlass: '도예',
};

export type SortingType = 'recommend' | 'new' | 'popular' | 'follower';

export const SortingLabels: Record<SortingType, string> = {
  recommend: '추천순',
  new: '최신순',
  popular: '좋아요순',
  follower: '좋아요한 작가만',
};
