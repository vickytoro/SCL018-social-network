import { logOut } from '../lib/index.js';

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
    <aside>
      <div>
        <button id="logout"> Cerrar sesión </button>  
      </div>
      <div>
        <img src= "./imagenes/icons8addnew.png" />
        <button id="newPost"> Agregar Reseña </button>
      </div>
      <div>
        <img src= "./imagenes/icons8búsqueda.png" />
        <input type="text" placeholder="Buscar" />
      </div>
      <div>
        <p>Recuerda dar Me Gusta</p>
        <img src="./imagenes/like.png" />
      </div>
      <figure>
        <img src="./imagenes/comidacoreana.jpg" />
      </figure>
    </aside>
    <section>
      <div id="postModal" class="post-modal">
          <input type="text" id="titlePost" placeholder="Escribe un Título, ejemplo: Receta, Reseña de Restaurante, etc" />
        <input type="text" id="writePost" placeholder="Escribe tu reseña..." />
        <div>
          <button> <img src="./imagenes/like.png" /></button>
          <button> <img src="./imagenes/icons8imagen.png" /></button>
          <button> <img src="./imagenes/icons8lapiz.png" /></button>
          <button> <img src="./imagenes/icons8eliminar.png" /></button>
        </div> 
        <button>Publicar</button>
      </div>       
    </section>
  </main>
    `;
  containerWall.innerHTML = wallPost;

  containerWall.querySelector('#newPost').addEventListener('click', () => {
    const postBox = containerWall.querySelector('#postModal');
    postBox.style.display = 'block';
  });

  containerWall.querySelector('#logout').addEventListener('click', () => {
    logOut();
  });
  return containerWall;
};
