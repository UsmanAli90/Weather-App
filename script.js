const apikey = "e74568b6811716bb1fbdc23952bc3abe";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        const weathericn = document.querySelector(".weather-icon");

        async function weathercheck(city) {
            const response = await fetch(apiurl + city + `&appid=${apikey}`)
            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else {
                var data = await response.json();
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
                if (data.weather[0].main == "Clouds") {
                    weathericn.src = "images/clouds.png"
                }
                else if (data.weather[0].main == "Clear") {
                    weathericn.src = "images/clear.png"
                }
                else if (data.weather[0].main == "Rain") {
                    weathericn.src = "images/rain.png"
                }
                else if (data.weather[0].main == "Drizzle") {
                    weathericn.src = "images/drizzle.png"
                }
                else if (data.weather[0].main == "Mist") {
                    weathericn.src = "images/mist.png"
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }

        }

        searchbtn.addEventListener('click', () => {
            weathercheck(searchbox.value);
        })