import * as React from 'react';
import { TaskList } from '../taskListReact/taskListReact.jsx';
import { SlideShow } from '../slideshow/slideShow.component.jsx';

export class About extends React.Component {
  render() {
    return <div className='about'>
      <h1>About page</h1>
      <TaskList />
      <SlideShow />
    </div>
  }
}