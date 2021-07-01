export default (state = [], action) => {
    switch (action.type) {
      case "CREATE_PHOTO":
        return action.payload;
      default:
        return state;
    }
  };
  