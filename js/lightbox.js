const imgList = document.querySelectorAll(".works-display li");
const Xclick = document.querySelector(".closeX");
console.log(imgList);

for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", lightBox);
	imgList[i].setAttribute("id", "slide" + (i + 1));
}

function lightBox(event) {
    document.querySelector("#lightBoxModal").style.display = "block";

}

Xclick.addEventListener("click", CloselightBox);

function CloselightBox(event){
    setTimeout($("#lightBoxModal").fadeOut("slow"), 2000);
}