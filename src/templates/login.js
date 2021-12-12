import { singIn, loginWithGoogle, loginWithFacebook } from "../lib/index.js";

// Función para desplegar #login
export const loginTemplate = () => {
  const containerLogin = document.createElement("main");
  containerLogin.className = "section-login";
  containerLogin.id = "section-login";
  const loginPage = `
      <section class="section-img">
        <figure class="figure-login-logo"  >
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
              <input type="email" id="emailUser" class="email-user" placeholder="Correo Electrónico" required >
            </div>
            <div class="login-inputPassword">
              <img class="img-input" src="./imagenes/icons8llave.png" />
              <input type="password" id="passwordUser" class="password-user" placeholder="Contraseña" />
            </div>
            <p class= "terms-singin">  Al continuar, aceptas nuestras condiciones del servicio.</p>
            <button type="button" name="btn-login" class="button-login" id="accessButton">
            Acceder</button>
          </section>
          <hr class="lines" />
        </form>
        <section class="login-googleFacebook">
          <p class="login-width">O inicia sesión con:</p>
          <button type="button" name="btn-google" class="button-google" id="googleButton">
            <img class="img-gf" src="./imagenes/icons8gmail.png" />
          </button>
          <button type="button" name="btn-facebook" class="button-facebook" id="facebookButton">
            <img class="img-gf" src="./imagenes/icons8facebook.png" />
          </button>
        </section>
        <section class="login-newAccount">
          <hr class="lines" />
          <p class="terms">¿No tienes una cuenta?</p>
          <a class="link-newAccount" id="linkNewAccount" href="#/register" id= "checkUser">Regístrate</a>
          <hr class="lines" />
        </section>
      </section>
      <footer>
      <p class="authors"> @2021 Degustando Corea. Creado por Victoria Toro y Macarena Rivera.</p>
    </footer>`;

  containerLogin.innerHTML = loginPage;

  // Evento para Ingresar
  containerLogin
    .querySelector('#accessButton')
    .addEventListener('click', () => {
      const emailRegister = document.querySelector('#emailUser').value;
      const passwordRegister = document.querySelector('#passwordUser').value;
      singIn(emailRegister, passwordRegister);
    });

  // Evento para ingresar con Google
  containerLogin
    .querySelector('#googleButton')
    .addEventListener('click', () => {
      loginWithGoogle();
      // window.location.hash = "#/wallpage";
    });

  // Evento para ingresar con Facebook
  containerLogin
    .querySelector('#facebookButton')
    .addEventListener('click', () => {
      loginWithFacebook();
    });

  return containerLogin;
};
