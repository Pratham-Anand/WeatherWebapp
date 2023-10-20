const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '81fd283e94msh5c6cd1b156270d8p189bfcjsndc78192cbd89',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
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
        shanghaicloud_pct.innerHTML = result.cloud_pct
        shanghaitemp.innerHTML = result.temp
        shanghaifeels_like.innerHTML = result.feels_like
        shanghaihumidity.innerHTML = result.humidity
        shanghaimin_temp.innerHTML = result.min_temp
        shanghaimax_temp.innerHTML = result.max_temp
        shanghaiwind_speed.innerHTML = result.wind_speed
        shanghaisunrise.innerHTML = result.sunrise
        shanghaisunset.innerHTML = result.sunset
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
getkolkata("Kolkata")

const getlucknow = async (city) => {
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
        shanghaisunrise.innerHTML = result.sunrise
        shanghaisunset.innerHTML = result.sunset
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
        shanghaicloud_pct.innerHTML = result.cloud_pct
        shanghaitemp.innerHTML = result.temp
        shanghaifeels_like.innerHTML = result.feels_like
        shanghaihumidity.innerHTML = result.humidity
        shanghaimin_temp.innerHTML = result.min_temp
        shanghaimax_temp.innerHTML = result.max_temp
        shanghaiwind_speed.innerHTML = result.wind_speed
        shanghaisunrise.innerHTML = result.sunrise
        shanghaisunset.innerHTML = result.sunset
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
