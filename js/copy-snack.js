const celText = document.querySelector('#celSnack');
const celBtnlogin = document.querySelector('#celCopy');
const celBtn = document.querySelector('.celCopy');
const celNumber = document.querySelector('#number');

const emailText = document.querySelector('#emailSnack');
const emailBtnlogin = document.querySelector('#emailCopy');
const emailBtn = document.querySelector('.emailCopy');
const emailAdress = document.querySelector('#number');



celBtn.addEventListener("click",snackShow);
emailBtn.addEventListener("click",snackShow);

celBtnlogin.addEventListener("click",snackShow);
emailBtnlogin.addEventListener("click",snackShow);

function snackShow(event){
    selecionadoCopy = event.target;

    if (selecionadoCopy.classList == 'celCopy' || selecionadoCopy.id == 'celCopy') {
        copyToClipboard('celNumber');
        var selecionadoCopyText = celText;
    }

    else if (selecionadoCopy.classList == 'emailCopy' || selecionadoCopy.id == 'emailCopy') {
        copyToClipboard('emailAdress');
       var selecionadoCopyText = emailText;
       
    }  
       
    console.log(selecionadoCopyText);
       
    
    
        selecionadoCopyText.classList.replace('snackbar-hidden','snackbar-show');
    setTimeout(function()
    {
        selecionadoCopyText.classList.replace('snackbar-show','snackbar-hidden'); 
    }, 2750);
}


function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }
  