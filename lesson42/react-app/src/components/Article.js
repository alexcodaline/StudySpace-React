import React from "react";
import ArticleAuthor from "./ArticleAuthor";
import ArticleBody from "./ArticleBody";

function Article(props) {
  
    return (
    <>
    {props.children}
    <ArticleBody show={props.show} languageData={props.text} isRead={props.isRead} />
    <ArticleAuthor languageData={props.text}/> 
    </>
    );
  }
  export default Article;


