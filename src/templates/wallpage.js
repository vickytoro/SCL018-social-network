import { logOut, addPost } from '../lib/index.js';

export const wallTemplate = () => {
  const containerWall = document.createElement('section');
  containerWall.className = 'wall-section';
  containerWall.id = 'wall-section';
  const wallPost = `
  <header class="header-wall">
    <figure class="inside-header">
      <img class="wall-logo" src="./imagenes/Degustando.png" />
      <div class="user-wall">
        <img class="img-user" src="./imagenes/icons8usuarix.png" />
        <p>email@example.com </p>  
      </div>
    </figure>
  </header>
  <main class="main-wall">
    <aside class="aside-box">
      <div class="plus">
        <img class="img-plus" src= "./imagenes/icons8addnew.png" />
        <button id="newPost" class="button-plus"> Agregar Reseña </button>
      </div>
      <div class="search">
        <img class="img-search" src= "./imagenes/icons8búsqueda.png" />
        <input class="input-search" type="text" placeholder="Buscar" />
      </div>
      <div class="button-logout">
        <img class="img-logout" src= "./imagenes/icons8logout.png" />
        <button class="btn-logout" id="logout"> Cerrar sesión </button>  
      </div>
      <div class="remember">
        <p>Recuerda dar Me Gusta</p>
        <img class="like-aside" src="./imagenes/like.png" />
      </div>
      <figure>
        <img class="korean-food" src="./imagenes/comidacoreana.jpg" />
      </figure>
    </aside>
    <section>
      <div id="postModal" class="post-modal">
       <div class="post-buttons">
        <input type="text" id="titlePost" class="tittle-post" placeholder="Escribe un Título, por ejemplo: Receta, Reseña de Restaurante, etc." />
        <input type="text" id="writePost" class="review-post" placeholder="Escribe tu reseña o receta. En el caso de reseña por favor indicanos la ubicación y precios refereciales." />
        <div class="buttons">
          <button class="btn-like"> <img class="like-post" src="./imagenes/like.png" /></button>
          <button class="btn-image"> <img class="image-post" src="./imagenes/icons8imagen.png" /></button>
          <button class="btn-pencil" > <img class="pencil-post" src="./imagenes/icons8lapiz.png" /></button>
          <button class="btn-trash" > <img class="trash-post" src="./imagenes/icons8eliminar.png" /></button>
        </div> 
       </div>
       <button id="toPost">Publicar</button>
      </div>       
    </section>
    <section id="containerPosts">
     

    </section>
  </main>
    `;
  containerWall.innerHTML = wallPost;

  // Abrir modal para escribir Posts
  const postBox = containerWall.querySelector('#postModal');
  postBox.style.display = 'none';
  containerWall.querySelector('#newPost').addEventListener('click', () => {
    postBox.style.display = 'block';
  });

  // Escribir título y reseña
  const newTitle = containerWall.querySelector('#toPost');
  newTitle.addEventListener('click', () => {
    const inputTitle = document.getElementById('titlePost').value;
    const inputReview = document.getElementById('writePost').value;
    addPost(inputTitle, inputReview);
    document.getElementById('titlePost').value = '';
    document.getElementById('writePost').value = '';
  });

  containerWall.querySelector('#logout').addEventListener('click', () => {
    logOut();
  });
  return containerWall;
};
