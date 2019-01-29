import React from "react";
export const Image = props => {
  return <img src={props.url} className="dogeImg" alt="" />;
  // adding 'alt' will replace the broken link image that temporarily appears during the loading process with a blank image
};
