import { Component } from "react";
import Joi from "@hapi/joi";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validationChamp = champ => {
    const name = champ.name;
    const value = champ.value;

    const obj = { [name]: value };
    const schema = Joi.object({ [name]: this.schemaData[name] });
    //console.log({ [name]: this.schemaProfil[name] });
    const result = schema.validate(obj);
    console.log(result);
    if (Object.keys(result).length === 2)
      return result.error.details[0].message;
    return null;
  };

  change = e => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validationChamp(e.currentTarget);

    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const cloneData = { ...this.state.data };
    cloneData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: cloneData, errors: errors });
  };

  validation = () => {
    const { data } = this.state;

    const result = this.schema.validate(data, { abortEarly: false });
    console.log(result);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  submit = e => {
    e.preventDefault();

    const errorsOnSubmit = this.validation();
    this.setState({ errors: errorsOnSubmit || {} });
    if (errorsOnSubmit) return;

    this.doSubmit();
  };
}

export default Form;
