function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    
    const isValidEmail = email.length > 3 && email.includes('@') && email.includes('.');
    
    if (isValidEmail) {
        emailError.textContent = '';
        emailSuccess.textContent = 'All good to go!';
    } else {
        emailError.textContent = 'Invalid email.';
        emailSuccess.textContent = '';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');
    
    const isValidPassword = password.length > 8;
    
    if (isValidPassword) {
        passwordError.textContent = '';
        passwordSuccess.textContent = 'All good to go!';
    } else {
        passwordError.textContent = 'Password must be more than 8 characters.';
        passwordSuccess.textContent = '';
    }
}

function submitForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const isValidEmail = email.length > 3 && email.includes('@') && email.includes('.');
    const isValidPassword = password.length > 8;

    if (isValidEmail && isValidPassword) {
        if (confirm('Do you want to proceed?')) {
            alert('Successful signup!');
        } else {
            document.getElementById('signupForm').reset();
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            document.getElementById('emailSuccess').textContent = '';
            document.getElementById('passwordSuccess').textContent = '';
        }
    } else {
        alert('Please correct the errors before submitting.');
    }
}