/*
RADIUS SCALE
Every shape used by different components 
should use a value defined in the following scale.
*/

export const RadiusScale = [6, 8, 16, 24] as const;
type RadiusScale = (typeof RadiusScale)[number];

const DefaultRadius: RadiusScale = 8;

/*
Values used in the various components
*/
export const AlertRadius: RadiusScale = DefaultRadius;
export const BannerRadius: RadiusScale = DefaultRadius;
export const TagRadius: RadiusScale = 6;
export const BottomSheetHeaderRadius: RadiusScale = 24;
export const BadgeRadius: RadiusScale = 24;
export const AccordionRadius: RadiusScale = DefaultRadius;
