import * as React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

import { render } from 'react-dom';
import { Home } from './components/home/home.component.jsx';
import { Header } from './components/header/header.component.jsx';
import { About } from './components/about/about.component.jsx';

render(<Router>
    <div className='page'>
        <Header />
        <Route path='/' exact component={ Home }/>
        <Route path='/about' component={ About }/>
    </div> 
  </Router>, document.querySelector('#app'));