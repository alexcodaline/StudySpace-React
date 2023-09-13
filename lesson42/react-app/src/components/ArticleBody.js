import React from "react";

function ArticleBody(props) {
  return (
    <div className={`article__body ${props.isRead ? 'read' : ''}`}>
      <h3 className="article__description">
        {!props.show && props.languageData.description}
      </h3>
      <p className="article__text">
        {props.show ? props.languageData.content : props.languageData.preview}
      </p>
    </div>
  );
}

export default ArticleBody;