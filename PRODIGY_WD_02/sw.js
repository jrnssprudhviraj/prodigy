let startTime, elapsedTime = 0, intervalId, laps = [];

const timeElem = document.getElementById("time");

function updateTime() {
  elapsedTime = Date.now() - startTime;

  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;

  timeElem.textContent = 
    minutes.toString().padStart(2, "0") + ":" 
    + seconds.toString().padStart(2, "0") + ":"
    + milliseconds.toString().padStart(3, "0");
  
  document.title = timeElem.textContent;
}

function startTimer() {
  startTime = Date.now();
  intervalId = setInterval(updateTime, 10);
}

function stopTimer() { 
  clearInterval(intervalId);
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  timeElem.textContent = "00:00:000";
  document.title = "Stopwatch";
  laps = [];
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  laps.push(timeElem.textContent);
  
  const li = document.createElement("li");
  li.innerText = laps[laps.length - 1];
  
  document.getElementById("laps").appendChild(li);
}

document.getElementById("start").addEventListener("click", startTimer); 
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("laps").addEventListener("click", recordLap);