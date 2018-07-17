import * as React from 'react';
import { TaskList } from '../taskListReact/taskListReact.jsx';

export class About extends React.Component {
  render() {
    return <div className='about'>
      <h1>About page</h1>
      <TaskList />
    </div>
  }
}