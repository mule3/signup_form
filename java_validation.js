// Get the form and error message div
const form = document.getElementById('signupForm');// Assuming the form has an ID of 'signupForm'
const errorMsg = document.getElementById('errorMsg');// Assuming the error message div has an ID of 'errorMsg'

// Listen for form submission
form.addEventListener('submit', function(event) {   
    event.preventDefault(); // Prevent form from submitting
    errorMsg.style.color = 'red';
    errorMsg.textContent = '';

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    

    // 1. First Name Validation
    // Check if first name is not empty and contains only letters
    if (!firstName) {
        errorMsg.textContent = 'First Name is required.';
        return;
    }
    if (!/^[A-Za-z]+$/.test(firstName)) {
        errorMsg.textContent = 'First Name must contain only letters.';
        return;
    }



    // 2. Last Name Validation
    // Check if last name is not empty and contains only letters
    if (!lastName) {
        errorMsg.textContent = 'Last Name is required.';
        return;
    }
    if (!/^[A-Za-z]+$/.test(lastName)) {
        errorMsg.textContent = 'Last Name must contain only letters.';
        return;
    }

    // 3. Email Validation
    // Check if email is not empty and is valid
    if (!email) {
        errorMsg.textContent = 'Email is required.';
        return;
    }
    if (!validateEmail(email)) {
        errorMsg.textContent = 'Please enter a valid email address.';
        return;
    }

    // 4. Phone Number Validation
    // Check if phone number is not empty and matches Ethiopian format
    if (!phone) {
        errorMsg.textContent = 'Phone Number is required.';
        return;
    }
    if (!validateEthiopianPhone(phone)) {
        errorMsg.textContent = 'Please enter a valid Ethiopian phone number.';
        return;
    }

    // 5. Password Validation
    // Check if password is at least 8 characters and meets complexity requirements
    if (!password) {
        errorMsg.textContent = 'Password is required.';
        return;
    }
    if (!validatePassword(password)) {
        errorMsg.textContent = 'Password must be at least 8 characters and include uppercase, lowercase, number, and special character.';
        return;
    }

    // 6. Confirm Password Validation
    // Check if confirm password matches password
    if (!confirmPassword) {
        errorMsg.textContent = 'Please confirm your password.';
        return;
    }
    if (password !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match.';
        return;
    }

    // If all checks pass, show success message
    errorMsg.style.color = 'green';
    errorMsg.textContent = 'Signup successful!';
    form.reset();// Reset the form after successful submission
    setTimeout(() => {
        errorMsg.textContent = '';
        errorMsg.style.color = 'red';
    }, 20000);
});

// Function to validate email format using a simple regex
function validateEmail(email) {
    // Checks for a basic email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to validate Ethiopian phone number
function validateEthiopianPhone(phone) {
    // Accepts +251XXXXXXXXX or 09XXXXXXXX
    return (/^(\+251|09)\d{8}$/).test(phone);
}

// Function to validate password complexity
function validatePassword(password) {
    // At least 8 chars, one uppercase, one lowercase, one number, one special char
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(password);
}

// Show/hide password functionality for password and confirm password fields
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Toggle password visibility for Password field
// When the eye icon is clicked, toggle between password and text input types
if (togglePassword) {
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.type === 'password' ? 'text' : 'password';

        passwordInput.type = type;
        // Optionally change icon if desired
        this.textContent = type === 'password' ? '👁️' : '🔐';
    });
}

// Toggle password visibility for Confirm Password field
if (toggleConfirmPassword) {
    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPasswordInput.type === 'password' ? 'text' : 'password';
        confirmPasswordInput.type = type;
        this.textContent = type === 'password' ? '👁️' : '🔐';
    });
}

