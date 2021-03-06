

const chaveNoturno = document.querySelector("input[name=theme]");
const imgAboutme = document.querySelector(".about-me-img");
const darkModeTransition = document.querySelector("html");
const switchMode = document.querySelector(".switch");
console.log(darkModeTransition);
const emailIcon = document.querySelector("#emailIcon");
const phoneIcon = document.querySelector("#phoneIcon");
const linkedinIcon = document.querySelector("#linkedinIcon");
const gitIcon = document.querySelector("#gitIcon");

const cvPT = document.querySelector("#C1");
const cgPT = document.querySelector("#C2");
const cvEN = document.querySelector("#C3");
const cgEN = document.querySelector("#C4");

const MvtOnline = document.querySelector("#mvtOnlinepage");

if (localStorage .getItem("mode") == "true") {
    darkModeTransition.classList.remove(".htmlTransitionDark");
    
    chaveNoturno.checked = true;
    changeMode();
    



}

switchMode.addEventListener("onclick",changeMode);
chaveNoturno.addEventListener("change", changeMode);
addEventListener("load",function(){
    darkModeTransition.style.transition=" background-color 750ms, color 750ms, box-shadow 750ms";
});


function changeMode() {
    
    let mode = "",
        modeS = "light";
    if (chaveNoturno.checked) {
        mode = "dark";
        modeS = mode;
    }

    localStorage .setItem("mode", chaveNoturno.checked);
    document.documentElement.setAttribute("data-theme", modeS);
   
    imgAboutme.setAttribute("src", `img/aboutMe${mode}.svg`);
    emailIcon.setAttribute("src", `img/emailIcon${mode}.svg`);
    phoneIcon.setAttribute("src", `img/phoneIcon${mode}.svg`);
    linkedinIcon.setAttribute("src",`img/linkedinIcon${mode}.svg`);
    gitIcon.setAttribute("src",`img/gitIcon${mode}.svg`);
    cvPT.setAttribute("src", `img/cvPT${mode}.svg`);
    cgPT.setAttribute("src",`img/cgPT${mode}.svg`);
    cgEN.setAttribute("src", `img/grEN${mode}.svg`);
    cvEN.setAttribute("src",`img/cvEN${mode}.svg`);
    
    
}



    



