const imgList = document.querySelectorAll(".works-display li");
const WorksimgList = document.querySelectorAll(".works-display li img");
const worksList = document.querySelectorAll(".works-display");
const Xclick = document.querySelector(".closeX");
const lightBoxThumb = document.querySelector(".modal-content_thumb");
const lightBoxPrincipal = document.querySelector(".modal-content_principal-image");



Xclick.addEventListener("click", CloselightBox);
let i;
for (let i = 0; i < imgList.length; i++) {
    imgList[i].setAttribute("onclick", "slideAtual(" + (i+1)  + ")" );
    imgList[i].addEventListener("click", lightBox);
    imgList[i].setAttribute("id", "slide" + (i));
    lightBoxThumb.appendChild(imgList[i].cloneNode(true));
    lightBoxPrincipal.appendChild(WorksimgList[i].cloneNode(true));
    

    
}


function lightBox(event) {
  
    document.querySelector("#lightBoxModal").style.display = "block";
    
}



function slideNav(n){
    Slidesfunction(slideArray += n);
}

function slideAtual(n) {

    Slidesfunction(slideArray = n);
}

var slideArray = 1;
Slidesfunction(slideArray);


function Slidesfunction(n) {
    var j=0;
    var slides = document.querySelectorAll(".modal-content_principal-image img");
    var dots = document.querySelectorAll(".modal-content_thumb li");
    if (n > slides.length) {slideArray = 1}
    if (n <= 0) {slideArray = slides.length}
    for (j = 0; j < slides.length; j++) {
      slides[j].style.display = "none";
    }
    for (k = 0; k < dots.length; k++) {
      dots[k].classList.remove("active");
    }
    console.log(slideArray);
    

    slides[slideArray-1].style.display = "block";
    dots[slideArray-1].classList.add("active");
    

    
  }

function CloselightBox(){    
  var dots = document.querySelectorAll(".modal-content_thumb li");  
    for(l = 0; l < dots.length;l++){
      dots[l].classList.remove("active");
    }
    setTimeout($("#lightBoxModal").fadeOut("slow"), 2000);    
}