const apiKey = '57eba25ba9a10b040642941f51ece165'
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const weatherIcon = document.querySelector('.weather-image i')

const searchInput = document.querySelector('.search-box input')
const searchButton = document.querySelector('.search-box button')

const weather = document.querySelector('.weather')
const error = document.querySelector('.error')

async function checkWeather(city) {
	const response = await fetch(apiURL + city + `&appid=${apiKey}`)
	if (response.status == 404) {
		error.style.display = 'block'
		weather.style.display = 'none'
	}

	const data = await response.json()
	console.log(data, 'data')

	document.querySelector('.city').innerHTML = data.name
	document.querySelector('.temp').innerHTML =
		Math.round(data.main.temp) + ' &#176'

	document.querySelector('.humidity').innerHTML =
		Math.round(data.main.humidity) + ' &#37'

	document.querySelector('.wind').innerHTML =
		Math.round(data.wind.speed) + ' m/s'

	if (data.weather[0].main == 'Clear') {
		weatherIcon.className = 'fa-solid fa-sun'
	} else if (data.weather[0].main == 'Rain') {
		weatherIcon.className = 'fa-solid fa-cloud-rain'
	} else if (data.weather[0].main == 'Mist') {
		weatherIcon.className = 'fa-solid fa-cloud-mist'
	} else if (data.weather[0].main == 'Drizzle') {
		weatherIcon.className = 'fa-solid fa-cloud-drizzle'
	} else if (data.weather[0].main == 'Clouds') {
		weatherIcon.className = 'fa-solid fa-cloud'
	}

	weather.style.display = 'block'
	error.style.display = 'none'
}

searchButton.addEventListener('click', () => {
	checkWeather(searchInput.value)
	searchInput.value = ''
})

searchInput.addEventListener('keydown', e => {
	if (e.keyCode === 13) {
		checkWeather(searchInput.value)
		searchInput.value = ''
	}
})
