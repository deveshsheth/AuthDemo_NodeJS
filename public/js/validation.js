//Regex formats
var phoneFormat = /^[6-9]{1}[0-9]{9}$/;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var nameFormat = /^[a-zA-Z]*$/g;


//Checkbox1
function showPassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    setTimeout(() => {
      var cb1 = document.getElementById("cb1");
      cb1.checked = false;
      x.type = "password";
    }, 300);
  } else {
    x.type = "password";
  }
}

//Checkbox2
function showPassword2() {
  var x = document.getElementById("confirmPassword");
  if (x.type === "password") {
    x.type = "text";
    setTimeout(() => {
      var cb2 = document.getElementById("cb2");
      cb2.checked = false;
      x.type = "password";
    }, 300);
  } else {
    x.type = "password";
  }
}

function onNameChange(){
  var name = document.getElementById("name").value;
  if (name.length == "" ) {
    document.getElementById("name-err").innerHTML =
      "Please enter name.";
    return;
  }
  else if (!name.match(nameFormat)){
    document.getElementById("name-err").innerHTML =
      "Please enter valid name. It cannot have number";
  } else {
    document.getElementById("name-err").innerHTML = "";
  }
}


//Email onBlur
function onEmailChange(){
  if (document.getElementById("email").value.match(mailformat)) {
    document.getElementById("email-err").innerHTML = "";
  } else {
    document.getElementById("email-err").innerHTML =
      "Please enter valid email.";
  }
}

//Password onBlur
function onPasswordChange(){
  var password = document.getElementById("password").value;
  if (
    password.length < 6 ||
    /[A-Z]/g.test(password) == false ||
    /\d/g.test(password) == false
  ) {
    document.getElementById("password-err").innerHTML =
      "Password length should be atleast 6. <br /> Password should contain atleast one digit. <br /> Password should contain atleast one capital letter.  ";
  }
  else{
    document.getElementById("password-err").innerHTML ="";
  }
}

//ConfirmPassword onBlur
function onConfPasswordChange(){
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  if(password === confirmPassword){
    document.getElementById("confirmPassword-err").innerHTML = "";
  }
  else if(confirmPassword==""){
    document.getElementById("confirmPassword-err").innerHTML = "Please enter password."
  }
  else{
    document.getElementById("confirmPassword-err").innerHTML = "Password don't match.";
  }
}

//PhoneNumber onBlur
function onPhNumberChange(){
  var phoneNumber = document.getElementById("phoneNumber").value;  
  if (!phoneNumber.match(phoneFormat)) {
    document.getElementById("phoneNumber-err").innerHTML =
      "Invalid phone number. <br /> Must be 10 digit and start from 6 to 9.";
    return;
  } 
  else {
    document.getElementById("phoneNumber-err").innerHTML = "";
  }
}

//BirthDate onBlur
function onBirthDate(){
    var birthDate = document.getElementById("birthDate").value;  
    if (birthDate=="") {
      document.getElementById("birthDate-err").innerHTML =
        "Please Enter a BirthDate.";
      return;
    } 
    else {
      document.getElementById("birthDate-err").innerHTML = "";
    }
  }


//Whole form validation on click of submit button.
function validate() {
  document.getElementById("submit").addEventListener("click", function (event) {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phoneNumber = document.getElementById("phoneNumber").value;  

    // Name validation
    if (name.length == "" || !name.match(nameFormat)) {
      document.getElementById("name-err").innerHTML =
        "Please enter valid name.";
      event.preventDefault();
      return;
    } else {
      document.getElementById("name-err").innerHTML = "";
    }

    // Email validation
    if (document.getElementById("email").value.match(mailformat)) {
      document.getElementById("email-err").innerHTML = "";
    } else {
      document.getElementById("email-err").innerHTML =
        "Please enter valid email.";
      event.preventDefault();
      return;
    }

    // Password validation
    if (
      password.length < 6 ||
      /[A-Z]/g.test(password) == false ||
      /\d/g.test(password) == false
    ) {
      document.getElementById("password-err").innerHTML =
        "Password length should be atleast 6. <br /> Password should contain atleast one digit. <br /> Password should contain atleast one capital letter.  ";
      event.preventDefault();
      return;
    } else {
      document.getElementById("password-err").innerHTML = "";
    }

    // Confirm password validation
    if (confirmPassword == "") {
      document.getElementById("confirmPassword-err").innerHTML =
        "Confirm password cannot be empty.";
      event.preventDefault();
      return;
    } else if (password != confirmPassword) {
      document.getElementById("confirmPassword-err").innerHTML =
        "Password should match with confirmpassword.";
      event.preventDefault();
      return
    } else {
      document.getElementById("confirmPassword-err").innerHTML = "";
    }


    //Phone number validation
    if (!phoneNumber.match(phoneFormat)) {
      document.getElementById("phoneNumber-err").innerHTML =
        "Invalid phone number. <br /> Must be 10 digit and start from 6 to 9";
      event.preventDefault();
      return;
    } 
    else {
      document.getElementById("phoneNumber-err").innerHTML = "";
    }
  });
}

function changeEye2(){
    var x = document.getElementById("confirmPassword");
    if(x.type == "password"){
        x.type = "text";
        document.getElementById("eye2").className = "bi bi-eye";
    }
    else{
        x.type = "password";
        document.getElementById("eye2").className = "bi bi-eye-slash";
    }
}

function changeEye1(){
    var y = document.getElementById("password");
    if(y.type == "password"){
        y.type = "text";
        document.getElementById("eye1").className = "bi bi-eye";
    }
    else{
        y.type = "password";
        document.getElementById("eye1").className = "bi bi-eye-slash";
    }
}

function changeEye3(){
  var y = document.getElementById("password");
  if(y.type == "password"){
      y.type = "text";
      document.getElementById("eye3").className = "bi bi-eye";
  }
  else{
      y.type = "password";
      document.getElementById("eye3").className = "bi bi-eye-slash";
  }
}