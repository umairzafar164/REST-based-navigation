import axios from "axios";

export const getTodos = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  dispatch({ type: "CREATE_TODO", payload: response.data });

};
