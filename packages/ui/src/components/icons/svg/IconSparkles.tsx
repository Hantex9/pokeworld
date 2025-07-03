import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconSparkles = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      d="m15.694 7.56-2.296-.656a6.276 6.276 0 0 1-4.337-4.337L8.405.271a.438.438 0 0 0-.81 0l-.656 2.296a6.276 6.276 0 0 1-4.337 4.337L.306 7.56a.421.421 0 0 0 0 .81l2.296.656a6.276 6.276 0 0 1 4.337 4.338l.656 2.295a.42.42 0 0 0 .81 0l.656-2.295a6.276 6.276 0 0 1 4.338-4.338l2.295-.656a.421.421 0 0 0 0-.81ZM23.809 18.719l-1.435-.41a3.922 3.922 0 0 1-2.71-2.711l-.41-1.435a.273.273 0 0 0-.507 0l-.41 1.435a3.923 3.923 0 0 1-2.711 2.71l-1.435.41a.263.263 0 0 0 0 .507l1.435.41a3.922 3.922 0 0 1 2.71 2.711l.41 1.435a.263.263 0 0 0 .507 0l.41-1.435a3.923 3.923 0 0 1 2.711-2.71l1.435-.41a.263.263 0 0 0 0-.507Z"
    />
  </Svg>
);

export default IconSparkles;
