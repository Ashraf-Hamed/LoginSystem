var logInEmail = document.getElementById('logInEmail');
var logInPassword = document.getElementById('logInPassword');
var loginBtn = document.getElementById('loginBtn');

var icon = document.querySelector(".icon");
var errorShow = document.querySelectorAll(".errorShow");



let mainArray = [];

if (localStorage.getItem("newUser") != null) {
  mainArray = JSON.parse(localStorage.getItem("newUser"));
} 
else {

  loginBtn.addEventListener("click", () => {
    if (logInEmail.value != "" && logInPassword.value != "") {
      errorShow.innerHTML = "Email not found";
    }
  });
}


loginBtn.addEventListener('click', function() {

  var myarray = [];
  var myObject = {} ;


    if (logInEmail.value != "" && logInPassword.value != "") {
      myObject = {
          email: logInEmail.value,
          password: logInPassword.value,
        };
        myarray.push(myObject);
      

        for (var i = 0 ; i < mainArray.length ; i++)  {
            
          if ( mainArray[i].objEmail ==  myObject.email && mainArray[i].objPassword == myObject.password ) {
                localStorage.setItem("UserName", mainArray[i].objName);
                localStorage.setItem("isLogin", "true");
                location.href = "../mainPage.html";
                 
          } 
          else {
           
            if (mainArray[i].objEmail == myarray[0].logInEmail) {
              errorShow.innerHTML = "Wrong password";
              break;
            } 
            else {
              errorShow.innerHTML = "Email not found";
            }
          }
        }
        
    }
   
    else {   
    
      errorShow.innerHTML = "All inputs are required";
    }
  
})


icon.addEventListener('click', function() {
    if (logInPassword.type ==  'password')  {
      logInPassword.type  = 'text' ;
      icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }else {
      logInPassword.type  = 'password' ;
      icon.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
  })
  