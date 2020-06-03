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

const Flyer = document.querySelector('#flyerImg');
const Stickers = document.querySelector('#adesivosImg');
const MvtOnline = document.querySelector('#mvtOnlinepage');

const mulherWork = document.querySelector('#workMulher');
const punkWork = document.querySelector('#workPunk');
const rockoutWork = document.querySelector('#workRockout');
const humanityWork = document.querySelector('#workHumanity');
const workoutWork = document.querySelector('#workWorkout');
const old1Work = document.querySelector('#workOld1');
const old2Work = document.querySelector('#workOld2');
const jungleWork = document.querySelector('#workjungle');
const babeWork = document.querySelector('#workBabe');
const sunWork = document.querySelector('#workSun');
const greenWork = document.querySelector('#workGreen');
const daVinciWork = document.querySelector('#workDavinci');


chaveNoturno.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark');
        mulherWork.setAttribute("src","img/mulherDark.png");
        punkWork.setAttribute("src","img/punkDark.png");
        rockoutWork.setAttribute("src","img/rockoutDark.png");
        humanityWork.setAttribute("src","img/humanityDark.png");
        workoutWork.setAttribute("src","img/workoutDark.png");
        old1Work.setAttribute("src","img/oldflyer1Dark.png");
        old2Work.setAttribute("src","img/oldflyer2Dark.png");
        jungleWork.setAttribute("src","img/jungleDark.png");
        babeWork.setAttribute("src","img/babeDark.png");
        sunWork.setAttribute("src","img/sunDark.png");
        greenWork.setAttribute("src","img/gogreenDark.png");
        daVinciWork.setAttribute("src","img/davinciDark.png");

        Flyer.setAttribute("src","img/collageDark.png");
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
        
        Flyer.setAttribute("src","img/collage.png");
        mulherWork.setAttribute("src","img/mulher.png");
        punkWork.setAttribute("src","img/punk.png");
        rockoutWork.setAttribute("src","img/rockout.png");
        humanityWork.setAttribute("src","img/humanity.png");
        workoutWork.setAttribute("src","img/workout.png");
        old1Work.setAttribute("src","img/oldflyer1.png");
        old2Work.setAttribute("src","img/oldflyer2.png");
        jungleWork.setAttribute("src","img/jungle.png");
        babeWork.setAttribute("src","img/babe.png");
        sunWork.setAttribute("src","img/sun.png");
        greenWork.setAttribute("src","img/gogreen.png");
        daVinciWork.setAttribute("src","img/davinci.png");

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