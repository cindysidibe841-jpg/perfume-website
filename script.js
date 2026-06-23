// Show popup when website opens
window.onload = function(){
    document.getElementById("welcomePopup").style.display = "block";
};


// Close popup
function closePopup(){
    document.getElementById("welcomePopup").style.display = "none";
}


// Form Validation
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(name == ""){
        alert("Please enter your name");
        return false;
    }

    if(!emailPattern.test(email)){
        alert("Enter a valid email");
        return false;
    }

    if(phone == ""){
        alert("Please enter your phone number");
        return false;
    }

    if(gender == ""){
        alert("Please select gender");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}


function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(name == ""){
        alert("Please enter your name");
        return false;
    }

    if(!emailPattern.test(email)){
        alert("Enter a valid email");
        return false;
    }

    if(phone == ""){
        alert("Please enter your phone number");
        return false;
    }

    if(gender == ""){
        alert("Please select gender");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}
}
