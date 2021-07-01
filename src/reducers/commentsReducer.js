export default (state = [], action) => {
    switch (action.type) {
      case "CREATE_COMMENT":
        return action.payload;
      default:
        return state;
    }
  };
  