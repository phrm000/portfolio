const imgList = document.querySelectorAll(".works-display li");
const worksList = document.querySelectorAll(".works-display");
const Xclick = document.querySelector(".closeX");
const lightBoxThumb = document.querySelector(".modal-content_thumb");
const lightBoxPrincipal = document.querySelector(".modal-content_principal-image");

console.log(imgList);
Xclick.addEventListener("click", CloselightBox);

for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", lightBox);
    imgList[i].setAttribute("id", "slide" + (i + 1));

    lightBoxThumb.appendChild(imgList[i].cloneNode(true));
}

function lightBox(event) {
    const imgSelecionado = event.target;
    
    const imgSelecionadoLightbox = imgSelecionado.cloneNode(true);
    lightBoxPrincipal.appendChild(imgSelecionadoLightbox);
    document.querySelector("#lightBoxModal").style.display = "block";
   

    

}



function CloselightBox(){    
    setTimeout($("#lightBoxModal").fadeOut("slow"), 2000);    
}