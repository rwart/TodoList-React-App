import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = props => {
  if (props.List.length === 0) {
    return (<div></div>);
  } else {
    return (
      <ul className={style.TodoList}>
        {props.List.map(item =>
          <Todo
            key={item.id}
            item={item}
            HandleRemoveTodo={props.HandleRemoveTodo}
          />)}
      </ul>
    );
  }
};

export default TodoList;
