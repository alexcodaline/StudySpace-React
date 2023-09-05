import React from "react";
import Article from "./components/Article";
import ArticleBody from "./components/ArticleBody";

function App() {
  return (
    <div className="wrapper">
      <h1 className="title">NVIDIA news</h1>
      <div className="article">
        <Article />
        <ArticleBody />
      </div>
    </div>
  );
}

export default App;
