import React from "react";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/posts" className="ui button green">
        Posts
      </Link>
      <Link to="/comments" className="ui button green">
        Comments
      </Link>
      <Link to="/albums" className="ui button green">
        Albums
      </Link>
      <Link to="/photos" className="ui button green">
        Photos
      </Link>
      <Link to="/users" className="ui button green">
        Users
      </Link>

      <Link to="/todos" className="ui button green">
        Todos
      </Link>
    </div>
  );
};
export default MainPage;
