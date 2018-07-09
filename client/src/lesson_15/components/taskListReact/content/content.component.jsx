import * as React from 'react';
import { CheckBox } from '../../checkbox/checkBox.component.jsx';

export class Content extends React.Component {
  render() {
    const listItems = [];

    this.props.items.forEach((item) => {
      const li = <li key = { item.id } id = { item.id }>
      <CheckBox checked = { item.completed } test='hello world'/>
      <span>{ item.title }</span>
      </li>;
      listItems.push(li);
    });

    return <div className='task-list__content'>
      <ul>
        { listItems }
      </ul>
    </div>
  }
}