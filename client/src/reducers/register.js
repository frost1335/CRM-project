export default (state = [], action) => {
  switch (action.type) {
    case "REGISTER_HANDLER":
      return action.payload;
    case "USERNAME":
      return state;
    default:
      return state;
  }
};
