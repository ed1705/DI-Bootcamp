import axios from "axios"

navigator.geolocation.getCurrentPosition(positionSuccess, positionError)

function positionSuccess({ coords }) {
  getWeather(coords.latitude, coords.longitude)
  // console.log(coords.latitude);
}

function positionError() {
  alert(
    "There was an error getting your location. Please allow us to use your location and refresh the page."
  )
}


function getWeather(lat, lon) {
    axios
	.get("http://localhost:3001/weather", {
		params: {lat,lon}
	})
	.then(res => {
		console.log(res.data)
	})
}


	// axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${"0ed044c9d144ff02acfeaf1d9ee4ede7"}`)
