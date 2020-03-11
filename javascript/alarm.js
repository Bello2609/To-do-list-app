//my alarm is here
//this is the identifier for the button
const button = document.getElementById("button");

const setAlarm = ()=>{
    //this is the date identifier
    let ms = document.getElementById("date and time").valueAsNumber;
    if(isNaN(ms)){
        alert("not a number");
        return;
    }
    let alarm = new Date();
    let alarmTime = new Date(alarm.getFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
    let differencesInMs = alarmTime.getTime() - (new Date()).getTime();
    if(differencesInMs < 0){
        alert("specifictime is passed !!!");
        return;
    }
     setTimeout(setAlarm, differencesInMs);
     

}