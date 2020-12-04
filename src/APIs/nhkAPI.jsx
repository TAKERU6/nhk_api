import axios from "axios";

const nhkAPI = (dataArea, dataDate, dataGenre) => {
  const area = dataArea;
  const service = "g1";
  const genre = dataGenre;
  const date = dataDate;
  const apikey = process.env.REACT_APP_NHK_API_KEY;
  const url = `https://api.nhk.or.jp/v2/pg/genre/${area}/${service}/${genre}/${date}.json?key=${apikey}`;
  return axios.get(url);
};

export default nhkAPI;
