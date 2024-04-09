const apikey = "1f0af32c2e602574687ecc8ac6a73445";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbx = document.querySelector(".search input");
const button = document.querySelector(".search button");
const weathericon = document.querySelector(".weather_icon");

async function weather(city) {
  const response = await fetch(apiURL + city + `&appid=${apikey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "mist.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
button.addEventListener("click", () => {
  weather(searchbx.value);
});
