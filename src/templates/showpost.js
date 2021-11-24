//import { readPost } from '../lib/index.js';

  export const printPosts = (array) => {
    console.log(array)
    //array.forEach(element => { 
    //  console.log(element.description)
      const containerEmpty = document.querySelector('#containerPosts');
      const viewPost = (element) => { 
        const boxEmpty = `
      <div id="postModal" class="post-modal">
      <div class="post-buttons">
       <textarea id="titlePost" class="tittle-post"> ${element.title} </textarea>
       <textarea id="writePost" class="review-post"> ${element.description} </textarea>
       <div class="buttons">
         <button class="btn-like"> <img class="like-post" src="./imagenes/like.png" /></button>
         <button class="btn-image"> <img class="image-post" src="./imagenes/icons8imagen.png" /></button>
         <button class="btn-pencil" > <img class="pencil-post" src="./imagenes/icons8lapiz.png" /></button>
         <button class="btn-trash" > <img class="trash-post" src="./imagenes/icons8eliminar.png" /></button>
       </div> 
      </div>
     `;
     containerEmpty.innerHTML += boxEmpty;
      };
    array.forEach(viewPost);
    return printPosts;
     
    };


