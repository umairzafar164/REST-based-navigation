import axios from "axios";

export const getComments = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/comments"
  );

  dispatch({ type: "CREATE_COMMENT", payload: response.data });
  console.log(response);
};
