import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getPost } from "../actions/getPosts";


const Posts = (props) => {
  const [postList, setPostList] = useState([]);
  useEffect(() => props.getPost());
  const getPosts = () => {
    setPostList(props.posts);
  };
  return (
    <div>
      <button onClick={getPosts} className='ui button red'>Fetch Posts</button>

      <div>
        {postList.map((m) => (
          <li>{m.title}</li>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps, { getPost })(Posts);
