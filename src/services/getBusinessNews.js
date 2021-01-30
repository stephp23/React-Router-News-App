import axios from "axios";
import { NEWS_URL } from "./Constants";
import { NEWS_KEY } from "./Constants";

export const BUSINESS = () => {
  const businessAPI = `${NEWS_URL}top-headlines?country=us&category=business&apiKey=${NEWS_KEY}`;

  const businessNews = await axios.get(businessAPI).then(({ data }) => {
    return data.articles
  });
  return businessNews;

}

