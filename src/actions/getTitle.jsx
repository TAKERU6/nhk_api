let id = 1;
const getTitle = (dataArea, dataDate, dataGenre) => {
  return {
    type: "GET_TITLE",
    id: id++,
    area: dataArea,
    date: dataDate,
    gerne: dataGenre,
  };
};

export default getTitle;
