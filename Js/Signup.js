function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fullname = document.getElementById('fullname').value;
    var mobilenumber = document.getElementById('mobno').value;
    var error = document.getElementById('error');
    var emailRegex = /^\S+@\S+\.\S+$/;

    if (email === '' || !email.match(emailRegex)) {
        error.textContent = 'Please enter a valid email address.';
        return false;
    }



    if (fullname == '') {
        error.textContent = 'Please enter a valid name.';
        return false;
    }
    if (mobilenumber == '') {
        error.textContent = 'Please enter a valid mobilenumber.';
        return false;
    }
    if (mobilenumber.length != 10) {
        error.textContent = 'mobile number should be 10 digits.';
        return false;
    }
    if (password.length < 8) {
        error.textContent = 'Password must be at least 8 characters long.';
        return false;
    }
    return true;
}
