import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../types";

const IconNavQrWallet = ({ size, style, ...props }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style} {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.666 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm.886 4.05A8 8 0 0 1 22.666 20a1 1 0 1 0 2 0 10 10 0 0 0-10.347-9.994c.6.531 1.038 1.24 1.233 2.043ZM2.667 18a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm0 2.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5Zm-2-7.25a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Zm4 .25a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-1.5Zm5-2.25a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2Zm0 2.25a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-1.5Zm3 4.75a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2h-3a1 1 0 1 1 0-2h2.75a.25.25 0 0 0 .25-.25V19a1 1 0 0 1 1-1Zm-3 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default IconNavQrWallet;
