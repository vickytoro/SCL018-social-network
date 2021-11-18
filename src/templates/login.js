import { singIn, loginWithGoogle, loginWithFacebook } from '../lib/index.js';
// loginWithFacebook

export const loginTemplate = () => {
  const containerLogin = document.createElement('main');
  containerLogin.className = 'section-login';
  containerLogin.id = 'section-login';
  const loginPage = `
      <section class="section-img">
        <figure  >
          <img class="login-logo" src="./imagenes/Degustando.png" />
        </figure>
        <section class="login-text">
          <p class="welcome">Bienvenidos a nuestra red social de gastronomía coreana.</p>
          <p>Aquí puedes descubrir, conocer y compartir recetas, reseñas de
          restaurantes y platos típicos del arte culinario de Corea del Sur. </p>
          <p class="welcome-two">¡Te invitamos a conocer más!</p>
          </section>
          <figure>
            <img class="kimbap" src="./imagenes/kimbap.jpg" />
          </figure>
      </section>
      <section class="section-form">
        <form class="login-formContainer">
          <section class="login-user">
            <div class="login-inputMail">
              <img class="img-input" src="./imagenes/icons8mensaje.png" />
              <input type="email" id="emailUser" class="email-user" placeholder="Correo Electrónico" required />
            </div>
            <div class="login-inputPassword">
              <img class="img-input" src="./imagenes/icons8llave.png" />
              <input type="password" id="passwordUser" class="password-user" placeholder="Contraseña" required />
            </div>
            <p class= "terms-singin">  Al continuar, aceptas nuestras condiciones del servicio.</p>
            <button type="button" name="btn-login" class="button-login" id="accessButton">
            Acceder</button>
          </section>
          <hr class="lines" />
          <div class="recover-password">
            <p class="terms">¿Olvidaste tu contraseña?</p>
            <a class="link-recover" href="#">Recuperar</a>
          </div>
          <hr class="lines" />
        </form>
        <section class="login-googleFacebook">
          <p class="login-width">O inicia sesión con:</p>
          <button type="button" name="btn-google" class="button-google" id="googleButton">
            <img src="./imagenes/icons8gmail.png" />
          </button>
          <button type="button" name="btn-facebook" class="button-facebook" id="facebookButton">
            <img src="./imagenes/icons8facebook.png" />
          </button>
        </section>
        <section class="login-newAccount">
          <hr class="lines" />
          <p class="terms">¿No tienes una cuenta?</p>
          <a class="link-newAccount" href="#/register" id= "checkUser">Regístrate</a>
          <hr class="lines" />
        </section>
      </section>
      <footer>
      <p class="authors"> @2021 Degustando Corea. Creado por Victoria Toro y Macarena Rivera.</p>
    </footer>`;

  containerLogin.innerHTML = loginPage;

  containerLogin.querySelector('#accessButton').addEventListener('click', () => {
    const emailRegister = document.getElementById('emailUser').value;
    const passwordRegister = document.getElementById('passwordUser').value;
    singIn(emailRegister, passwordRegister);
  });

  containerLogin.querySelector('#googleButton').addEventListener('click', () => {
    loginWithGoogle();
  });

  containerLogin.querySelector('#facebookButton').addEventListener('click', () => {
    loginWithFacebook();
  });

  return containerLogin;
};
