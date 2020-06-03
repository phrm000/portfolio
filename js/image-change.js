const mediaquerypc = window.matchMedia("(min-width: 57rem)");
const mediaquerycel = window.matchMedia("(max-width: 56rem)");

let adesivosPageImg = document.querySelector("#adesivosPageImg");
while(1){
 if (mediaquerypc.matches) {
    console.log("uau2");
    adesivosPageImg.setAttribute("src","img/adesivosPageImg.jpg");
  }

  if (mediaquerycel.matches) {
    console.log("uau3");
    adesivosPageImg.setAttribute("src","img/adesivosPageImgMobile.jpg");
  }
}