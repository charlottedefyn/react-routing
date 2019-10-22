import React, { Component } from "react";
import Input from "./input";

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

        <div className="form-group">
          <label htmlFor="contenu">Contenu</label>
          <textarea
            name="contenu"
            id="contenu"
            rows="10"
            className="form-control"
            value={this.state.data.contenu}
            onChange={this.change}
          ></textarea>
        </div>
        <input type="submit" value="créer" className="btn btn-primary" />
      </form>
    );
  }
}

export default NewArticle;
