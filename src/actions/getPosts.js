import axios from "axios";

export const getPost = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  dispatch({ type: "CREATE_POST", payload: response.data });
};
