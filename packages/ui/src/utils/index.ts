import { ColorValue } from 'react-native';

export const hexToRgba = (hexCode: ColorValue, opacity: number = 1) => {
  const hex = hexCode.toString().replace('#', '');

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};
