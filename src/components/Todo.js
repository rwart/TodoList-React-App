import React from 'react';
import style from './Todo.css';

const Todo = props =>
    <li
      className={style.Todo}
      onClick={(e) => {
        e.preventDefault();
        props.HandleRemoveTodo(props.item.id);
      }}
    >
      {props.item.text}
    </li>;

export default Todo;
