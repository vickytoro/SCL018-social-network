// Este es el punto de entrada de tu aplicacion
import { router } from './lib/router.js';
import { onAuth } from './lib/index.js';

window.addEventListener('load', () => {
  router(window.location.hash);
  onAuth();
});
window.addEventListener('hashchange', () => {
  router(window.location.hash);
  onAuth();
});
