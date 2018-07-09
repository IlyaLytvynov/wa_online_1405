import * as React from 'react';
import { Ajax } from '../../utils/ajax.util';
import { Header } from './header/header.component.jsx';
import { Content } from './content/content.component.jsx';

import './taskListReact.scss';
import { Footer } from './footer/footer.component.jsx';


const URL = 'https://evening-dawn-11092.herokuapp.com/list';

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

  submitForm(title) {
    Ajax.post(URL, {title: title}, (resp) => {
     this.addTask(resp);
    })
  }

  render() {
    return <div className='task-list'>
      <Header onSubmit = {this.submitForm.bind(this)}/>
      <Content items = {this.state.list} />
      <Footer />
    </div>
  }
}