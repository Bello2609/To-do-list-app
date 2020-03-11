//this function will check for all the key in the localstorge
const button = document.getElementById("button");
const msg = document.querySelector("h5");

function getUserInfo(e){
    let email = document.getElementById("email");
    let password = document.getElementById("password")
    var entriesJSON = localStorage.getItem("users");
    if(!entriesJSON){
        alert("no item stored");
        e.preventDefault();
        return;
    }
    var allData = JSON.parse(entriesJSON);
    for(var i = 0; i < allData.length; i++){
        var entry = allData[i];
        var storedUserEmail = entry.email;
        var storedUserPassword = entry.password;
        if(email.value ==  storedUserEmail && password.value == storedUserPassword){
            window.open("index.html");
        }
         else{
            msg.textContent = "incorrect password and username";
            setTimeout(()=>{
                msg.style.display = "none";
            },3000);
        // }
    }
    
}
}
button.addEventListener("click", (e)=>{
    e.preventDefault();
    getUserInfo();
});
// function validlogin(event){
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     var entriesJSON = localStorage.getItem('allEntries');
//     if (!entriesJSON) {
//         alert("Nothing stored!");
//         event.preventDefault();
//         return;
//     }
//     var allEntries = JSON.parse(entriesJSON);
//     for (var i = 0; i < allEntries.length; i++) {
//         var entry = allEntries[i];
//         var storedUserName = entry.user;
//         var storedPassWord = entry.pass;
//         var storedEmailAddress = entry.email;
//         if (username == storedUserName && password == storedPassWord) {
//             alert("Successfully logged in!");
//             return;
//     }
//     alert('Invalid Username or Password! Please try again.');
//     event.preventDefault();
//     window.location="Login.html";
// }
// }