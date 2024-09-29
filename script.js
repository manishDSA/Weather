const APIKEY="97db28377bd444a31c95366dbd7ea4f0";

async function getWeather() {

    const city = document.getElementById('cityInput').value;
  
  try {
    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}
`)
if (!response.ok) {
    throw new Error(`HTTP error! Status : ${response.status}`);
    
    
}
  let jsonresponse =await response.json();

  console.log(jsonresponse);
  displayWeather(jsonresponse);
  } catch (error) {
   console.error("Failed to fetch Weather data",error);

   alert("Failed to fetch Weather data")
    
  }
   
    
}

function displayWeather(data) {
    
    const{main:{temp,humidity,feels_like},weather, wind: {speed},sys:{country},name}= data;
    const [{main: weatherMain ,description,icon}]=weather;

if (data.cod !==200) {

    weatherDisplay.innerHTML =`<p> Error: ${data.message}</p>`;
    return;
    
}

const weatherHTML = 
`<h2>weather in ${name},${country}</h2>
<p>Tempreture: ${temp}°C</p>
<p>Tempreture feels_like: ${feels_like}°C</p>

<p>weather: ${weatherMain} (${description})</p>
<p>Humidity: ${humidity}%</p>
<p>Wind Speed: ${speed} m/s</p>
<img src=https://openweathermap.org/img/w/${icon}.png alt="weather app">

`;

weatherDisplay.innerHTML=weatherHTML;
}