//events list
//json datatype inline datepicker
//var monthsJson = JSON.parse(monthEvents);
//var days = [];
//var year = [2022,2023,2024,2025,2026,2027,2028,2029,2030];
//COME BACK TO DATE FORMAT DISPLAY//
var todaysDate = moment().format("LLL"); 
console.log (todaysDate);
document.getElementById("currentDay").textContent= todaysDate;



//Locating current Time
var today = new Date();
var time = today.getHours();
console.log(time);

//document.getElementById("currentDay").textContent = time;
//highlight the hour representing the current time block 
//for (*) document.getElementsByClassName("container");

var timeBlock = document.getElementsByClassName("time-block");
//for (time in (timeBlock))
    //if ("timeBlock" > time)
    //time = "future";

var hoursBlocks = document.getElementsByClassName("hour");
for (let i=0;i<hoursBlocks.length;i++){
    var currentBlock = hoursBlocks[i]
    console.log(currentBlock)
    if (currentBlock.id == time){
        currentBlock.classList.add("present")
    }
    else if(currentBlock < time){
        currentBlock.classList.add("past")
    }  
    else {
        currentBlock.classList.add("future")
    }
}
