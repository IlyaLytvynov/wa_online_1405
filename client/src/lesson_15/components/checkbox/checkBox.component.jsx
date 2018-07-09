import * as React from 'react';
import './checkBox.component.scss';

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export class CheckBox extends React.Component {
  constructor() {
    super();
    this.id =  generateId();
  }

  toggleCheked() {
    this.props.onChange(!this.props.checked);
  }

  render() {
    return <label className='checkbox' htmlFor={this.id}>
      <input 
        checked={this.props.checked}
        className='checkbox__input' 
        onChange={this.toggleCheked.bind(this)}
        id={this.id}
        type="checkbox"/>
      <i className="checkbox__icon fas fa-check"></i>
    </label>
  }
}