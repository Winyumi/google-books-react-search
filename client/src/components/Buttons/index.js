import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

export function DetailsBtn(props) {
  return (
    <span className="btn btn-primary mr-1" {...props} role="button" tabIndex="0" >
      Details
    </span>
  );
}

export function SaveBtn(props) {
  return (
    <span className="btn btn-primary mr-1" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export function DeleteBtn(props) {
  return (
    <span className="btn btn-danger mr-1" {...props} role="button" tabIndex="0">
      Remove
    </span>
  );
}
