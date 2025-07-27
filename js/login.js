let arrUsers = JSON.parse(localStorage.getItem("users"));

document.getElementById('signup').addEventListener("click", signUp);
document.getElementById('login').addEventListener("click", logIn);


function hidesTheLoginForm(form1, form2) { //פונקציה שמסתירה
    document.getElementById(form1).style.display = 'inline';
    document.getElementById(form2).style.display = 'none';
    document.getElementById("signUpMassage").innerText = "";
    document.getElementById("logInMassage").innerText = "";
}
window.onload = function () { //ברירת מחדל בטעינת הדף
    document.getElementById("Login-form").style.display = 'none';
    const logIn = document.getElementById("log");
    const signUp = document.getElementById("sign");
    logIn.addEventListener("click", () => { hidesTheLoginForm("Login-form", "register-form") });
    signUp.addEventListener("click", () => { hidesTheLoginForm("register-form", "Login-form") });
}

function signUp(event) {
    event.preventDefault();
    let nameSignUp = document.getElementById("namesignup").value;
    let emailSignUp = document.getElementById("emailsignup").value;
    let passwordSignUp = document.getElementById("passwordsignup").value;
    let newuser = {
        username: nameSignUp,
        email: emailSignUp,
        password: passwordSignUp
    };

    if (arrUsers == null) {
        arrUsers = [];
    }

    if (checkUser(nameSignUp, emailSignUp, passwordSignUp, arrUsers)) {
        arrUsers.push(newuser);
        localStorage.setItem("users", JSON.stringify(arrUsers));
        localStorage.setItem("localName", JSON.stringify(newuser.username));
        window.location.href = "../html/homepage.html";
    }
    return;
}

function logIn(event) {
    event.preventDefault();
    let emailLogIn = document.getElementById("emaillogin").value;
    let passwordLogIn = document.getElementById("passwordlogin").value;

    if (emailLogIn != "" || passwordLogIn != "") {
        if (arrUsers.find(element => (element.email == emailLogIn && element.password == passwordLogIn))) {
            localStorage.setItem("localName", ",");
            window.location.href = "../html/homepage.html";
        }

        else if (arrUsers.find(element => element.email == emailLogIn && element.password != passwordLogIn)) {
            document.getElementById("logInMassage").innerText = "The password you entered is incorrect"
        }

        else {
            document.getElementById("logInMassage").innerText = "You do not exist in the system, please sign up"
        }
    }

}

//בודק תקינות קלט
function checkUser(nameSignUp, emailSignUp, passwordSignUp, arrUsers) {
    if (emailSignUp.indexOf("@")==-1) {
        document.getElementById("signUpMassage").innerText = "The email is invalid";
        return false;
    }
   
    if (nameSignUp == "" || emailSignUp == "" || passwordSignUp == "") {
        document.getElementById("signUpMassage").innerText = "Some of the data is missing, please fill in all the data";
        return false;
    }

    if (arrUsers.find(element => element.email == emailSignUp)) {
        document.getElementById("signUpMassage").innerText = "The username exists in the system, please log in";
        return false;
    }

    return true;
}