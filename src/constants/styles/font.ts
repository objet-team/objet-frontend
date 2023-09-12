export const TEXT_STYLE_NAME = {
  title: 'title',
  subtitle: 'subtitle',
  body1: 'body1',
  body2B: 'body2B',
  body2R: 'body2R',
  caption: 'caption',
} as const;

export type TextStyleNameType =
  (typeof TEXT_STYLE_NAME)[keyof typeof TEXT_STYLE_NAME];

interface TextStyleType {
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
  letterSpacing?: string;
}

export const TEXT_STYLES: Record<TextStyleNameType, TextStyleType> = {
  [TEXT_STYLE_NAME.title]: {
    fontSize: 36,
    fontWeight: 600,
    lineHeight: '46.8px',
    letterSpacing: '-0.54px',
  },
  [TEXT_STYLE_NAME.subtitle]: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '28.6px',
    letterSpacing: '-0.33px',
  },

  [TEXT_STYLE_NAME.body1]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: `20.8px`,
  },
  [TEXT_STYLE_NAME.body2B]: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: `21px`,
  },
  [TEXT_STYLE_NAME.body2R]: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: `21px`,
  },
  [TEXT_STYLE_NAME.caption]: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: `18px`,
  },
};
