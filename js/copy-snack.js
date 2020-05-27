const celText = document.querySelector('#celSnack');
const celBtnlogin = document.querySelector('#celCopy');
const celBtn = document.querySelector('.celCopy');

const emailText = document.querySelector('#emailSnack');
const emailBtnlogin = document.querySelector('#emailCopy');
const emailBtn = document.querySelector('.emailCopy');


celBtn.addEventListener("click",snackShow);
emailBtn.addEventListener("click",snackShow);

celBtnlogin.addEventListener("click",snackShow);
emailBtnlogin.addEventListener("click",snackShow);

function snackShow(event){
    selecionadoCopy = event.target;

    if (selecionadoCopy.classList == 'celCopy' || selecionadoCopy.id == 'celCopy') {
        var selecionadoCopyText = celText;
    }

    else if (selecionadoCopy.classList == 'emailCopy' || selecionadoCopy.id == 'emailCopy') {
       var selecionadoCopyText = emailText;
       
    }  
       
        selecionadoCopyText.classList.replace('snackbar-hidden','snackbar-show');
    setTimeout(function()
    {
        selecionadoCopyText.classList.replace('snackbar-show','snackbar-hidden'); 
    }, 2750);
}