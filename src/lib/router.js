import { loginTemplate } from "../templates/login.js";
import { registerTemplate } from "../templates/register.js";

export const router = (hashtag) => {
  const rootBox = document.getElementById("root");
  rootBox.innerHTML = "";
    if (hashtag === "#/" || hashtag === "/" || hashtag === "#" || hashtag === ""){
        
    rootBox.appendChild(loginTemplate());
  } else if (hashtag === "#/login") {
    rootBox.appendChild(loginTemplate());
  } else if (hashtag === "#/register") {
    rootBox.appendChild(registerTemplate());
  } //else if (hash === "#/wallPage") {
  //rootBox.appendChild(wallPage());
//}
};




/*export const changeRoute = (hash) => {
    if (hash === '#/'){
        return showTemplate (hash)
    } else if (hash === '#/registry'){
        return showTemplate (hash)
    } else {
        return showTemplate (hash)
    }
}

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML= resgisterTemplate();   //que se pinte resgistrarse o login??

    switch (hash) {
        case '#/':
            containerRoot.appendChild(()); //aqui va el nodo??
            break;
        case '#/register':
            containerRoot.appendChild(());
            break;
        default:  
            containerRoot.innerHTML= */
