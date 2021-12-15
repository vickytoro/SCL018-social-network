/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable object-shorthand */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

// Funciones de Firebase

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  FacebookAuthProvider,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,

} from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js';

import {
  collection,
  addDoc,
  getFirestore,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  arrayRemove,
  arrayUnion,
} from 'https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js';

import { printPosts } from '../templates/showpost.js';

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
export const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);
const providerF = new FacebookAuthProvider(app);
export const user = auth.currentUser;

// Funcion para registrarte
export const signUp = (email, password, name) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: name,
        userEmail: email,
      });
      alert('Usuario Registrado');
      window.location.hash = '#/login';
      emailCheck();
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
      alert('Correo ya registrado');
      // ..
    });

  // Envía un mensaje de verificación a un usuario
  const emailCheck = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        console.log('Correo enviado');
        alert('Hemos enviado un correo de verificación para validar tu cuenta');
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
    })
    .catch((error) => {
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

// Inicio de sesión con Facebook
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
    });
};

// Cerrar sesión
export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('cierre de sesión exitoso');
      window.location.hash = '#/login';
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};

// Función observador que nos sirve para autenticar al usuario
export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user != null && user.emailVerified === true) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      const emailUser = user.email;
      const emailVerified = user.emailVerified;
      window.location.hash = '#/wallpage';
      console.log('auth:sing in');
    } else {
      if (!window.location.hash.includes('register')) {
        window.location.hash = '#/login';
      }
      // User is signed out
      console.log('auth: sign out');
    }
  });
};

// Funciones de Firestore

// Agregar datos de post
export const addPost = async (inputTitle, inputReview) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, 'posts'), {
    userId: auth.currentUser.uid,
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
    title: inputTitle,
    description: inputReview,
    datepost: Date.now(),
    likes: [],
    likesCounter: 0,
  });
  console.log('Document written with ID: ', docRef.id);

  return docRef;
};

// Leer datos de post
export const readPost = () => {
  const q = query(collection(db, 'posts'), orderBy('datepost', 'desc'));
  onSnapshot(q, (querySnapshot) => {
    const boxPost = [];
    querySnapshot.forEach((doc) => {
      boxPost.push({
        id: doc.id,
        data: doc.data(),
        title: doc.data.title,
        description: doc.data.description,
      });
    });
    printPosts(boxPost);
    console.log('title', 'description', boxPost.join(', '));
    return boxPost;
  });
};

// Borrar datos
export const deletePost = async (id) => {
  await deleteDoc(doc(db, 'posts', id));
  console.log(await deleteDoc);
};

// Editar datos
export const editPost = async (id, inputTitle, inputReview) => {
  const refreshPost = doc(db, 'posts', id);
  await updateDoc(refreshPost, {
    title: inputTitle,
    description: inputReview,
  });
};

// Dar likes y contador de likes
export const likePost = async (id, userLike) => {
  const likeRef = doc(db, 'posts', id);
  const docSnap = await getDoc(likeRef);
  const postData = docSnap.data();
  const likesCount = postData.likesCounter;

  if (postData.likes.includes(userLike)) {
    await updateDoc(likeRef, {
      likes: arrayRemove(userLike),
      likesCounter: likesCount - 1,
    });
  } else {
    await updateDoc(likeRef, {
      likes: arrayUnion(userLike),
      likesCounter: likesCount + 1,
    });
  }
};
