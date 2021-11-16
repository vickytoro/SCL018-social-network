import { signUp } from '../lib/index.js';

export const registerTemplate = () => {
  const formRegister = document.createElement('section');
  formRegister.className = 'register-form';
  formRegister.id = 'registerForm';
  const formTemplate = `
            <header class="logo-register">
            <img src="./imagenes/Degustando.png">
        </header>
        <div class="box-form">
        <header>
            <h1>Regístrate</h1>
        </header>
        <form class="container-form">
            <input type="text" id= "signUpName" class="email-box" placeholder="Ingresa tu nombre" >
            <input type="email" id="signUpEmail" class="email-box" placeholder="Ingresa tu correo" required>
            <input type="password" id="signUpPass" class="password-box" placeholder="Ingresa tu contraseña de mínimo 6 caracteres" required>
            <button id="registerButton" class="button-log">Registrarme</button>
            <p class="signinOptionText">¿Ya tienes una cuenta? </p>
            <a class="link-session" href="#/login">Inicia sesión aquí</a>
    
            <p class="conditionsText">Al registrarte aceptas nuestras Condiciones, política de datos y política de cookies. </p>
        </form>
        </div> `;
  formRegister.innerHTML = formTemplate;
  // Registro usuario nuevo.

  formRegister.querySelector('#registerButton').addEventListener('click', () => {
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPass').value;
    signUp(email, password);
  });

  return formRegister;
};
