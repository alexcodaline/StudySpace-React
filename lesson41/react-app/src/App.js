import React, {Component} from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";

class App extends Component{

  render(){
    return (
      <div className="wrapper">
        <h1 className="title">NVIDIA news</h1>
        <div className="article">
          <div className="article__title">
            <h2>NVIDIA Accelerated AI on Azure</h2>
          </div> 
          <ArticleBody />
          <ArticleActions />
        </div>
        <div className="lang">
          <button className="lang-btn">UA</button>
          <button className="lang-btn">EN</button>
        </div>
      </div> 
      );
  }
}

export default App;