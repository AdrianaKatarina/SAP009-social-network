import { login } from '../../firebase/firebase.js';
import { firebaseError } from '../../error/errors.js';
import peopleImg from '../../image/people.svg';
import arrowImg from '../../image/arrow.svg';
import logoImg from '../../image/logo.svg';
import bgMobileImg from '../../image/background-mobile.svg';
import bgDesktopImg from '../../image/background-desktop.svg';

export default () => {
  const container = document.createElement('main');

  container.classList.add('background-h-r-l');
  if (window.matchMedia('(min-width: 1024px)').matches) {
    container.style.backgroundImage = `url(${bgDesktopImg})`;
  } else {
    container.style.backgroundImage = `url(${bgMobileImg})`;
  }

  const template = `
  <figure>
    <img class='d-w' src=${peopleImg} alt='Duas pessoas preparando um bolo na vasilha'>
  </figure>
  <section class='position-card'>
    <section class='card'>
      <header class='position-header'>
        <button class='arrow'>
          <img src=${arrowImg} alt='seta' class='img-seta'>
        </button>
        <img src=${logoImg} alt='Logo' class='logo'>
      </header>
      <h2 class='font-margin'>Entre no Friandy</h2>
      <form class='form-login'>
        <input type='email' name='email' id='email' class='btn-input-wb input-email' placeholder='Email' required/>
        <input type='password' name='password' id='senha' class='btn-input-wb input-password' placeholder='Senha' required/>
        <button type='button' class='btn-purple btn-enter' id='entrar'>Entrar</button>
        <p class='message-error'></p>
      </form>
      <footer>
        <a href="/#about" class="sobre">Sobre Friandy</a>
      </footer>
    </section>
  </section>   
  `;

  container.innerHTML = template;

  const arrow = container.querySelector('.arrow');
  arrow.addEventListener('click', () => {
    window.location.hash = '#home';
  });

  const valoresLogin = () => {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    login(email, senha)
      .then(() => {
        window.location.hash = 'feed';
      })
      .catch((error) => {
        const errorMessage = firebaseError(error);
        const errorParagraph = container.querySelector('.message-error');
        errorParagraph.innerHTML = errorMessage;
      });
  };
  container.addEventListener('click', (event) => {
    if (event.target.id === 'entrar' && event.target.nodeName === 'BUTTON') {
      valoresLogin();
    }
  });

  return container;
};
