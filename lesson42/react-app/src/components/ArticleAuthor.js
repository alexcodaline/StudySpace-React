import React from "react";
function ArticleAuthor(props) {
  return (
    <div className="article__author">
      <p className="article__author--name">{props.languageData.author}</p>
      <p className="article__author--date">{props.languageData.published}</p>
      <p className="article__author--theme">{props.languageData.theme}</p>
    </div>
  );
}
export default ArticleAuthor;
