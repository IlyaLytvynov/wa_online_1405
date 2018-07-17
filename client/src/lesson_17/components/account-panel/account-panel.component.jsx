import * as React from 'react';
import './account-panel.component.scss';
import { Ajax } from '../../../lesson_15/utils/ajax.util';
import { appConfig } from '../../config';

export class AccountPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      userProfile: {}
    }
  }

  componentDidMount() {
    Ajax.get(`${appConfig.apiUrl}/profile`, (resp) => {
      this.setState({
        userProfile: resp,
      })
    })
  }

  render() {
    return  <div className="account-panel">
      <div className="account-panel__username">Welcome, { this.state.userProfile.firstName } { this.state.userProfile.secondName } </div>
      <div className="account-panel__avatar avatar">
        <img src="../../assets/images/avatar.png" alt="" />
      </div>
      <div className="account-panel__icon"></div>
      <div className="account-panel__icon"></div>
      <div className="account-panel__icon"></div>
    </div>
  }
}