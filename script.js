function welcomeMessage(){
    document.getElementById("welcomePopup").style.display = "block";
}


function closePopup(){
    document.getElementById("welcomePopup").style.display = "none";
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
