import { useState, useEffect } from "react";
import BusinessNewsArticle from "./BusinessNewsArticle.js";
import { BUSINESS } from "../data/businessSeed";

function BusinessNews(props) {
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    setBusinessNews({ BUSINESS });
  }, []);

  return (
    <div>
      {businessNews.map((businessNews, index) => {
        return <BusinessNewsArticle {...businessNews} key={index} />;
      })}
    </div>
  );
}

export default BusinessNews;