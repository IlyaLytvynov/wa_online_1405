import * as React from 'react';
import { Ajax } from '../../utils/ajax.util';
import { Header } from './header/header.component.jsx';
import { Content } from './content/content.component.jsx';

import './taskListReact.scss';
import { Footer } from './footer/footer.component.jsx';
import { appConfig } from '../../config';

const URL = `${appConfig.apiUrl}/list`;

export class TaskList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
    }
    Ajax.get(URL, (resp) => {
      this.setState({list: resp});
    });
  }

  addTask(task) {
    this.setState({
      list: this.state.list.concat([task])
    });
  }

  updateTask(task) {
    console.log(task);
    Ajax.put(`${URL}/${task.id}`, task, (updatedTask) => {
      this.setState((state) => {
        state.list.forEach((task, i, tasks) => {
          if (task.id === updatedTask.id) {
            tasks[i] = updatedTask;
          }
        });
        return state;
      }); 
    });
  }

  deleteTask(deletedTask) {
    Ajax.delete(`${URL}/${deletedTask.id}`, () => {
      const tasks = this.state.list.filter(task => {
        return deletedTask.id !== task.id
      });
    
      this.setState({
        list: tasks
      });
    });
  }

  submitForm(inputValue) {
    Ajax.post(URL, {title: inputValue}, (resp) => {
     this.addTask(resp);
    })
  }

  render() {
    return <div className='task-list'>
      <Header onSubmit = {this.submitForm.bind(this)}/>
      <Content items = {this.state.list} onChange={this.updateTask.bind(this)} onDelete={this.deleteTask.bind(this)}/>
      <Footer />
    </div>
  }
}