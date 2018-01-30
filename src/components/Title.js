import React from 'react';
import style from './Title.css';

const Title = props =>
  <h1 className={style.title}>TODO List ({props.todoNumber})</h1>;

export default Title;
