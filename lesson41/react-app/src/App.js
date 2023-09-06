import React, { Component } from "react";
import Article from "./components/Article";
import LangContext from "./components/lang-context";

let EN = {
  head: "NVIDIA news",
  description_title: "NVIDIA Accelerated AI on Azure",
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  button: "Read",
  current_lang: "EN",
};
let UA = {
  head: "Новини NVIDIA",
  description_title: "Вдосконалений штучний інтелект NVIDIA",
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  button: "Читати",
  current_lang: "UA",
};

class App extends Component {
  constructor() {
    super();
    this.state = { lang: EN };
  }
  componentDidMount() {
    const savedLang = localStorage.getItem("pageLanguage");
    if (savedLang === "Ukrainian") {
      this.setState({ lang: UA });
    }
  }
  
  SetLangEN() {
    localStorage.setItem("pageLanguage", "English");
    this.setState({ lang: EN });
  }

  SetLangUA() {
    localStorage.setItem("pageLanguage", "Ukrainian");
    this.setState({ lang: UA });
  }

  // Context
  render() {
    return (
      <div className="wrapper">
        <h1 className="title">{this.state.lang.head}</h1>
        <LangContext.Provider value={this.state.lang}>
          <Article>
            <div className="article__title">
              <h2>{this.state.lang.description_title}</h2>
            </div>
          </Article>
          <div className="lang">
            <button onClick={this.SetLangUA.bind(this)} className="lang-btn">
              UA
            </button>
            <button onClick={this.SetLangEN.bind(this)} className="lang-btn">
              EN
            </button>
          </div>
        </LangContext.Provider>
      </div>
    );
  }
}
export default App;
