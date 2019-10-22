import React from "react";

const Input = props => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input
          type="text"
          className="form-control"
          id={props.name}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </React.Fragment>
  );
};

export default Input;
