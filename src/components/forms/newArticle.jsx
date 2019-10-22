import React, { Component } from "react";
import Input from "./input";
import Textarea from "./textarea";

class NewArticle extends Component {
  state = {
    data: { titre: "", contenu: "" },
    errors: {}
  };

  change = e => {
    const cloneData = { ...this.state.data };
    cloneData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: cloneData });
  };

  validation = () => {
    const cloneData = { ...this.state.data };
    const errors = {};
    if (cloneData.titre.trim() === "") errors.titre = "champ titre obligatoire";
    if (cloneData.contenu.trim() === "")
      errors.contenu = "champ contenu obligatoire";

    return Object.keys(errors).length === 0 ? null : errors;
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
