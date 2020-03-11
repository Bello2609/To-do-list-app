// here i will be the data in form of table
// my algorithm comes here
// this function will get data from the localstorage
const get_todos = ()=>{
  let todos = new Array();
  let todos_str = localStorage.getItem("todo");
  if(todos_str !== null){
    todos = JSON.parse(todos_str);
  }
  return todos;
}
//this function will show the data in the localstorage in table format
const show = ()=>{
  let todos = get_todos();
  let text = "";
  for(let i = 0; i < todos.length; i++){
      let allData = todos[i];
      let eventName = allData.Eventname;
      let location = allData.Location;
      let date = allData.Date;
      text += "<tr>";
      text += "<td>" + eventName + "</td>";
      text += "<td>" + location + "</td>";
      text += "<td>" + date + "</td>";
      text += "<td>" + "<button class='buttons' type='button'>Pending</button>" + "</td>";
      text += "<td>" + "<i id='remove' class='fas fa-trash-alt btndelete'></i>" + "</td></tr>";
  }
  //the data gotten from the localstorage will be here
  let table = document.querySelector("#table > tbody");
  table.innerHTML = text;
  //this is where the button background color will change
  window.addEventListener("load", ()=>{
    let tab = document.querySelector("#table");
    let buttons = Array.from(document.querySelectorAll(".buttons"));
    tab.addEventListener("click", (e)=>{
      console.log(e.target.className);
      if(e.target.className === "buttons"){
        let index = buttons.indexOf(e.target);
        changeBackground(e, index);
      }

      //this one is for the delete button
      if(e.target.tagName === "path"){
        deleteTodo(e)
      }
    });
    buttons.forEach((btn, index) =>{
      btn.className = sessionStorage.getItem(`background${index}`) || "buttons";
      btn.textContent = sessionStorage.getItem(`status${index}`) || "Pending"; //this is the initial textcontent 0f the button 
    });
  });
    const changeBackground = (e, index)=>{
      e.target.className += " change";
      e.target.textContent = "Completed";//this will be the textcontent of the button when it had been clicked;
      sessionStorage.setItem(`background${index}`, e.target.className);
      sessionStorage.setItem(`status${index}`, e.target.textContent);
    }
  }
  function deleteTodo(e){
    let row = e.target.parentElement.parentElement.parentElement;
    let eventName = row.children[0].textContent;
    let newDb = get_todos().filter(todo => todo.Eventname !== eventName);
    console.log(newDb);
    localStorage.setItem("todo", JSON.stringify(newDb));
    show();
  }
window.addEventListener("DOMContentLoaded", ()=>{
  show();  
});
