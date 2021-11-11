// tener en cuenta que este archivo se debe linkear a firebase.js
const root = document.getElementById('root');

export const loginTemplate = () => {
  window.location.hash = '/login';
  root.innerHTML = `
    <section class="section-login">
      <section class="section-img">
        <figure >
          <img class="login-logo" src="./imagenes/Degustando.png" />
        </figure>
        <section class="login-text">
          <p>Bienvenidos a nuestra red social de gastronomía coreana.</p>
          <p>Aquí puedes descubrir, conocer y compartir recetas, reseñas de
           restaurantes y platos típicos del arte culinario de Corea del Sur. </p>
           <p>¡Te invitamos a conocer más!</p>
           <figure >
             <img class="kimbap" src="./imagenes/kimbap.jpg" />
           </figure>
        </section>
      </section>
      <section class="section-form">
        <form class="login-formContainer">
          <section class="login-user">
            <div class="login-inputMail">
              <img src="./imagenes/icons8mensaje.png" />
              <input type="email" id="emailUser" class="email-user"       placeholder="Correo Electrónico"/>
            </div>
            <div class="login-inputPassword">
              <img src="./imagenes/icons8llave.png" />
              <input type="password" id="passwordUser" class="password-user" placeholder="Contraseña"/>
            </div>
            <p>Al continuar, aceptas nuestras condiciones del servicio.</p>
            <button type="button" name="btn-login" class="button-login">
             Acceder</button>
          </section>
          <hr />
          <p>¿Olvidaste tu contraseña?</p>
          <a class="link-recover" href="#">Recuperar</a>
          <hr />
        </form>
        <section class="login-googleFacebook">
           <p>O inicia sesión con:</p>
           <button type="button" name="btn-google" class="button-google">
             <img src="./imagenes/icons8gmail.png" />
           </button>
           <button type="button" name="btn-facebook" class="button-facebook">
             <img src="./imagenes/icons8facebook.png" />
           </button>
        </section>
        <section class="login-newAccount">
          <hr />
          <p>¿No tienes una cuenta?</p>
          <a class="link-newAccount" href="#">Regístrate</a>
          <hr />
        </section>
      </section>
      <footer>
      <p>@2021 Degustando Corea. Creado por Victoria Toro y Macarena Rivera.</p>
    </footer>
    </section> `;
};
loginTemplate();
