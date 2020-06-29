const chaveNoturno = document.querySelector("input[name=theme]");
const imgAboutme = document.querySelector(".about-me-img");

const emailIcon = document.querySelector("#emailIcon");
const phoneIcon = document.querySelector("#phoneIcon");
const linkedinIcon = document.querySelector("#linkedinIcon");
const gitIcon = document.querySelector("#gitIcon");

const cvPT = document.querySelector("#C1");
const cgPT = document.querySelector("#C2");
const cvEN = document.querySelector("#C3");
const cgEN = document.querySelector("#C4");

const MvtOnline = document.querySelector("#mvtOnlinepage");

document.addEventListener("DOMContentLoaded", checkMode);
chaveNoturno.addEventListener("change", changeMode);

function changeMode() {
    let mode = "",
        modeS = "light";
    if (chaveNoturno.checked) {
        mode = "dark";
        modeS = mode;
    }

    localStorage.setItem("mode", chaveNoturno.checked);
    document.documentElement.setAttribute("data-theme", modeS);
    if (document.documentURI.split("/")[4] == undefined) {
        imgAboutme.setAttribute("src"," img/aboutMe" + mode + ".svg");
        emailIcon.setAttribute("src",` img/emailIcon${mode}.svg`);
        phoneIcon.setAttribute("src", `img/phoneIcon${mode}.svg`);
        linkedinIcon.setAttribute("src", `img/linkedinIcon${mode}.svg`);
        gitIcon.setAttribute("src", `img/gitIcon${mode}.svg`);
        cvPT.setAttribute("src",` img/cvPT${mode}.svg`);
        cgPT.setAttribute("src",` img/cgPT${mode}.svg`);
        cgEN.setAttribute("src",` img/grEN${mode}.svg`);
        cvEN.setAttribute("src", `img/cvENDark${mode}.svg`);
    }
}

function checkMode() {
    if (localStorage.getItem("mode") == "true") {
        chaveNoturno.checked = true;
        changeMode();
    }
}

