//import SQL from "cs50";
//enter minute, enter seconds
var TIME_LIMIT = 0;
const FULL_DASH_ARRAY = 94;
let timePassed = 1;
var timeLeft = 0;  // The largest round integer less than or equal to the result of time divided being by 60.
var fm = document.createElement("form");
var c = 0;

//const sqlite3 = require('sqlite3').verbose();
//var db = new sqlite3.Database('./pset8/goalAndtime.db');



function enteredMinSec(){
  var userMins = document.getElementById("usertime").value;
  let temp = userMins.split(":");
  let minute =  parseInt(temp[0], 10);
  let seconds = parseInt(temp[1], 10);
 TIME_LIMIT = minute * 60 + seconds;
  timeLeft = TIME_LIMIT;
//  alert(TIME_LIMIT);
}


function formatTimeLeft(time){
  const minutes = Math.floor(time / 60);

  // Seconds are the remainder of the time divided by 60 (modulus operator)
  let seconds = time % 60;

  // If the value of seconds is less than 10, then display seconds with a leading zero
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
  // The output in MM:SS format
//document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);

function startTimer(){
    timeLeft = TIME_LIMIT - timePassed;
    c = formatTimeLeft(timeLeft);
    if (TIME_LIMIT != 0)
    {
      document.getElementById("base-timer-label").innerHTML = c;
      timePassed = timePassed +=1;
    }
    if (timeLeft == 0)
    {
      clearInterval(test);
      document.getElementById("btime").value = "TRUE";
      fm.name = "fm";
      fm.id = "enter";

      var box = document.createElement("input");
      box.type = "radio";
      box.name = "choice";
      box.id = "choice1";
      box.className = "check";

      var label = document.createElement("label");
      label.htmlFor = "lab";
      label.appendChild(document.createTextNode("Productive"));

      var box2 = document.createElement("input");
      box2.type = "radio";
      box2.name = "choice";
      box2.id = "choice2";
      box2.className = "check";
      box2.value = "Unproductive";

      var label2 = document.createElement("label");
      label2.htmlFor = "lab1";
      label2.appendChild(document.createTextNode("Unproductive"));

  /*    box.type = "checkbox";
      box.name = "choice1";
      box.id = "choice1";
      box.className = "check";

      var label = document.createElement("label");
      label.htmlFor = "lab";
      label.appendChild(document.createTextNode("Productive"));

      var box2 = document.createElement("input");
      box2.type = "checkbox";
      box2.name = "choice2";
      box2.id = "choice2";
      box2.className = "check";

      var label2 = document.createElement("label");
      label2.htmlFor = "lab1";
      label2.appendChild(document.createTextNode("Unproductive"));*/

      var sub = document.createElement("input");
      sub.type = "submit";
      sub.value = "Submit";
      sub.id = "btn";

      fm.appendChild(box);
      fm.appendChild(label);
      fm.appendChild(box2);
      fm.appendChild(label2);
      fm.appendChild(sub);

  /*    var sub = document.createElement("input");
      sub.type = "submit";
      sub.value = "yes or no";
      fm.appendChild(inp);
      fm.appendChild(sub);*/
      var cont = document.getElementById("btime");

      fm.action = "/inside_goal";
      cont.appendChild(fm);


      document.getElementById("enter").onsubmit = function(){
          if(document.getElementById("choice1").checked){
              //add time limit to the productive time spent with corresponding goal name
              alert("choice1");
          }

          else if(document.getElementById("choice2").checked){
            alert("choice2");
          }
      }

    }
    setCircleDasharray();
}

var test =  setInterval(startTimer, 1000);


fm.onsubmit = function()
{
  if(box2.checked){
    alert("works");
  }
  else{
    alert("nope");
  }
}



const COLOR_CODES = {
  info:{
    color: "green"
  }
};

let remainingPathColor = COLOR_CODES.info.color;
document.getElementById("base-timer-path-remaining").style.color = remainingPathColor;

function calculateTimeFraction(){
  return timeLeft/TIME_LIMIT;
}

function setCircleDasharray(){
  const first = calculateTimeFraction() * FULL_DASH_ARRAY;
  const circleDasharray = `${first}, 94`;
    document.getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

