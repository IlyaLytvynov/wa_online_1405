import * as React from 'react';
import { CheckBox } from '../../checkbox/checkBox.component.jsx';

import './listItem.component.scss';

export class ListItem extends React.Component {
  onChange(completed) {
    console.log('CHNAGED AT LIST ITEM');
    const changedItem = Object.assign({}, this.props.data);
    changedItem.completed = completed;
    this.props.onChange(changedItem);
  }

  onDelete() {
    this.props.onDelete(this.props.data);
  }

  render() {
    const data = this.props.data;
    const liClassName = (data.completed) ? 'task-list-item task-list-item_checked' : 'task-list-item';

    return <li className={liClassName} key={data.id} id = {data.id}>
      <CheckBox onChange={this.onChange.bind(this)} checked={data.completed} test='hello world'/>
      <span className='task-list-item__title'>{data.title}</span>
      <button className="task-list-item__control" onClick={this.onDelete.bind(this)}>
        <i class="fas fa-trash-alt"></i>
      </button>
      </li>;
  }
}