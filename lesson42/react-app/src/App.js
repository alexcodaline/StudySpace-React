import React, { useState } from "react";
import Article from "./components/Article";

function App() {
  // об"єкти з текстом
  const EN = {
    head: "NVIDIA news",
    title: "NVIDIA Accelerated AI on Azure",
    description: "Article description:",
    preview:
      "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
    content:
      "Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.",
    button: "Close",
    buttonRead: "Read",
    buttonAsRead: "Mark as read",
    buttonUnRead: "Mark as unread",
    author: "Author: Oleksandr",
    published: "Published: 13.09.2023",
    theme: "Theme: Video cards",
  };
  const UA = {
    head: "Новини NVIDIA",
    title: "Прискорений штучний інтелект NVIDIA в Azure",
    description: "Опис статті:",
    preview:
      "NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.",
    content:
      "Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.",
    button: "Закрити",
    buttonRead: "Читати",
    buttonAsRead: "Прочитано",
    buttonUnRead: "Не прочитано",
    author: "Автор: Олександр",
    published: "Опубліковано: 13.09.2023",
    theme: "Тема: відео карти",
  };
  //  СТАТУС ВІКНА
  const [isShow, setIsShow] = useState(false);
  const [isRead, setIsRead] = useState(false);
  // розгортання
  const toggleArticle = () => {
    setIsShow(!isShow);
    setIsRead(false);
    if (isShow) {
      setIsRead(true);
    }
  };
  // Прочитано
  const styleClick = () => {
    setIsRead(true);
    setIsShow(false);
  };

  // не прочитано
  const styleButton = () => {
    setIsRead(false);
  };
  // мова
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const languageChange = (language) => {
    setSelectedLanguage(language);
  };
  const useLanguage = selectedLanguage === "UA" ? UA : EN;

  return (
    <div className="wrapper">
      <h1 className="title">{useLanguage.head}</h1>
      <div className="article">
        <Article show={isShow} text={useLanguage} isRead={isRead}>
          <div className="article__title">
            <h2>{useLanguage.title}</h2>
          </div>
        </Article>
        <div className="article__actions">
          <button className="article__btn" onClick={styleClick}>
            {useLanguage.buttonAsRead}
          </button>
          <button
            onClick={toggleArticle}
            show={isShow}
            className="article__btn"
          >
            {isShow
              ? useLanguage.button
              : useLanguage.buttonRead}
          </button>

          <button className="article__btn" onClick={styleButton}>
            {useLanguage.buttonUnRead}
          </button>
        </div>
      </div>
      <div className="lang">
        <button className="lang-btn" onClick={() => languageChange("UA")}>
          UA
        </button>
        <button className="lang-btn" onClick={() => languageChange("EN")}>
          EN
        </button>
      </div>
    </div>
  );
}
export default App;
