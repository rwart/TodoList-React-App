import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: '',
    };
  }

  handleChange = event => {
    this.setState({
      item: event.target.value,
    });
  };

  handleKeyUp = event => {
    if (event.keyCode === 13) {

      if (this.state.item.length > 1) {
        this.props.handleAddTodo(this.state.item);
      }

      this.setState({
        item: '',
      });
    }
  };

  render() {
    return (
      <textarea
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Enter to Todo item"
        className={style.TodoForm}
        value={this.state.item}
      />
    );
  }
}

export default TodoForm;
