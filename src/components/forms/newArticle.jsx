import React, { Component } from "react";

class NewArticle extends Component {
  state = {
    data: { titre: "", contenu: "" }
  };

  change = e => {
    const cloneData = { ...this.state.data };
    cloneData[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: cloneData });
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="titre">Titre</label>
          <input
            type="text"
            className="form-control"
            id="titre"
            name="titre"
            value={this.state.data.titre}
            onChange={this.change}
          />
        </div>
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
