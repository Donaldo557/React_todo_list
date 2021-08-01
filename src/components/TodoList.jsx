import React from "react";

function TodoList(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <ul>
        <li>{props.text}</li>
      </ul>
    </div>
  );
}

export default TodoList;
