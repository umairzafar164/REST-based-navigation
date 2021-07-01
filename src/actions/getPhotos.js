import axios from "axios";

export const getPhotos = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/photos"
  );

  dispatch({ type: "CREATE_PHOTO", payload: response.data });
  console.log(response);
};
