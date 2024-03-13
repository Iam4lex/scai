const menu = document.querySelector("#mobile-menu");

const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function myFunc(){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(document.getElementById('demo').checked == true){
        alert(username + '.. Your form is submited succefuly');
    }
    else{
        alert(username + ". Please agree to the terms and conditions before submiting your details");
    }
}

function myFunction(){
    if (password == '1234' && username == 'Alex'){
        alert('LogIn succesful');
        return false;
    }

    else{
        alert('Incorect username or password.');
    }
}

