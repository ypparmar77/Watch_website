let hou = document.getElementById("hou");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let mor_nig = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 0 hour to 12 for 12-hour format

  hou.textContent = String(hours).padStart(2, "0");
  min.textContent = String(minutes).padStart(2, "0");
  sec.textContent = String(seconds).padStart(2, "0");
  period.textContent = mor_nig;
}, 1000);
