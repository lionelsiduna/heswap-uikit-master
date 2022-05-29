import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image id="image0" width="32" height="32" x="0" y="0" href="data:image/png;base64,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" />
    </Svg>
  );
};

export default Icon;
