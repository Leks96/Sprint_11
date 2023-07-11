"use strict"

const API_KEY = "316a64635e9786a91153abd5e28655cf";

const request = url => {
	return new Promise((resolve, reject) => {
		fetch(url).then(response => {
			if(response.ok) {
				resolve(response.json());
			} else {
				reject({
					error: 500
				});
			}
		}); 
	});
};

const weatherInfo = async (element, weather) => {
	try {
		let city = weather.querySelector("#city").value;
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
		let response = await request(url);
		element.innerText = JSON.stringify(response);
	}catch(err) {
	console.log(err);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	let weather = document.querySelector("#weather");
	weather.addEventListener("submit", (e) => {
	e.preventDefault();
	weatherInfo(document.querySelector("#result"), weather) 
	}, false);
});
