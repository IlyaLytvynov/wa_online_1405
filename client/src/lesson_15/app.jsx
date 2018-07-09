import * as React from 'react';
import { render } from 'react-dom';
import { TaskList } from './components/taskListReact/taskListReact.jsx';
import { Ajax } from './utils/ajax.util';

render(<TaskList/>, document.querySelector('#app'));