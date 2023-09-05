import React from "react";
import ArticleBody from "./ArticleBody";
import ArticleAuthor from "./ArticleAuthor";
import ArticleActions from "./ArticleActions";

function Article() {
    return (
    <div className="article__title">
        <h2>NVIDIA Accelerated AI on Azure</h2>
        <ArticleBody />
        <ArticleActions />
        <ArticleAuthor />
    </div> 
    );
   
  }
  export default Article;