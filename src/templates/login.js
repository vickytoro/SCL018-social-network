//import {} from index.js


export const loginTemplate = () => {
  window.location.hash = '/login';
  const containerLogin = document.createElement('main');
  containerLogin.className = 'section-login';
  containerLogin.id = 'section-login';
  const loginPage = `
      <section class="section-img">
        <figure class="login-logo" >
          <img class="img-logo" src="./imagenes/Degustando.png" />
        </figure>
        <section class="login-text">
          <p class="welcome">Bienvenidos a nuestra red social de gastronomía coreana.</p>
          <p>Aquí puedes descubrir, conocer y compartir recetas, reseñas de
          restaurantes y platos típicos del arte culinario de Corea del Sur. </p>
          <p class="welcome">¡Te invitamos a conocer más!</p>
          </section>
          <figure>
            <img class="kimbap" src="./imagenes/kimbap.jpg" />
          </figure>
      </section>
      <section class="section-form">
        <form class="login-formContainer">
          <section class="login-user">
            <div class="login-inputMail">
              <img src="./imagenes/icons8mensaje.png" />
              <input type="email" id="emailUser" class="email-user" placeholder="Correo Electrónico" required/>
            </div>
            <div class="login-inputPassword">
              <img src="./imagenes/icons8llave.png" />
              <input type="password" id="passwordUser" class="password-user" placeholder="Contraseña" required/>
            </div>
            <p>Al continuar, aceptas nuestras condiciones del servicio.</p>
            <button type="button" name="btn-login" class="button-login" id="accessButton">
            Acceder</button>
          </section>
          <hr />
          <p>¿Olvidaste tu contraseña?</p>
          <a class="link-recover" href="#">Recuperar</a>
          <hr />
        </form>
        <section class="login-googleFacebook">
          <p>O inicia sesión con:</p>
          <button type="button" name="btn-google" class="button-google" id="googleButton">
            <img src="./imagenes/icons8gmail.png" />
          </button>
          <button type="button" name="btn-facebook" class="button-facebook">
            <img src="./imagenes/icons8facebook.png" />
          </button>
        </section>
        <section class="login-newAccount">
          <hr />
          <p>¿No tienes una cuenta?</p>
          <a class="link-newAccount" href="#registry" id= "checkUser">Regístrate</a>
          <hr />
        </section>
      </section>
      <footer>
      <p class="authors">@2021 Degustando Corea. Creado por Victoria Toro y Macarena Rivera.</p>
    </footer>`;

    containerLogin.innerHTML = loginPage;
    return containerLogin;
  };

//loginTemplate();



// Login de usuario registrado.
//export const accessUser = ()=>{
//const signUp = document.getElementById('accessButton')
//signUp.addEventListener('click', () => {
  //const mailRegister = document.getElementById('emailUser').value; 
  //const passwordResgister = document.getElementById('passwordUser').value;
  //console.log(mailRegister);
  //console.log(passwordResgister);
    
  //firebaseInside(mailRegister, passwordResgister);
//});
//};
//accessUser();

// Registro usuario nuevo.

/*const newAccount = root.querySelector('#checkUser');
newAccount.addEventListener('click',() => {
});
const googleLogin = root.querySelector('#googleButton');
googleLogin.addEventListener('click',() => {

});*/

/*
  firebaseGoogleLogin();
  return root;
});*/
