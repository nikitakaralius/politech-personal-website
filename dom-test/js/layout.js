createLayout();

function createLayout() {
  const root = document.getElementById('root');

  const header = document.createElement('header');
  const headerText = document.createElement('h1');
  headerText.innerText = 'Здесь будет нормальный Header';
  header.appendChild(headerText);

  const main = document.createElement('main');
  main.id = 'main';

  const footer = document.createElement('footer');
  const footerText = document.createElement('p');
  footerText.innerText = 'А здесь будет нормальный footer';
  footer.appendChild(footerText);

  root.appendChild(header);
  root.appendChild(main);
  root.appendChild(footer);
}
