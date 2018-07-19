import * as React from 'react';
import { Nav } from '../nav/nav.component.jsx';
import { Btn } from '../btn/btn.component.jsx';

import './header.component.scss';
export class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <Nav className='page-header__prime-nav'/>
        <Btn title='Hello world' onClick={() => console.log('TEST')}/>
        <Btn title='Test'/>
      </header>
    );
  }
};
