var Name = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signbtn = document.getElementById('signbtn');
var success = document.getElementById('sign-notify');
var btn = document.getElementById('btn');
var logemail = document.getElementById('logemail');
var logPassword = document.getElementById('logpassword');
var sign = document.getElementById('sign');
var users =[];



function add(){
    if(emailValidation() && nameValidation() && passwordValidation()){
        var user ={
            userName:Name.value ,
            userEmail : email.value,
            userPassword: password.value
        }
        users.push(user);
        localStorage.setItem('list',JSON.stringify(users));
        success.innerHTML='Signed-up successfully !'
        clear();
       
        

    }
    else{
        notValid();
    }
    

}
function clear(){
    Name.value='';
    email.value='';
    password.value='';
}


function nameValidation(){
    var regex =/[A-z][a-z]{3,}/
    return regex.test(Name.value);
}
function emailValidation(){
    var regex =/[a-z]{10,}(@)[a-z]{4,}(\.com)/
    return regex.test(email.value);
}
function passwordValidation(){
    var regex = /[a-z]{4,}[1-9]{2,}/
    return (regex.test(password.value));
}

function notValid(){
    if(!nameValidation()){
        if(Name.value==''){
            Name.nextElementSibling.innerHTML='Name is required';
        }
        else{
            Name.nextElementSibling.innerHTML='Enter a valid name';
        }
    }


    if(!emailValidation()){
        if(email.value==''){
            email.nextElementSibling.innerHTML='Email is required';
        
        }
        else{
            email.nextElementSibling.innerHTML='Enter a valid email';
        }
        
    }
  

    if(!passwordValidation()){
        if(password.value==''){
            password.nextElementSibling.innerHTML='Password is required';
        }
        else{
            password.nextElementSibling.innerHTML='Enter a valid Password';
        }
        
    }
    
}


function login(){
    var lstuser = JSON.parse(localStorage.getItem('list'));
    for(var i=0;i<lstuser.length;i++){
        if(lstuser[i].userEmail==logemail.value){
           
            sign.innerHTML='Login success';
        }
        else {
            sign.innerHTML='User doesnt exsist';
            }
        if(lstuser[i].userPassword==logPassword.value){
            

        }
        else {
            sign.innerHTML='Incorrect Password';
        }
        
    }

}