import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getComments } from "../actions/getComments";

const Comments = (props) => {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => props.getComments());
  const getComments = () => {
    setCommentList(props.comments);
  };
  return (
    <div>
      <button onClick={getComments} className="ui button red">
        Fetch Comments
      </button>

      <div>
        {commentList.map((m) => (
          <li>{m.body}</li>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};
export default connect(mapStateToProps, { getComments })(Comments);
