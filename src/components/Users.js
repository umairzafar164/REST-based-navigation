import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers } from "../actions/getUsers";

const Users = (props) => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => props.getUsers());
  const getUsers = () => {
    setUsersList(props.users);
  };
  return (
    <div>
      <button onClick={getUsers} className='ui button red'>Fetch Users</button>

      <div>
        {usersList.map((m) => (
          <li>{m.name}</li>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, { getUsers })(Users);
