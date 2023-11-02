function validateEmail(){
  var email=document.getElementById('email').value;
  var error1=document.getElementById('err1');
  var emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if( email.match(emailregex)){
    error1.textContent="Email is valid";
    error1.style.color='green';
    return true;
  }
  else{
    error.textContent="Email is not valid";
    error.style.color='red';
    return false;
  }

}
 function validateMobileNumber(){
   var mob=document.getElementById('mobilenumber').value;
     var error2=document.getElementById('err2');
    var mobileregex=/^(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
   if(mob.match(mobileregex)){
     error2.textContent='Valid mobile number';
     error2.style.color='green';
     return true;
   }
   else{
     error2.textContent='Invalid mobile number.Please enter a valid mobile number';
     error2.style.color='red';
     return false;
   }
  }
  function validatePhoneNumber(){
    var phone=document.getElementById('phonenumber').value;
     var error3=document.getElementById('err3');
    var phoneregex=/^(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
   if(phone.match(phoneregex)){
     error3.textContent='Valid phone number';
     error3.style.color='green';
     return true;
   }
   else{
     error3.textContent='Invalid phone number.Please enter a valid phone number';
     error3.style.color='red';
     return false;
  }

  }
  function validatePassword(passw) {
    var passw=document.getElementById('passw');
    var error4=document.getElementById('err4');
    if (passw.length < 8) {
       error4.textContent='Password must be at least 8 characters long.';
       error4.style.color='red';
    }
    if (!/[A-Z]/.test(passw)) {
        error4.textContent= "Password must contain at least 1 uppercase letter.";
        error4.style.color='red';
    }
    if (!/[a-z]/.test(passw)) {
        error4.textContent= "Password must contain at least 1 lowercase letter.";
        error4.style.color='red';
    }
    if (!/\d/.test(passw)) {
        error4.textContent= "Password must contain at least 1 number.";
        error4.style.color='red';
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(passw)) {
        error4.textContent="Password must contain at least 1 special character.";
        error4.style.color='red';
    }
    else{
      error4.textContent='Password is valid';
      error4.style.color='green';
    }
}


function validateConfirmPassword(passw, conpassw) {
  var conpassw=document.getElementById('conpassw');
  var error5=document.getElementById('err5');
  if (confirmPassword.length === 0) {
      error5.textContent= "Confirm password field cannot be empty.";
      error5.style.color='red';
  }
  if (passw!== conpassw) {
      error5.textContent="Passwords do not match. Please enter the same password.";
      error5.style.color='red';

  }
  else{
  error5.textContent= "Passwords match.";
  error5.style.color='green';
}


}

