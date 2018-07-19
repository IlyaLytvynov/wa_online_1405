import * as React from 'react';

export class Btn extends React.Component {
  render() {
    return <button className="btn" onClick={this.props.onClick}>
      {this.props.title}
    </button>
  }
}