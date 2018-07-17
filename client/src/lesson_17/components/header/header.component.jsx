import * as React from 'react';
import { Nav } from '../nav/nav.component.jsx';
import './header.component.scss';

export class Header extends React.Component {
  render() {
    return (
      <header className="page-header">
        <Nav />
      </header>
    );
  }
};
