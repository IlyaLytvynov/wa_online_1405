import * as React from 'react';

export class Header extends React.Component {
  constructor() {
    super();
    this.listName = 'Task List';
    this.state = {
      title: ''
    }
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.title);
    this.setState({
      title: ''
    });
  }

  inputHandler(e) {
    const target = e.target;
    console.log(target.value);
    this.setState({
      title: target.value
    });
  }

  render() {
    console.log(this.props);
    return <form className='task-list-form' onSubmit={this.submitHandler.bind(this)}>
    <h2 className='task-list-form__title'>{this.listName}</h2>
    <input type='text' value={this.state.title} onInput={this.inputHandler.bind(this)}/>
    <button>Add</button>
  </form>
  }
}