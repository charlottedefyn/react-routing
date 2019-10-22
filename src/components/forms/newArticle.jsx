import React, { Component } from "react";

class NewArticle extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="titre">Titre</label>
          <input type="text" className="form-control" id="titre" name="titre" />
        </div>
        <div className="form-group">
          <label htmlFor="contenu">Contenu</label>
          <textarea
            name="contenu"
            id="contenu"
            rows="10"
            className="form-control"
          ></textarea>
        </div>
        <input type="submit" value="créer" className="btn btn-primary" />
      </form>
    );
  }
}

export default NewArticle;
