
import React, { Component } from "react";
import LangContext from "./lang-context";

class ArticleActions extends Component {
  render() {
    return (
      <LangContext.Consumer>
        {(context) => (
          <div className="article__actions">
            <button className="article__btn">{context.button}</button>
          </div>
        )}
      </LangContext.Consumer>
    );
  }
}

export default ArticleActions;