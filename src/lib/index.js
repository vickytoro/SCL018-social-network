// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getRedirectResult, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';

// FacebookAuthProvider, signInWithRedirect

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
// const provider = new FacebookAuthProvider(app);


// Funcion para registrarte
export const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      // ...
      alert('Usuario Registrado');
      window.location.hash = '#/login';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    // ..
    });
};

//Iniciar sesión con correo registrado
export const singIn = (emailRegister, passwordRegister) => {
  signInWithEmailAndPassword(auth, emailRegister, passwordRegister)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      // ...
      window.location.hash = '#/wallpage';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Escribe tu correo y contraseña');
  });
};

//Iniciar sesión con Google
export const loginWithGoogle = () => {
  signInWithPopup(auth, provider);
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    console.log('usuario registrado')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log('errorMessage')
  });
};

//Función observador
export const onAuth = () => {
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
};


export const loginWithFacebook = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

}

// Login con Facebook.
/*const facebookButton = document.querySelector('#facebookButton');
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
)*/
