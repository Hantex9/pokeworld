import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconCreditCardFilled = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 17C0 19.8 2.2 22 5 22H19C21.8 22 24 19.8 24 17V10H0V17ZM10.5 15H13.5C14.3 15 15 15.7 15 16.5C15 17.3 14.3 18 13.5 18H10.5C9.7 18 9 17.3 9 16.5C9 15.7 9.7 15 10.5 15ZM5.5 15C6.3 15 7 15.7 7 16.5C7 17.3 6.3 18 5.5 18C4.7 18 4 17.3 4 16.5C4 15.7 4.7 15 5.5 15Z"
      clipRule="evenodd"
    />
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 2H5C2.2 2 0 4.2 0 7V8H24V7C24 4.2 21.8 2 19 2Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconCreditCardFilled;
