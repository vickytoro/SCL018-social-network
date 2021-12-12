/* eslint-disable import/named */

import { loginTemplate } from '../templates/login.js';
import { registerTemplate } from '../templates/register.js';
import { wallTemplate } from '../templates/wallpage.js';

export const router = (hash) => {
  const rootBox = document.getElementById('root');
  rootBox.innerHTML = '';
  if (hash === '#/' || hash === '/' || hash === '#' || hash === '') {
    rootBox.appendChild(loginTemplate());
  } else if (hash === '#/login') {
    rootBox.appendChild(loginTemplate());
  } else if (hash === '#/register') {
    rootBox.appendChild(registerTemplate());
  } else if (hash === '#/wallpage') {
    rootBox.appendChild(wallTemplate());
  } else if (hash === '#/showpost') {
    rootBox.appendChild(wallTemplate());
  }
};
