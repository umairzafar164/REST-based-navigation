import axios from "axios";

export const getAlbums = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/albums"
  );

  dispatch({ type: "CREATE_ALBUM", payload: response.data });
  
};
