var city = document.querySelector(".city");
var country = document.querySelector(".country");
var temperature = document.querySelector(".temperature span:first-child");
var time = document.querySelector(".time");
var desc = document.querySelector(".short-desc");
var visi = document.querySelector(".visibility span:last-child");
var wind = document.querySelector(".wind span:last-child");
var cloud = document.querySelector(".cloud span:last-child");
var search = document.querySelector("#search-btn");
function getWeather(input) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  const res = fetch(url)
    .then((response) => response.json())
    .then((data) => changeWeatherUI(data));
}
function changeWeatherUI(weather) {
  city.innerHTML = weather.name;
  country.innerHTML = weather.sys.country;
  temperature.innerText = weather.main.temp;
  weather.main.temp >= 18;
  time.innerHTML = new Date().toLocaleString();
  weather.main.temp >= 18
    ? (document.body.className = "hot")
    : (document.body.className = "cold");
  desc.innerHTML = weather.weather[0].main;
  visi.innerText = weather.visibility + " (m)";
  wind.innerText = weather.wind.speed + " (m/s)";
  cloud.innerText = weather.clouds.all + " (%)";
}
getWeather("ha noi");
search.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    getWeather(e.target.value);
  }
});
