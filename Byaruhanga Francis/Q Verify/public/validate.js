const Validate = ()=>{
    //picking input fields and their names
    let firstName = document.signup.firstname

    //picking error fields
    let firstnameerror = document.getElementById("firstnameerror")

    //Validating firstName emptiness
    if (firstName.value=="") {
        firstName.style.border="1px solid red"
        firstnameerror.innerHTML="First name cannot be empty"
        firstName.focus()
        return false;
    }
    else if(firstName.value.length<5){
        firstName.style.border="1px solid red"
        firstnameerror.innerHTML="First name must be above 2 Characters"
        firstName.focus()
        return false;
    }
    else if(firstName.value.length>50){
        firstName.style.border="1px solid red"
        firstnameerror.innerHTML="First name must be below 255 Characters"
        firstName.focus()
        return false;
    }
    else{
        firstName.style.border="1px solid green"
        firstnameerror.innerHTML=""
        return true;
    }

}