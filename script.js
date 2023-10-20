const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': ''
    }
};

const getWeather = async (city) => {
    cityname.innerHTML=city;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = result.wind_speed
        temphead.innerHTML=result.temp
        windhead.innerHTML=result.wind_speed
        timehead.innerHTML=result.sunrise
        // wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
const getshanghai = async (city) => {
    // shanghaicityname.innerHTML=city;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        shanghaicloud_pct.innerHTML = result.cloud_pct
        shanghaitemp.innerHTML = result.temp
        shanghaifeels_like.innerHTML = result.feels_like
        shanghaihumidity.innerHTML = result.humidity
        shanghaimin_temp.innerHTML = result.min_temp
        shanghaimax_temp.innerHTML = result.max_temp
        shanghaiwind_speed.innerHTML = result.wind_speed
        shanghaiwind_degrees.innerHTML = result.wind_degrees
        shanghaisunrise.innerHTML = result.sunrise
        shanghaisunset.innerHTML = result.sunset
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getshanghai("Shanghai")

const getkolkata = async (city) => {
    // shanghaicityname.innerHTML=city;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        kolkatacloud_pct.innerHTML = result.cloud_pct
        kolkatatemp.innerHTML = result.temp
        kolkatafeels_like.innerHTML = result.feels_like
        kolkatahumidity.innerHTML = result.humidity
        kolkatamin_temp.innerHTML = result.min_temp
        kolkatamax_temp.innerHTML = result.max_temp
        kolkatawind_speed.innerHTML = result.wind_speed
        kolkatawind_degrees.innerHTML = result.wind_degrees
        kolkatasunrise.innerHTML = result.sunrise
        kolkatasunset.innerHTML = result.sunset
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getkolkata("Kolkata")

const getlucknow = async (city) => {
    // lucknowcityname.innerHTML=city;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        lucknowcloud_pct.innerHTML = result.cloud_pct
        lucknowtemp.innerHTML = result.temp
        lucknowfeels_like.innerHTML = result.feels_like
        lucknowhumidity.innerHTML = result.humidity
        lucknowmin_temp.innerHTML = result.min_temp
        lucknowmax_temp.innerHTML = result.max_temp
        lucknowwind_speed.innerHTML = result.wind_speed
        lucknowwind_degrees.innerHTML = result.wind_degrees
        lucknowsunrise.innerHTML = result.sunrise
        lucknowsunset.innerHTML = result.sunset
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getlucknow("Lucknow")

const getwashington = async (city) => {
    // shanghaicityname.innerHTML=city;
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        washingtoncloud_pct.innerHTML = result.cloud_pct
        washingtontemp.innerHTML = result.temp
        washingtonfeels_like.innerHTML = result.feels_like
        washingtonhumidity.innerHTML = result.humidity
        washingtonmin_temp.innerHTML = result.min_temp
        washingtonmax_temp.innerHTML = result.max_temp
        washingtonwind_speed.innerHTML = result.wind_speed
        washingtonwind_degrees.innerHTML = result.wind_degrees
        washingtonsunrise.innerHTML = result.sunrise
        washingtonsunset.innerHTML = result.sunset
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getwashington("Washington")



submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi");
