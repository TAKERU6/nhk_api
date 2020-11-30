import axios from "axios";

const countriesAPI = (word, data) => {
  const area = word;
  const service = "g1";
  const genre = "0100";
  const date = data;
  const apikey = process.env.REACT_APP_NHK_API_KEY;
  const url = `https://api.nhk.or.jp/v2/pg/genre/${area}/${service}/${genre}/${date}.json?key=${apikey}`;
  return axios.get(url);
};

export default countriesAPI;
