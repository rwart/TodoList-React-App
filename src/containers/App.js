import React from 'react';
import uuid from 'uuid/v4';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  addTodo = val => {

    const todo = {
      text: val,
      id: uuid(),
    };

    const data = [...this.state.data, todo];
    this.setState({ data });
  };

  removeTodo = id => {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  };

  render() {
    return (
      <div className={style.TodoApp}>
        <Title todoNumber={this.state.data.length}/>
        <TodoForm handleAddTodo={this.addTodo}/>
        <TodoList List={this.state.data} HandleRemoveTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
