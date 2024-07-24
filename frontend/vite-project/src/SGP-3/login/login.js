document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Implement your login logic here
    console.log(`Username: ${username}, Password: ${password}, Role: ${role}`);
    
    // Dummy validation
    if (username === 'user' && password === 'pass' && (role === 'farmer' || role === 'customer')) {
        alert('Login successful!');
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('signupLink').addEventListener('click', function() {
    alert('Sign up functionality is not implemented.');
});

document.getElementById('forgotPasswordLink').addEventListener('click', function() {
    alert('Forgot password functionality is not implemented.');
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});
