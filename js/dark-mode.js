const chaveNoturno = document.querySelector('input[name=theme]');
const imgAboutme = document.querySelector('.about-me-img');

const emailIcon = document.querySelector('#emailIcon');
const phoneIcon = document.querySelector('#phoneIcon');
const linkedinIcon = document.querySelector('#linkedinIcon');
const gitIcon = document.querySelector('#gitIcon');

const cvPT = document.querySelector('#C1');
const cgPT = document.querySelector('#C2');
const cvEN = document.querySelector('#C3');
const cgEN = document.querySelector('#C4');

const Stickers = document.querySelector('#adesivosImg');
const MvtOnline = document.querySelector('#mvtOnlinepage');




chaveNoturno.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        Stickers.setAttribute("src","img/StickersDark.png");
        MvtOnline.setAttribute("src","img/movimentoOnlinePageDark.svg");
        imgAboutme.setAttribute("src","img/aboutMeDark.svg");
        emailIcon.setAttribute("src","img/emailIconDark.svg");
        phoneIcon.setAttribute("src","img/phoneIconDark.svg");
        linkedinIcon.setAttribute("src","img/linkedinIconDark.svg");
        gitIcon.setAttribute("src","img/gitIconDark.svg");    
        cvPT.setAttribute("src","img/cvPTDark.svg");
        cgPT.setAttribute("src","img/cgPTDark.svg");
        cvEN.setAttribute("src","img/cvENDark2.svg");
        cgEN.setAttribute("src","img/grENDark.svg");
        
        
        
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light');
        Stickers.setAttribute("src","img/Stickers.png");
        MvtOnline.setAttribute("src","img/MovimentoOnlinePage.svg");
        imgAboutme.setAttribute("src","img/aboutMe.svg");
        emailIcon.setAttribute("src","img/emailIcon.svg");
        phoneIcon.setAttribute("src","img/phoneIcon.svg");
        linkedinIcon.setAttribute("src","img/linkedinIcon.svg");
        gitIcon.setAttribute("src","img/gitIcon.svg");
        cvPT.setAttribute("src","img/cvPT.svg");
        cgPT.setAttribute("src","img/cgPT.svg");
        cvEN.setAttribute("src","img/cvEN.svg");
        cgEN.setAttribute("src","img/grEN.svg");
        
        

        
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}