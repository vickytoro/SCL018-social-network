// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';

// onAuthStateChanged,

// import {} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDYyH8zVc2dzwShjluk9PjRrBa66YgShA8',
  authDomain: 'degustando-corea-scl018.firebaseapp.com',
  projectId: 'degustando-corea-scl018',
  storageBucket: 'degustando-corea-scl018.appspot.com',
  messagingSenderId: '682892671357',
  appId: '1:682892671357:web:94d0b1f49391667b16f414',
  measurementId: 'G-BXYTTYRJVX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const providerF = new FacebookAuthProvider(app);

// Funcion para registrarte
export const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
      alert('Usuario Registrado');
      window.location.hash = '#/login';
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Ingrese una clave con un mínimo 6 caracteres');
    // ..
    });
};

// Iniciar sesión con correo registrado
export const singIn = (emailRegister, passwordRegister) => {
  signInWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      window.location.hash = '#/wallpage';
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      alert('Correo o contraseña inválidos');
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// Iniciar sesión con Google
export const loginWithGoogle = () => {
  signInWithPopup(auth, provider)
  // getRedirectResult(auth)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      console.log('Inicio de sesión con Google');
      window.location.hash = '#/wallpage';
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
      // ...
      console.log(errorMessage);
    });
};

export const loginWithFacebook = () => {
  signInWithPopup(auth, providerF)
    .then((result) => {
    // The signed-in user info.
      const user = result.user;
      console.log(user);

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log(accessToken);

      // ...
      console.log('Inicio de sesión con Facebook');
      window.location.hash = '#/wallpage';
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log(credential);

    // ...
    });
};

// Cerrar sesión
export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('cierre de sesión exitoso');
    window.location.hash = '#/login';
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
};
// Función observador que nos sirve para autenticar al usuario y que pueda realizar post, etc.
/* export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('auid');
      window.location.hash = '#/wallpage';
    } else {
      // User is signed out
      console.log('Usuario no registrado');
      window.location.hash = '#/login';
    }
  });
}; */

// Login con Facebook.
/* const facebookButton = document.querySelector('#facebookButton');
facebookButton.addEventListener('click', e => {
  e.preventDefault();
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
  .then((result) => {
    console.log(result);
    console.log('facebook sign in');
})
.catch((error) => {
  console.log (error);
})}
) */
