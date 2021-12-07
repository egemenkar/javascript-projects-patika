const userName = prompt("Lütfen adınızı yazınız");
const userNameEl = document.getElementById("myName");

userNameEl.innerText = userName;
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

showTime();
let currentTime = setInterval(showTime, 1000);

function showTime() {
  const time = new Date();
  const timeNow = ("0" + time.getHours()).slice(-2) + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2) + " " + days[time.getDay()];
  const timeEl = document.getElementById("myClock");
  timeEl.innerText = timeNow;
}

