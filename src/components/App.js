import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Posts from "./Posts";
import Comments from "./Comments";
import MainPage from "./mainPage";
import Albums from "./Albums";
import Photos from "./Photos";
import Todos from "./Todos";
import Users from "./Users";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/posts" exact component={Posts}></Route>
          <Route path="/comments" exact component={Comments}></Route>
          <Route path="/albums" exact component={Albums}></Route>
          <Route path="/photos" exact component={Photos}></Route>
          <Route path="/users" exact component={Users}></Route>
          <Route path="/todos" exact component={Todos}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
