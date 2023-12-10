function validateForm(event) {
     
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var error = document.getElementById('error');
    var emailRegex = /^\S+@\S+\.\S+$/;

    if (email === '' || !email.match(emailRegex)) {
      error.textContent = 'Please enter a valid email address.';
      return false;
    }

    if (password.length < 8) {
      error.textContent = 'Password must be at least 8 characters long.';
      return false;
    }
  }


  function redirectToSignUp() {
    window.location.href = "signup.html";
  }
