import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";
import albumsReducer from "./albumsReducer";
import photosReducer from "./photosReducer";
import todosReducer from "./todosReducer";
import usersReducer from "./usersReducer";
export default combineReducers({
  posts: postReducer,
  comments: commentsReducer,
  albums: albumsReducer,
  photos: photosReducer,
  todos:todosReducer,
  users:usersReducer
});
