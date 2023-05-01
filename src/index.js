//gets current day and time added to page

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = `${day}`;

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let currentHour = document.querySelector("#current-hour");
currentHour.innerHTML = `${hour}`;

let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let currentMinute = document.querySelector("#current-minute");
currentMinute.innerHTML = `${minute}`;
//
//
//
//

//function showCurrent(response) {
//let temp = document.querySelector("#temperature");
//let currentTemp = Math.round(response.data.main.temp);
//temp.innerHTML = `${currentTemp}`;
//let descriptionElement = document.querySelector("#description");
//let currentDescription = (response.data.main);
//}

//function search(event) {
///  event.preventDefault();
// let h1 = document.querySelector("#city");
// let cityInput = document.querySelector("#city-input");
//  let apiKey = "88724523008dc9e1be18f6eb6a959b67";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${apiKey}`;
// axios.get(apiUrl).then(showCurrent);
/// console.log(apiUrl);
//}

//let searchForm = document.querySelector("#search-form");
//searchForm.addEventListener("submit", search);
//
function showCurrent(response) {
  console.log(response.data);
}

let apiKey = "88724523008dc9e1be18f6eb6a959b67";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(showCurrent);
