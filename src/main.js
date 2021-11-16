// Este es el punto de entrada de tu aplicacion

import { router } from './lib/router.js';

window.addEventListener('load', () => {
  router(window.location.hash);
});
window.addEventListener('hashchange', () => {
  router(window.location.hash);
});

// import { registerTemplate } from './templates/register.js';
// registerTemplate();

// import {loginTemplate} from './templates/login.js';
// loginTemplate();
// accessUser();
// accessUser

// import { changeRoute } from './templates/router.js';
