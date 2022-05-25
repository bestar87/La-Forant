let validation = () => {
    let message = [];
    let uname = document.getElementById('username');
    let password = document.getElementById('password');
    let passwordConfirmation = document.getElementById('passwordConfirmation');
    let email = document.getElementById('email');
    let DoB = document.getElementById('dob');
    let nationality = document.getElementById('nationality');
    let agreement = document.getElementById('agreement');
    

    emailValidation(email,message);
    unameValidation(uname,message);
    passwordValidation(password,message);
    confirmPassword(passwordConfirmation,message);
    dobValidation(DoB,message);
    nationalityValidation(nationality,message);
    agreementValidation(agreement,message);
    if(message.length === 0){
        alert('Pre-Registration is sucessfully completed!');
    }
    else{
        alert(message.join('\n'));
    }
}

let emailValidation = (email,message) => {
    if(!email.value){
        message.push('Email cannot be blank');
    }
    else if((email.value.indexOf('@') + 1 ) === email.value.indexOf('.')){
        message.push("Email is invalid (it must be xxxx@blabla.com)");
    }
    else if(!email.value.endsWith('.com')){
        message.push('Email must end with .com');
    }
}

let unameValidation = (uname, message) =>{
    if(!uname.value){
        message.push('Username cannot be blank');
    }
    else if(uname.value.length < 7){
        message.push('Username length cannot be less than 7');
    }
}

let passwordValidation = (password,message) => {
    if(!password.value){
        message.push('Password cannot be blank');
    }
    else if(password.value.length < 5 || password.value.length > 20){
        message.push('Password length cannot be less than 5 or more than 20');
    }
    else if(password.value.search(/[0-9]/) < 0 || password.value.search(/[A-Z]/i) < 0 || password.value.search(/[a-z]/i) < 0){
        message.push('Password must contain AT LEAST one numeric value, one lowercase letter, and one uppercase letter');
    }

}

let confirmPassword = (passwordConfirmation,message) => {
    if(!passwordConfirmation.value){
        message.push('Password Confirmation cannot be blank');
    }
    else if(passwordConfirmation.value != password.value){
        message.push('Your Password and Password Confirmation don\'t match');
    }
}

let dobValidation = (DoB,message) => {
    if(!DoB.value){
        message.push("Date of Birth cannot be blank");
    }
}

let nationalityValidation = (nationality,message) => {
    if(!nationality.value){
        message.push('Nationally is not selected yet');
    }
}

let agreementValidation = (agreement,message) => {
    if(!agreement.checked){
        message.push('You need to agree with our terms and conditions to do a Pre-Registration');
    }
}