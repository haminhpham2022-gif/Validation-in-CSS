document.getElementById("registrationform").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmpassword = document.getElementById("confirmPassword").value.trim();

    const usernameerror = document.getElementById("usernameerror");
    const emailerror = document.getElementById("emailerror");
    const passworderror = document.getElementById("passworderror");
    const confirmpassworderror = document.getElementById("confirmPassworderror");

    usernameerror.textContent="";
    emailerror.textContent="";
    passworderror.textContent="";
    confirmpassworderror.textContent="";

    let isValid = true;

    if (username.length <3){
        usernameerror.textContent="Username must be atleast 3 characters long";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)){
        emailerror.textContent="Invalid E-mail adress";
        isValid = false;
    }

    const passwordPattern = /^(?=.*[0-9]).{6,}$/;
    if (!passwordPattern.test(password)){
        passworderror.textContent="Password must be at least 6 characters long and contain atleast one number"
        isValid = false;
    }

    if (password !== confirmpassword){
        confirmpassworderror.textContent="Passwords do not match";
        isValid = false;
    }

    if (isValid){
        alert("Registration successful");
    }
})