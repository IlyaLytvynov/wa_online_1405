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
    return <form className='task-list__header' onSubmit={this.submitHandler.bind(this)}>
    <h2>{this.listName}</h2>
    <input type='text' value={this.state.title} onInput={this.inputHandler.bind(this)}/>
    <button>Add</button>
  </form>
  }
}