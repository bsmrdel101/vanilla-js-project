import html from './library/html.js';
import Router from './components/Router.js';
import './styles/styles.scss';

function main() {
  const root = document.createElement('div');
  root.id = 'root';
  root.insertAdjacentHTML('beforeend', Router());
  return root;
}

document.body.appendChild(main());
