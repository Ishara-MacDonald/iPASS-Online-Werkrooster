function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      // tabcontent[i].style.pointer-events = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function validateLogin(){
  let usernameElement = document.getElementById("username").value;
  let passwordElement = document.getElementById("password").value;
  if(usernameElement === "" || passwordElement === ""){
    alert("Please enter your username and password");
  }else{
    localStorage.setItem('username', usernameElement);
    window.location.href = "werkrooster.html";
  }
}

function validateEmail() {
  let emailElement = document.getElementById("email").value;

  // var valid = emailValid(formData.email); // returns true if valid, false otherwise
  console.log(emailElement)
  console.log(emailValid(emailElement))
  if(emailElement ===""){
    alert("Please enter your email");
  }else{
    if(emailValid(emailElement)){
      window.location.href = "werkrooster.html";
    }else{
  
    }
  }  
  // emailElement.setAttribute("aria-invalid", !valid);
  // setElementBorderColour(emailElement, valid); // sets the border to red if second arg is false
};

function emailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
