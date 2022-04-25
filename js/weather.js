var rowSize = 0;
var colSize = 0;

var cityId = 1735158;
var weatherApiKey = "556562c3999e43f022fb8fe32c665369";

var date;
var cityName;
var finalWeatherArr = [];

function showWeather() {
    findCurrentDate();
    requestWeatherData();

    // refresh weather data every half-an-hour / 1,800s
    setTimeout(function () {
        showWeather()
    }, 300000);
}

function requestWeatherData() {
    var weatherRequest = new XMLHttpRequest();
    weatherRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // TODO: Stuff
            parseWeatherData(weatherRequest.responseText);
            displayWeatherData();
        }
    }
    //open weather map api username: ozqogjgj@sharklasers.com
    weatherRequest.open("GET", `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${weatherApiKey}&units=metric`, true);
    weatherRequest.send();
}

function parseWeatherData(response) {
    finalWeatherArr = []

    var jsonResponse = JSON.parse(response);
    console.log(jsonResponse);

    // assign city name based on json response
    cityName = jsonResponse.city.name;
    document.getElementById("city-name").innerHTML = cityName;

    // filter out relevant weather data based on current date
    var listArr = jsonResponse.list;
    var listArrFilter = listArr.filter(function (data) {
        return data.dt_txt.includes(date);
    })

    for (i in listArrFilter) {
        this.finalWeatherArr.push({
            time: listArrFilter[i].dt_txt.substring(11, listArrFilter[0].dt_txt.length - 3),
            temp: parseFloat(listArrFilter[i].main.temp).toFixed(1) + "°C",
            weather: listArrFilter[i].weather[0].main
        });
    }
    console.log(finalWeatherArr);
}

function convertWeatherToIcon(arr, r) {
    var weather = arr[r].weather;
    switch (weather) {
        case 'Clouds':
            return '<img src="img/weather/clouds.png" width="80px" height="80px"/>';
            break;
        case 'Clear':
            return '<img src="img/weather/clear.png" width="80px" height="80px"/>';
            break;
        case 'Drizzle':
            return '<img src="img/weather/drizzle.png" width="80px" height="80px"/>';
            break;
        case 'Rain':
            return '<img src="img/weather/rain.png" width="80px" height="80px"/>';
            break;
        case 'Thunderstorm':
            return '<img src="img/weather/thunderstorm.png" width="80px" height="80px"/>';
            break;
        default:
            return '<img src="img/weather/placeholder.png" width="30px" height="30px"/>';
    }
}

function displayWeatherData() {
    var table, row;
    this.rowSize = finalWeatherArr.length;
    this.colSize = 3;

    table = document.createElement('table');
    table.border = "0";

    for (var r = 0; r < rowSize; r++) {
        row = document.createElement('tr');
        for (var key in finalWeatherArr[r]) {
            var column = document.createElement('td');
            column.style.paddingRight = "10px";
            if (key == "weather") {
                column.innerHTML = convertWeatherToIcon(finalWeatherArr, r);
            } else {
                column.appendChild(document.createTextNode(finalWeatherArr[r][key]));
            }
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    var div = document.getElementById("weather");
    div.innerHTML = "";
    div.appendChild(table);
}

function findCurrentDate() {
    var today = new Date();

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    date = `${yyyy}-${mm}-${dd}`
}
