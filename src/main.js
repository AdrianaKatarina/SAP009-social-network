import home from './pages/home/index.js';
import about from './pages/about/about.js';
import login from './pages/login/index.js';
import register from './pages/register/index.js';
import feed from './pages/feed/feed.js';
import { checkAuthentication } from './firebase/firebase.js';

const main = document.querySelector('#root');
const redirectUserAuthentication = (user) => {
  if (user) {
    window.location.hash = 'feed';
  } else {
    window.location.hash = 'home';
  }
};

window.addEventListener('hashchange', async () => {
  main.innerHTML = ' ';
  switch (window.location.hash) {
    case ' ':
      main.appendChild(home());
      break;
    case '#login':
      main.appendChild(login());
      break;
    case '#register':
      main.appendChild(register());
      break;
    case '#about':
      main.appendChild(about());
      break;
    case '#feed':
      main.appendChild(await feed());
      break;
    default: main.appendChild(home());
  }
});

window.addEventListener('load', () => {
  main.appendChild(home());
  window.location.hash = '';
  checkAuthentication(redirectUserAuthentication);
});
