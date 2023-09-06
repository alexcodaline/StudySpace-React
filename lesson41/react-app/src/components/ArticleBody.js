import React, {Component} from "react";

class ArticleBody extends Component{
  render(){
            return (
              <div className="article__body">
              <h3 className="article__description">Article description:</h3>
              <p className="article__description--text">NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.</p>
            </div>
            )
          }
  }


export default ArticleBody;