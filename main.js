var myInpt = document.getElementById('email');
var mybtn = document.querySelector('.arrow');
var warning = document.getElementById('warning');
var form = document.getElementById('form')
var danger = document.getElementById('danger');
danger.setAttribute('src','images/icon-error.svg');
danger.setAttribute('alt','error');
danger.style.display ='none';
mybtn.onmouseover = function(){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (myInpt.value.match(validRegex)) {
          return true;
        } else {
          warning.innerHTML = "Invalid email address!";
          danger.style.display ='block';
          return false;
        }  
}
