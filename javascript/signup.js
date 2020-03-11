// storing each of the id's in variable
var message = document.getElementById("message");
// the password validation
// when the user start to input into the password field this will happen
var password = document.querySelector("#password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
password.onfocus = ()=> {
    message.style.display = "block";
}
// validate when value are being entered into the field
password.onkeyup = ()=> {
    var lowerCaseLetter = /[a-z]/g;
    var test = password.value.match(lowerCaseLetter);
    if(test){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else{
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    // validate uppercase letter
    var upperCaseLetter = /[A-Z]/g;
    var test = password.value.match(upperCaseLetter);
    if(test){
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else{
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }
    // validate digit
    var numbers = /[0-9]/g;
    var test = password.value.match(numbers);
    if(test){
        number.classList.remove("invalid");
        number.classList.add("valid");
    }
    else{
        number.classList.remove("valid");
        number.classList.add("invalid");
    }
    // validate the length
    if(password.value.length >= 4){
        length.classList.remove("invalid");
        length.classList.add("valid"); 
    }
    else{
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
// store the variable here
// Get the form field value into a json and store it on the front end
var first_name = document.getElementById("first name");
var last_name = document.getElementById("last name");
var email = document.getElementById("email");
var password = document.getElementById("password");
let sign_up_button = document.getElementById("sign_up_button");
let form = document.getElementById("storage form");



let userDetails = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
//the function to convert the form value to an array
    function storeFormValue(e){
        var entriesJSON  = localStorage.getItem("users");
        var allData = JSON.parse(entriesJSON);
        var h6 = document.querySelector("h6");
        let formDetails = {
            id: Date.now(),
            firstname: first_name.value,
            lastname: last_name.value,
            email: email.value,
            password: password.value,
        }
        userDetails.push(formDetails);
        if(!entriesJSON){
            localStorage.setItem("users", JSON.stringify(userDetails));
            // pop up msg
            var msg = document.querySelector("h5");
            msg.textContent = "your account has been created successfully";
            setTimeout(function(){
                msg.style.display = "none"
            },5000);
            window.open("login.html");
        }
        else{
            //check if the email is registered
           for(var i = 0; i < allData.length; i++){
            var entry = allData[i];
            let email_email = entry.email;
            if(email_email == email.value){
                 //pop up msg
            msg.textContent = "the eamil has already been registered";
            setTimeout(function(){
                h6.style.display = "none"
            },3000);
                document.forms[0].reset();
                e.preventDefault();   
            }
            else if(email_email !== email.value){
                localStorage.setItem("users", JSON.stringify(userDetails)); 
                var h6 = document.querySelector("h6");
                h6.innerHTML = "your account has been created successfully";
            setTimeout(function(){
                msg.style.display = "none"
            },5000);
            window.open("login.html");
            }
           }
        }

    }
        //the button
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('sign_up_button').addEventListener('submit', storeFormValue);
        });