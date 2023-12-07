const apiKey = "c0db5bb41009f0573fcfdb2e3ecd0cf0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        alert("Invalid City Name");
    }else{
        var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmp/h";
    document.querySelector(".type").innerHTML = data.weather[0].main;
    document.querySelector(".pressure").innerHTML = data.main.pressure;
    document.querySelector(".minTemp").innerHTML = data.main.temp_min + "°c";
    document.querySelector(".maxTemp").innerHTML = data.main.temp_max + "°c";
    document.querySelector(".description").innerHTML = data.weather[0].description;

    if(data.weather[0].main == "Clouds"){
       weatherIcon.src = "assests/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assests/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assests/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assests/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assests/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
} )