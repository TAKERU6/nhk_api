const initialState = {};
const dataUrls = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVEDATA":
      return action.payload;
    default:
      return state;
  }
};

export default dataUrls;
