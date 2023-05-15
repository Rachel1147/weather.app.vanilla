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
function displayData(response) {
  console.log(response.data);

  let tempElement = document.querySelector("#temperature");
  tempElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "88724523008dc9e1be18f6eb6a959b67";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=${apiKey}`;
console.log(apiUrl);
axios.get(apiUrl).then(displayData);
