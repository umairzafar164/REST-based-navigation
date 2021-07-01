export default (state = [], action) => {
    switch (action.type) {
      case "CREATE_ALBUM":
        return action.payload;
      default:
        return state;
    }
  };
  