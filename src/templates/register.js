//import { } from index.js

export const registerTemplate = () =>{
    window.location.hash = '/register';
    const formRegister = document.createElement('section');
    formRegister.className = 'register-form';
    formRegister.id = 'registerForm';
    const formTemplate = `
            <header class="logo-register">
            <img src="./imagenes/Degustando.png">
        </header>
        <div>
        <header>
            <h1>Regístrate</h1>
        </header>
        <form>
            <input type="text" id= "signUpName" class="email-box" placeholder="Ingresa tu nombre">
            <input type="email" id="signUpEmail" class="email-box" placeholder="Ingresa tu correo">
            <input type="password" id="signUpPass" class="password-box" placeholder="Ingresa tu contraseña">
            <button  id="registerButton" class="button-log">Registrarte</button>
            <p class="signinOptionText">¿Ya tienes cuenta? </p>
            <a href="#login">Inicia sesión aquí</a>
    
            <p class="conditionsText">Al registrarte aceptas nuestras Condiciones, política de datos y política de cookies. </p>
        </form>
        </div> `;
        formRegister.innerHTML = formTemplate;

    return formRegister;
}

//registerTemplate();