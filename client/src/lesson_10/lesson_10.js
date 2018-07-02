import './lesson_10.scss';
import './scripts/isEmpty';

import { widget } from './scripts/widget';
import { lighter } from './scripts/lighter';

const lighters = document.querySelectorAll('.street-lighter');

widget();

for (let i = 0; i < lighters.length; i++) {
  lighter(lighters[i]);
}