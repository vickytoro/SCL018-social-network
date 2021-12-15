/* eslint-disable no-alert */
/* eslint-disable import/no-cycle */
import {
  deletePost, auth, editPost, likePost,
} from '../lib/index.js';

// Función para imprimir posts
export const printPosts = (array) => {
  const containerEmpty = document.querySelector('#containerPosts');
  containerEmpty.innerHTML = '';
  const viewPost = (element) => {
    const boxEmpty = `
      <div id="postModal" class="post-modal">
      <div class="user-post">
        <img class="img-user2" src="./imagenes/icons8usuarix.png" />
        <p class="img-user2-p">${element.data.name}</p>
      </div>
      <div class="post-buttons">
      <textarea id="titlePost-${element.id}" class="tittle-post2" readonly> ${element.data.title} </textarea>
      <textarea id="writePost-${element.id}" class="review-post2" readonly> ${element.data.description} </textarea>
      <div class="buttons">
        <button class="btn-like" value='${element.id}'><img class="like-post" src="./imagenes/like.png" />${element.data.likesCounter}</button>
        `;

    // Colita de los contenedores de los botones
    const boxEmptyTwo = `  
      </div> 
      </div>`;

    // Plantilla de botones para que se pueda editar y eliminar post
    let boxEmptyThree = '';
    if (element.data.userId === auth.currentUser.uid) {
      boxEmptyThree = `
          <div class="edit-post">
          <button id="btnImagePost" class="btn-image"> <img class="image-post" src="./imagenes/icons8imagen.png" /></button>
          <button class="btn-pencil" value='${element.id}' > <img class="pencil-post" src="./imagenes/icons8lapiz.png" /></button>
          <button class="btn-trash" id="btnTrash" value='${element.id}' > <img class="trash-post" src="./imagenes/icons8eliminar.png" /></button>
          <button class="btn-save" id='mr-${element.id}-save'>Guardar</button>
          </div>
          `;
    }

    containerEmpty.innerHTML += boxEmpty + boxEmptyThree + boxEmptyTwo;
  };
  array.forEach(viewPost);

  // Evento para borrar post
  const deleteButton = containerEmpty.querySelectorAll('.btn-trash');
  deleteButton.forEach((e) => {
    e.addEventListener('click', () => {
      // eslint-disable-next-line no-restricted-globals
      const confirmDelete = confirm('¿Estás seguro de eliminar este Post?');
      if (confirmDelete === true) {
        deletePost(e.value);
      }
    });
  });

  // Evento para editar post
  const updatePost = containerEmpty.querySelectorAll('.btn-pencil');
  updatePost.forEach((element) => {
    element.addEventListener('click', () => {
      const valueButton = element.value;
      const editDocTitle = containerEmpty.querySelector(`#titlePost-${valueButton}`);
      const editDocReview = containerEmpty.querySelector(`#writePost-${valueButton}`);
      editDocTitle.removeAttribute('readonly');
      editDocReview.removeAttribute('readonly');
      const saveValue = containerEmpty.querySelector(
        `#mr-${element.value}-save`,
      );
      saveValue.style.display = 'block';
      saveValue.addEventListener('click', () => {
        const title = editDocTitle.value;
        const description = editDocReview.value;
        editPost(element.value, title, description);
        saveValue.style.display = 'none';
        editDocTitle.setAttribute('readonly', 'readonly');
        editDocReview.setAttribute('readonly', 'readonly');
      });
    });
  });

  // Evento para dar likes
  const likeButton = containerEmpty.querySelectorAll('.btn-like');
  likeButton.forEach((e) => {
    e.addEventListener('click', () => {
      const likeValue = e.value;
      const userId = auth.currentUser.uid;
      likePost(likeValue, userId);
    });
  });

  containerEmpty.querySelector('#btnImagePost').addEventListener('click', () => {
    alert('En mantenimiento, estamos trabajando para usted :)');
  });

  return printPosts;
};
