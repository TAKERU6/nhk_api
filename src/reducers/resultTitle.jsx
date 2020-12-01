const initialState = {};
const resultTitle = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TITLE":
      return {
        id: action.id,
        area: action.area,
        date: action.date,
        genre: action.gerne,
      };
    default:
      return state;
  }
};

export default resultTitle;
