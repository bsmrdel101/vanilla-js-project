import './styles/styles.scss';

function main() {
  const root = document.createElement('div');
  root.id = 'root';
  root.insertAdjacentHTML('beforeend', '<h1>Hello World!</h1>');
  return root;
}

document.body.appendChild(main());
