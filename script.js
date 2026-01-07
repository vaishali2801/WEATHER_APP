const API_KEY = "5f2ff3ccf27a45d9a5b132242260401";

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter a city name";
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        result.innerHTML = `
            <img src="https:${data.current.condition.icon}" />
            <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
            <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
            <p><strong>Wind:</strong> ${data.current.wind_kph} km/h</p>
        `;
    } catch (error) {
        result.innerHTML = "Unable to fetch weather data";
    }
}
