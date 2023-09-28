import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          navigate("/news");
          return;
        }

        setNews(data);
      });
  }, [id, navigate]);

  return (
    <div>
      {news && (
        <>
          <h1>{news.title}</h1>
          <br />
          <p>{news.body}</p>
        </>
      )}
    </div>
  );
};

export default SingleNews;
