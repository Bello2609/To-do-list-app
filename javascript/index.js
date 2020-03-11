// this works for the nav @ media screen
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });
});
//the styling for the index page begins
function getDate(){
    // this is for the date
    const date = document.querySelector("b");
    let current_date = new Date();
    date.innerHTML = current_date.toDateString();
}
getDate();
const getTime = ()=> {
    //this is for the time
    const time = document.querySelector("strong");
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if(h == 0){
        h = 12;
        
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;  
    
    let time_time = h + ":" + m + ":" + s + "" + session;
    
    time.innerText = time_time;
    // time.textContent = time_time;
    setTimeout(getTime, 1000);
    
}
getTime();

//this will allow the modal to pop up
const button_create = document.getElementById("button-create");
const modal = document.querySelector(".modal");

button_create.addEventListener("click",()=>{
    modal.classList.add("open");
});
//when the cancel button is clicked the modal will fade off
const clear = document.querySelector("#clear");
clear.addEventListener("click", ()=>{
    modal.classList.remove("open");
});