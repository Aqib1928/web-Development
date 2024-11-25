const apiKey = 'ff57ad42117d1c17d5d2557e38caa11e'; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherDetails = document.getElementById('weatherDetails');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const errorMessage = document.getElementById('errorMessage');

searchBtn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (city === '') {
    showError('Please enter a city name.');
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error('City not found.');
    }

    const data = await response.json();
    showWeather(data);
  } catch (error) {
    showError(error.message);
  }
});

function showWeather(data) {
  errorMessage.classList.add('hidden');
  weatherDetails.classList.remove('hidden');

  cityName.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove('hidden');
  weatherDetails.classList.add('hidden');
}
