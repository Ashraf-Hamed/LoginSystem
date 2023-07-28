var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPassword = document.getElementById('signUpPassword');
var signUpError = document.getElementById('signUpError');
var signupBtn = document.getElementById('signupBtn');
let icon = document.querySelector(".icon");
var errorShow = document.querySelector(".errorShow");



let mainArray = [];
let mainObject = {};

if (localStorage.getItem('newUser') != null) {
    mainArray = JSON.parse(localStorage.getItem("newUser"));
}


signupBtn.addEventListener('click', function() {
    

   if (NameRegex() && EmailRegex() && passwordRegex() == true) {

    mainObject =  {
        objName  : signUpName.value ,
        objEmail : signUpEmail.value ,
        objPassword : signUpPassword.value ,
    }

    mainArray.push(mainObject);
    localStorage.setItem('newUser' , JSON.stringify(mainArray));
    Clear()
    location.href = '../index.html'

    
   }
    else {
        notValidation()
    }
});



function Clear() { 
    signUpName.value  = ''
    signUpEmail.value = '' 
    signUpPassword.value = '' 
}


icon.addEventListener('click', function() {
  if (signUpPassword.type ==  'password')  {
    signUpPassword.type  = 'text' ;
    icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
  }else {
    signUpPassword.type  = 'password' ;
    icon.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
})



// validate 

function  NameRegex() {
    var regex = /^[A-Z][\w]{1,15}$/
    console.log(regex.test(signUpName.value));
    return (regex.test(signUpName.value))
}

function  EmailRegex() {
    var regex = /^[A-z]*\.?\w*@\w*\.com$/
    console.log(regex.test(signUpEmail.value));
    return (regex.test(signUpEmail.value))
}

function  passwordRegex() {
    var regex =  /^[A-Z]+[\w]{5,}$/
    console.log(regex.test(signUpPassword.value));
    return (regex.test(signUpPassword.value))
}

// not validate 

function notValidation() {
    if (NameRegex()) {
        if(signUpName.value == ' ' ) {
           console.log( signUpError.innerHTML = 'Name is required');
        }else {

           console.log( signUpError.innerHTML = "Not Matching Name , please enter With Capital letter and [2:10] Small letters");
          
        }
    }
    else if (EmailRegex()) {
        if(signUpEmail.value == '') {
            signUpError.innerHTML = 'Email is required'
        }
        else 
        {
            signUpError.innerHTML = "Please enter a valid email such as test@test.com"
        }
    }
    else if (passwordRegex()) {
        if(signUpPassword.value == '') {
            signUpError.innerHTML = 'Password is required'
        }
        else 
        {
            signUpError.innerHTML = "Please enter letter or number"
        }
}
}