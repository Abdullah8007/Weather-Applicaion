function Search() {
	city = document.getElementById('city').value
	cityName = document.getElementById('cityName')
	cityName.innerHTML = `${city}`

	API_Key = '217ef1ff44952357960e493d7f63137a';
	URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`;

	fetch(URL)
		.then(response => response.json())
		.then(data => {

			kelvin = data.main.temp
			celsius = kelvin - 273.15;

			humidity = data.main.humidity
			humid = document.getElementById('humidity')
			humid.innerHTML = `${humidity}`

			pressure = data.main.pressure
			pres = document.getElementById('pressure')
			pres.innerHTML = `${pressure}`

			temp = document.getElementById('temp')
			temp.innerHTML = `${celsius.toPrecision(2)}`;
			
		});
}