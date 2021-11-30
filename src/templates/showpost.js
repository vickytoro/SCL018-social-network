import { deletePost, auth } from '../lib/index.js';

export const printPosts = (array) => {
  console.log(array)
  const containerEmpty = document.querySelector('#containerPosts');
  containerEmpty.innerHTML = '';
  const viewPost = (element) => {
    const boxEmpty = `
      <div id="postModal" class="post-modal">
       <div class="user-post">
         <img class="img-user2" src="./imagenes/icons8usuarix.png" />
         <p>${element.data.name}</p>
       </div>
       <div class="post-buttons">
       <div id="titlePost" class="tittle-post"> ${element.data.title} </div>
       <div id="writePost" class="review-post"> ${element.data.description} </div>
      <div class="buttons">
        <button class="btn-like"> <img class="like-post" src="./imagenes/like.png" /></button>
        `;

      const boxEmptyTwo = `  
      </div> 
      </div>`;

      let boxEmptyThree = '';
        if (element.data.userId === auth.currentUser.uid){
          boxEmptyThree = `
          <div class="edit-post">
          <button class="btn-image"> <img class="image-post" src="./imagenes/icons8imagen.png" /></button>
          <button class="btn-pencil" > <img class="pencil-post" src="./imagenes/icons8lapiz.png" /></button>
          <button class="btn-trash" id="btnTrash" value='${element.id}' > <img class="trash-post" src="./imagenes/icons8eliminar.png" /></button>
          </div>
          `;
          
      }

    containerEmpty.innerHTML += boxEmpty + boxEmptyThree + boxEmptyTwo;
  };
  array.forEach(viewPost);

  const deleteButton = containerEmpty.querySelectorAll(".btn-trash");
  deleteButton.forEach((e) => {
    e.addEventListener("click", () => {
      const confirmDelete = confirm('¿Estás seguro de eliminar este Post?'); 
      if (confirmDelete == true){deletePost(e.value);}
    });
  });

  return printPosts;
};
