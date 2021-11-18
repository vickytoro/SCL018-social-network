import { logOut } from '../lib/index.js';

export const wallTemplate = () => {
  const containerWall = document.createElement('section');
  containerWall.className = 'wall-section';
  containerWall.id = 'wall-section';
  const wallPost = `
  <header>
    <figure class="header-wall">
      <img src="./imagenes/Degustando.png" />
      <img src="./imagenes/icons8usuarix.png" />
      <p>corre@example.com</p>      
    </figure>
    <button id="logout"> Cerrar sesión </button>
  </header>
  <main>
    <aside>
      <div>
         <img src= "./imagenes/icons8casa.png" />
         <a href="#/wallpage">Home</a>
      </div>
      <div>
         <img src= "./imagenes/icons8addnew.png" />
         <button>Agregar Reseña</button>
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
       <div>
         <input type="text" placeholder="Escribe tu reseña..." />
         <div>
           <button> <img src="./imagenes/like.png" /></button>
           <button> <img src="./imagenes/icons8imagen.png" /></button>
           <button> <img src="./imagenes/icons8lapiz.png" /></button>
         </div> 
       </div>       
    </section>
    <footer>
      <p class="authors"> @2021 Degustando Corea. Creado por Victoria Toro y Macarena Rivera.</p>
    </foote
  </main>
  
  `;
  containerWall.innerHTML = wallPost;

  containerWall.querySelector('#logout').addEventListener('click', () => {
    logOut();
  });

  return containerWall;
};
