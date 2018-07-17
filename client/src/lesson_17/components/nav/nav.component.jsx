import * as React from 'react';

import { AccountPanel } from '../account-panel/account-panel.component.jsx';
import { Ajax } from '../../utils/ajax.util.js';
import './nav.component.scss';
import { appConfig } from '../../config';
import { NavLink } from 'react-router-dom';

const URL = `${appConfig.apiUrl}/menu`

export class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [],
      isExpand: false,
    };
  }

  componentDidMount() {
    Ajax.get(URL, (resp) => {
      this.setState((state) => Object.assign(state, { menuItems: resp }));
    });
  }

  toggleMenu() {
    this.setState((state) => Object.assign(state, { isExpand: !state.isExpand }));
  }

  close() {
    this.setState((state) => Object.assign(state, { isExpand: false }));
  }

  render() {
    const listItems = this.state.menuItems.map((item) => {
      return <li id={ item.id } key={ item.id } className="global-nav__item">
        <NavLink to={item.url} onClick={this.close.bind(this)} className="global-nav__link">{ item.title }</NavLink>
      </li>
    });

    const classNames = ['global-nav'];
    
    if (this.state.isExpand) {
      classNames.push('global-nav_expand');
    }

    return  <nav className={ classNames.join(' ') }>
      <button 
        onClick={this.toggleMenu.bind(this)}
        className="global-nav__toggle toggle">
        <span className="toggle__bar"></span>
        <span className="toggle__bar"></span>
      </button>
      <ul className="global-nav__menu">
        <li className="global-nav__item global-nav__item_logo">
          <a className="global-nav__link">
            <img className="global-nav__logo logo" src="../../assets/images/logo.svg" alt="" />
          </a>
        </li>
        { listItems }
      </ul>
      <div className="global-nav__account-panel">
        <AccountPanel />    
      </div>
    </nav>  
  }
}