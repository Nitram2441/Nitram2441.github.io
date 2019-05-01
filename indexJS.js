
function nameFunction() {
    var name = document.forms["myForm"]["fname"].value;
    var mail = document.forms["myForm"]["fmail"].value;
    var number = document.forms["myForm"]["fnumber"].value;
    var password1 = document.forms["myForm"]["fpassword1"].value;
    var password2 = document.forms["myForm"]["fpassword2"].value;

    var booleanThing = true;



    if (name === "" || mail === "" || number === "" || password1 === "" || password2 === "") {
        alert("All forms must be filled out")
        booleanThing = false;
    }

    if(name.search (/[0-9]/) !== -1){
        //alert("Name cannot contain a number!")
        document.getElementById("nameValidation").innerHTML = "Name cannot contain a number";
        booleanThing = false;
    }
    else{
        document.getElementById("nameValidation").innerHTML = "";
    }

    if(mail.search (/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === -1){
        //alert("Not a valid E-Mail adress!");
        document.getElementById("mailValidation").innerHTML = "Must be a valid E-Mail";
        booleanThing = false;
    }
    else{
        document.getElementById("mailValidation").innerHTML = "";
    }

    if (password1.length < 7 || password1.search(/[A-Z]/) === -1 || password1.search(/[a-z]/) === -1 || password1.search (/[0-9]/) === -1){
        //alert("Passwords must be at least 7 characters!");
        document.getElementById("password1Validation").innerHTML = "Must be at least 7 characters, must contain at least one lowercase letter, one upper case letter and one number";
        booleanThing = false;
    }
    else{
        document.getElementById("password1Validation").innerHTML = "";
    }

    if (password1 !== password2){
        //alert("Passwords are not identical!")
        document.getElementById("password2Validation").innerHTML = "Passwords are not identical!";
        booleanThing = false;
    }
    else{
        document.getElementById("password2Validation").innerHTML = "";
    }

    if (!isNumber(number) || number.length !== 8) {
        document.getElementById("mobileValidation").innerHTML = "Phone number must be 8 numbers";
        //alert("Number must not contain letters")
        booleanThing = false
    }
    else{
        document.getElementById("mobileValidation").innerHTML = "";
    }

    if(!booleanThing) {
        alert("Read the instruction and try again");
        return booleanThing;
    }
}

function isNumber(n) {
    return typeof (n) != "boolean" && !isNaN(n);
}


