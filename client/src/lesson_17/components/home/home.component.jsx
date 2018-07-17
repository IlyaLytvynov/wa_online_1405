import * as React from 'react';
import { Header } from '../header/header.component.jsx';
import { Content } from '../content/content.component.jsx';

export class Home extends React.Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <Content />
      </div> 
    )
  }
}