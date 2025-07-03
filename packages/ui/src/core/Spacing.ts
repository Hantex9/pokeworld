/*
SPACING SCALE
Every margin/padding used by different components 
should use a value defined in the following scale.
*/

export const SpacingScale = [4, 6, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 96] as const;
export type SpacingScale = (typeof SpacingScale)[number];

// Values used in the `<Spacer>` and `<Stack>` components
export const Spacer = [4, 8, 12, 16, 24, 32, 40, 48] as const satisfies readonly SpacingScale[];
export type Spacer = (typeof Spacer)[number];

// Margin values used in the `<ContentWrapper>` component
export const AppMargin = [8, 16, 24, 32, 48] as const satisfies readonly SpacingScale[];
export type AppMargin = (typeof AppMargin)[number];

// Values used in the `<Alert>` component
export const AlertSpacing = [16, 24] as const satisfies readonly SpacingScale[];
export type AlertSpacing = (typeof AlertSpacing)[number];

// Values used in the `<Banner>` component
export type BannerSpacing = Extract<SpacingScale, 12 | 16>;
export const BannerBigSpacing: BannerSpacing = 16;

// Values used in the `<Tag>` component
export type TagSpacing = Extract<SpacingScale, 6 | 8>;
export const TagHSpacing: TagSpacing = 8;
export const TagVSpacing: TagSpacing = 6;

// Values used in the `<Badge>` component
export type BadgeSpacing = Extract<SpacingScale, 4 | 8>;
export const BadgeHSpacing: BadgeSpacing = 8;
export const BadgeVSpacing: BadgeSpacing = 4;

/*
░░░ SPACING CONSTANTS ░░░
*/

const spacingConstantKeys = ['screenEndMargin'] as const;

export type SpacingConstants = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in (typeof spacingConstantKeys)[number]]: SpacingScale;
};

export const Spacing = {
  screenEndMargin: 32,
} as const satisfies SpacingConstants;
