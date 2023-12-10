function validateForm(event) {
    var fullname=document.getElementById('fullName').value;
    var contactnumber=document.getElementById('contactNumber').value;
   var email = document.getElementById('email').value;
   var dob=document.getElementById('dob').value;
   var address=document.getElementById('adress').value;
   var error = document.getElementById('error');
   var emailRegex = /^\S+@\S+\.\S+$/;

   if (!fullname || !contactnumber || !email || !dob || !address) {
    error.textContent = 'All fields are required.';
    return false;
}
   if (email === '' || !email.match(emailRegex)) {
     error.textContent = 'Please enter a valid email address.';
     return false;
   }

   if (contactnumber.length!=10) {
     error.textContent = 'Mobile Number Must be must be 10 Characters Long.';
     return false;
   }
   return true;
 }

