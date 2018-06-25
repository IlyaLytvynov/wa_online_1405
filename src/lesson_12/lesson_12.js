import './lesson_12.scss';
import { lighter } from './scripts/lighter';
import { select } from './components/select/select';

lighter(document.querySelector('.here-will-be-lighter'));

const countries = [
  'USA',
  'UKRAINE',
  'GERMANY',
  'FRANCE',
  'GREAT BRITAIN',
  'CHINA',
  'JAPAN'
];
const movies = [
  'Avatar',
  'Shrek',
  'Interstellar',
  'Pulp fiction'
];

select(document.querySelector('.countries-select'), countries);
select(document.querySelector('.movies-select'), movies);
accordion(document.querySelector('.movies-select'), [
  {
    title: 'Item 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
  },
  {
    title: 'Item 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores deleniti doloremque eaque, harum id inventore ipsam maiores porro quibusdam quis rerum sed tempore velit. Atque est excepturi porro quae voluptas?'
  }
]);