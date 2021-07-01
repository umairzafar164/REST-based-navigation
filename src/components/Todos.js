import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { getTodos } from "../actions/getTodos";

const Todos = (props) => {
  const [todosList, setTodosList] = useState([]);
  useEffect(() => props.getTodos());
  const getTodos = () => {
    setTodosList(props.todos);
  };
  return (
    <div>
      <button onClick={getTodos} className='ui button red'>Fetch Todos</button>

      <div>
        {todosList.map((m) => (
          <li>{m.title}</li>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
export default connect(mapStateToProps, { getTodos })(Todos);
