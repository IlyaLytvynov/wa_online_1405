import * as React from 'react';
import { ListItem } from '../listItem/listItem.component.jsx';

export class Content extends React.Component {
  onItemChange(changedItem) {
    console.log('CHNAGED AT CONTENT COMPONENT');
    this.props.onChange(changedItem);
  }

  onDelete(item) {
    console.log(item);
    this.props.onDelete(item);
  }

  render() {
    const listItems = this.props.items.map(listItemObject => 
    <ListItem
      onChange={this.onItemChange.bind(this)}
      onDelete={this.onDelete.bind(this)}
      key={listItemObject.id} data={listItemObject}/>
    );

    return <div className='task-list__content'>
      <ul>
        { listItems }
      </ul>
    </div>
  }
}