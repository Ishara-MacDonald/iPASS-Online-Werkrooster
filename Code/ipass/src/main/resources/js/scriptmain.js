let welcomeUserElement = document.getElementById("welcomeUser")
let username = localStorage.getItem('username');

if(username !== null){
    welcomeUserElement.innerHTML=`Welcome ${username}`;
}

function checkIfLoggedIn(){
    if(username === null){
        window.location.href = "inlog.html";
    }
}

function loggedOut(){
    localStorage.removeItem('username')
}