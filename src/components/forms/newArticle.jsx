import React, { Component } from "react";
import Input from "./input";
import Textarea from "./textarea";
import Joi from "@hapi/joi";

class NewArticle extends Component {
  state = {
    data: { titre: "", contenu: "" },
    errors: {}
  };

  schemaData = {
    titre: Joi.string()
      .min(3)
      .required(),
    contenu: Joi.string()
      .min(3)
      .required()
  };

  schema = Joi.object(this.schemaData);

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

    console.log("tentative de création d'un nouvel article", this.state.data);
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <Input
          name="titre"
          value={this.state.data.titre}
          label="Titre"
          onChange={this.change}
          error={this.state.errors.titre}
        />
        <Textarea
          name="contenu"
          label="Contenu"
          value={this.state.data.contenu}
          onChange={this.change}
          error={this.state.errors.contenu}
        />
        <input type="submit" value="créer" className="btn btn-primary" />
      </form>
    );
  }
}

export default NewArticle;
