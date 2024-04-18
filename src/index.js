import './library/html.js';
import Router from './components/Router.js';
import { attachEvents } from './library/listen.js';
import './styles/styles.scss';

function main() {
  const root = document.createElement('div');
  root.id = 'root';
  root.insertAdjacentHTML('beforeend', Router());
  return root;
}

document.body.appendChild(main());
attachEvents();
