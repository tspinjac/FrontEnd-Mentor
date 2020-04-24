/* Email Regex */
/* function isValidEmail(emailText) {
    var regExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpr.test(emailText);
} */


/* $('#submit_btn').on('click', function() {
    console.log("OK");
    var emailText = $('#email').val();

    if (isValidEmail(emailText)) {
        $('.error_svg, .error_msg').css('display', 'none');

    } else {
        $('.error_svg, .error_msg').css('display', 'block');
        $("#name, #lastName, #email, #password").addClass("input_error_border");
    }
}); */


/* JS part 'stolen' from https://github.com/Diarrah, all credits to her -ps: ty D for ideas anc concepts */

function validateEmail(email) {
    let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(String(email).toLowerCase());
}

let form = document.querySelector('#form');
let fName = document.getElementById('firstName');
let lName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    let fNameVal = fName.value.trim();
    let lNameVal = lName.value.trim();
    let emailVal = email.value.trim();
    let passwordVal = password.value.trim();

    if (fNameVal === '') {
        setError(fName, 'First Name cannot be empty');
    } else { success(fName) };

    if (lNameVal === '') {
        setError(lName, 'Last Name cannot be empty');
    } else { success(lName) };

    if (emailVal === '') {
        setError(email, 'Email cannot be empty')
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Looks like this is not an email');
    } else { success(email) }

    if (passwordVal === '') {
        setError(password, 'Password cannot be empty');
    } else { success(password) };
}

function setError(message) {
    let upozoronje = document.querySelector('.error_msg');
    /*     formControl.className = 'form-control error'; */
    console.log(upozoronje.value);
    upozoronje.innerText = message;
}

function success(input) {
    let upozoronje = input.querySelector('.error_msg');
    /*     formControl.className = 'form-control error'; */
    upozoronje.innerText = '';
}