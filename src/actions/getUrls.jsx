import nhkAPI from "../APIs/nhkAPI";

const receiveData = (data) => {
  return {
    type: "RECEIVEDATA",
    payload: data,
  };
};

const getUrls = (dataArea, dataDate, dataGenre) => {
  return (dispatch) => {
    nhkAPI(dataArea, dataDate, dataGenre).then((res) => {
      const data = res.data.list.g1;
      dispatch(receiveData(data));
    });
  };
};

export default getUrls;

/*
const arr = res.data.list.g1;
const title = arr.map((item) => item.title);
title.forEach(data => dispatch(receiveData(data)))


*/
