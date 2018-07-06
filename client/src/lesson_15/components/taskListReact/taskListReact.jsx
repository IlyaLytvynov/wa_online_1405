import * as React from 'react';
import { Ajax } from '../../utils/ajax.util';
import './taskListReact.scss';

const URL = 'http://localhost:4001/list';

export class TaskList extends React.Component {
  constructor() {
    super();
    this.listName = 'Task List';
    this.state = {
      list: [],
      title: '',
    };

    Ajax.get(URL, (resp) => {
      this.setState({list: resp});
    });
  }

  addTask(task) {
    this.setState({
      title: '',
      list: this.state.list.concat([task])
    })
  }

  submitForm(e) {
    e.preventDefault();
    Ajax.post(URL, {title: this.state.title}, (resp) => {
     this.addTask(resp);
    })
  }

  inputHandler(e) {
    const target = e.target;
    console.log(target.value);
    this.setState({
      list: this.state.list,
      title: target.value
    });
  }

  render() {
    const listItems = [];

    this.state.list.forEach((item) => {
      const li = <li id={item.id}><input type="checkbox" checked={item.completed}/>{ item.title }</li>;
      listItems.push(li);
    });

    return <div className='task-list'>
      <form className="task-list__header" onSubmit={this.submitForm.bind(this)}>
        <h2>{this.listName}</h2>
        <input type="text" value={this.state.title} onInput={this.inputHandler.bind(this)}/>
        <button>Add</button>
      </form>
      <h2>{this.state.title}</h2>
      <div className="task-list__content">
        <ul>
          { listItems }
        </ul>
      </div>
      <div className="task-list__footer">
        Footer
      </div>
    </div>
  }
}