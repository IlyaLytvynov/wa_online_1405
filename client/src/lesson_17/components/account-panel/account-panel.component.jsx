import * as React from 'react';
import './account-panel.component.scss';

export class AccountPanel extends React.Component {
  render() {
    return  <div className="account-panel">
      <div className="account-panel__username">Welcome, Alex</div>
      <div className="account-panel__avatar avatar">
        <img src="../../assets/images/avatar.png" alt="" />
      </div>
      <div className="account-panel__icon"></div>
      <div className="account-panel__icon"></div>
      <div className="account-panel__icon"></div>
    </div>
  }
}