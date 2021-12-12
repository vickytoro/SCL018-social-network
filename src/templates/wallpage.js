/* eslint-disable no-alert */
import {
  logOut, addPost, auth, readPost,
} from '../lib/index.js';

// Función para desplegar #wallpage
export const wallTemplate = () => {
   const email = auth?.currentUser?.email;
  const containerWall = document.createElement('section');
  containerWall.className = 'wall-section';
  containerWall.id = 'wall-section';
  const wallPost = `
  <header class="header-wall">
    <figure class="inside-header">
      <img class="wall-logo" src="./imagenes/Degustando.png" />
      </figure>
      <div class="user-wall">
        <img class="img-user" src="./imagenes/icons8usuarix.png" />
        <p class="user-wall-p" >${email || 'Bienvenide a nuestra página'}</p>  
      </div>
  </header>
  <main class="main-wall">
    <aside class="aside-box">
      <div class="home">
        <img class="img-home" src= "./imagenes/icons8casa.png" />
        <button class="btn-home"><p class="hidden">Home</p></button>
      </div>
      <div class="plus" id="newPost">
        <img class="img-plus" src= "./imagenes/icons8addnew.png" />
        <button class="button-plus"> <p class="hidden">Agregar Reseña</p></button>
      </div>
      <div class="button-logout" id="logout">
        <img class="img-logout" src= "./imagenes/icons8logout.png" />
        <button class="btn-logout" ><p class="hidden"> Cerrar sesión</p> </button>  
      </div>
      <div class="remember">
        <p>Recuerda dar Me Gusta</p>
        <img class="like-aside" src="./imagenes/like.png" />
      </div>
      <figure>
        <img class="korean-food" src="./imagenes/comidacoreana.jpg" />
      </figure>
    </aside>
    <section class="section-container-post">
      <section>
        <div id="postModal" class="post-modal">
          <div class="post-buttons">
            <span class="close-modal" id="closeModal">&times;</span>
            <textarea type="text" id="titlePost" class="tittle-post" placeholder="Escribe un Título, por ejemplo: Receta, Reseña de Restaurante, etc."></textarea>
            <textarea type="text" id="writePost" class="review-post" placeholder="Escribe tu reseña o receta. En el caso de reseña por favor indicanos la ubicación y precios refereciales."></textarea>
          <div class="buttons">
            <button id="btnImagePost" class="btn-image2"> <img class="image-post2" src="./imagenes/icons8imagen.png" />Subir imagen</button> 
          </div> 
          </div>
          <button id="toPost" class="btn-post">Publicar</button>
        </div>       
        </section>
        <section id="containerPosts">
      </section>
    </section>
  </main>
    `;
  containerWall.innerHTML = wallPost;
  // Evento para abrir y cerrar modal para escribir Posts
  const postBox = containerWall.querySelector('#postModal');
  postBox.style.display = 'none';
  containerWall.querySelector('#newPost').addEventListener('click', () => {
    postBox.style.display = 'block';
    const closeModal = containerWall.querySelector('#closeModal');
    closeModal.addEventListener('click', () => {
      postBox.style.display = 'none';
    });
  });

  // Evento para escribir post
  const newTitle = containerWall.querySelector('#toPost');
  newTitle.addEventListener('click', () => {
    const inputTitle = document.getElementById('titlePost').value;
    const inputReview = document.getElementById('writePost').value;
    if (inputTitle === '' || inputReview === '') {
      alert('Complete los campos vacios');
    } else {
      addPost(inputTitle, inputReview);
    }
    document.getElementById('titlePost').value = '';
    document.getElementById('writePost').value = '';
  });

  // Evento para cerrar sesión
  containerWall.querySelector('#logout').addEventListener('click', () => {
    logOut();
  });

  // Llamando funcion de leer data para imprimirla
  readPost();

containerWall.querySelector('#btnImagePost').addEventListener('click', ()=>{
  alert('En mantenimiento, estamos trabajando para usted :)')
})

  return containerWall;
};
