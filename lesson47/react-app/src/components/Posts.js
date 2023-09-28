import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((resp) => resp.json())
      .then((data) => setPost(data.posts));
  }, []);

  return (
    <>
      <h1>News</h1>
      <div className="news-body">
        {post.map((item) => (
          <Link data-testid="link" key={item.id} to={`/post/${item.id}`}>
            <li>{item.title}</li>
          </Link>
        ))}
      </div>
    </>
  );
};

export default News;
