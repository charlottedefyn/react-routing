import React from "react";

const Textarea = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        name={props.name}
        id={props.name}
        rows="10"
        className="form-control"
        value={props.value}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
