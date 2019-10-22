import React, { Component } from "react";
import Input from "./input";
import Textarea from "./textarea";

class NewArticle extends Component {
  state = {
    data: { titre: "", contenu: "" }
  };

  change = e => {
    const cloneData = { ...this.state.data };
    cloneData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: cloneData });
  };

  submit = e => {
    e.preventDefault();

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
        />
        <Textarea
          name="contenu"
          label="Contenu"
          value={this.state.data.contenu}
          onChange={this.change}
        />
        <input type="submit" value="créer" className="btn btn-primary" />
      </form>
    );
  }
}

export default NewArticle;
