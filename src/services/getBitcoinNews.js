import axios from "axios";
import { NEWS_URL } from "./Constants";
import { NEWS_KEY } from "./Constants";

export const BITCOIN = () => {
  const bitcoinAPI = `${NEWS_URL}everything?q=bitcoin&from=2020-12-27&sortBy=publishedAt&apiKey=${NEWS_KEY}`;

  const bitcoinNews = await axios.get(bitcoinAPI).then(({ data }) => {
    return data.articles
  });
  return bitcoinNews;

};