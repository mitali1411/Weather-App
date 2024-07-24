// let quote = document.querySelector('#quote');
let form = document.querySelector('form');
let input = document.querySelector('input');
let temp = document.querySelector(".display-4");
let city = document.querySelector(".display-5");
let card = document.querySelector('#weather-card');
let icon = document.querySelector('img');
let p = document.querySelector('p');
let humidity = document.querySelector('.humidity');
let wind_kph = document.querySelector('.wind_kph')

// const fetchQuote = async() => {
//     const response = await fetch('https://quotable.io/random');
//     const data = await response.json();
//     quote.innerText = data.content + " - " + data.author;
// }

// setInterval(()=>{
//     fetchQuote();
// }, 10000);


// Fetch Weather
const fetchWeather = async(e) => {
    e.preventDefault(e);
    
    try{
    const response =await fetch(`https://api.weatherapi.com/v1/current.json?key=6e91172024624538917115430241101&q=${input.value}&aqi=yes`);
    // const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=87a8eb3b673b40cb878184305242606&q=${input.value}&days=6&aqi=yes&alerts=yes`)

    const data = await response.json();

    temp.innerText = data.current.temp_c + ''+'°C';
    city.innerText = data.location.name;
    icon.setAttribute('src', data.current.condition.icon);
    p.innerText = data.current.condition.text;
    card.className = "";
    humidity.innerText = data.current.humidity + "%";
    wind_kph.innerText = data.current.wind_kph + " km/h";
    // h6.innerText = data.current.condition.text;
    }
    catch(error){
        return `Error : ${error.message}`;
    }

form.reset();
// fetchQuote();
};

form.addEventListener('submit', fetchWeather);