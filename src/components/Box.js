import React from "react";
function Box(props) {
  return (
    <div
      type="button"
      id={props.id}
      className={"fadeIn " + props.className}
    ></div>
  );
}
export default Box;
