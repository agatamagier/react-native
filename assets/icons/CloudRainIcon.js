import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const CloudRainIcon = ({ size = 24, color = "black", ...rest }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...rest}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 14.752c-.63-.875-1-1.946-1-3.103C3 9.2 4.8 6.938 7.5 6.5 8.347 4.486 10.351 3 12.69 3c2.994 0 5.442 2.323 5.61 5.25 1.59.695 2.7 2.4 2.7 4.247a4.486 4.486 0 0 1-1 2.83M12.5 13l-2 8.002m-2-9.002-2 8.002M16.5 12l-2 8.001"
    />
  </Svg>
);
