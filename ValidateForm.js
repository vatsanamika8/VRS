

function validateName(form){
    var regex = /^[a-zA-Z ]+$/;
    if(regex.test(form.name.value) == false){
    alert("Name must be in alphabets only");
    return false;
}
    if(form.name.value == " "){
      alert("Name Field cannot be left empty");
      return false;
    }
    return form.name.value
  }
  function validateAddress(form){
    var address = /^[a-zA-Z0-9,./ ]{7,250}/;
    if(address.test(form.address.value)){
        return form.address.value;
    }
    else{
        alert("This is not a valid address");
        return false;
    }
    return true
}

function validateCity(form){
    var city = /^[a-zA-Z]{5,15}/;
    if(city.test(form.city.value)){
        return form.city.value;
    }
    else{
        alert("This is not a valid city");
        return false;
    }
}
function validateMail(form)
{
    var mail= /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,4}$/
    if(mail.test(form.email.value)){
        return form.email.value;
    }
    else
    {
        alert("Input valid mail");
        return false;

    }

}

function validatePassword(form){
    pwd1 = form.pwd1.value;
    pwd2 = form.pwd2.value;
    var passw=   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(pwd1.match(passw)) {
        if (pwd1 === pwd2)
            return pwd1;
        else{
        alert("Password doesnt match")
        return false
        }
    }
    else{
    alert("Try another password")
    return false
    }
}

function validateGender(form){
    gender_female = form.gender_female.checked
    gender_male = form.gender_male.checked
    if(!gender_female && !gender_male){
        alert("select gender")
    }
    if(gender_female){

        return "Female"
    }else if(gender_male){
        return "Male"
    }
    else{
        return false;
    }
}

function validateAgree(form)
{
    if(form.agree.checked)
    {
        return true
    }
    document.getElementById("agreed").innerHTML = "Please Agree!"
}


function postRequest(checkName , checkAddress , checkCity , checkMail , checkPassword , checkGender ){
    axios.post("http://localhost:1337/Registrations", {
        "Name": checkName,
        "Address": checkAddress,
        "City" : checkCity,
        "Gender" : checkGender,
        "Email" :checkMail,
        "Password": checkPassword
    }).then(function(response){
        console.log(response.data);
    })
}

function loginUser(checkMail,checkPassword)
{
    axios.post("http://localhost:1337/Logins",{
        "Email": checkMail,
        "Password": checkPassword
    }).then(function(response)
    {
        console.log(response.data);
    })
}


function validateForm()
{
    form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
    });
    var checkName = validateName(form);
    var checkAddress = validateAddress(form)
    var checkCity = validateCity(form)
    var checkMail=validateMail(form)
    var checkPassword = validatePassword(form)
    var checkGender = validateGender(form)
    var checkAgree= validateAgree(form)
    if(checkName && checkAddress && checkCity && checkMail && checkPassword && checkGender && checkAgree){
        // window.location.href = "http://127.0.0.1:5500/Login.html"
        postRequest(checkName , checkAddress , checkCity , checkMail , checkPassword , checkGender)
        loginUser(checkMail, checkPassword)
    }

}