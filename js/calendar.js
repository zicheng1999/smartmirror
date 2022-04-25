let calendarId = "fypsmartmirror4.0@gmail.com";
let calendarApiKey = "AIzaSyAZUUdc0Htfa5NRG2v_JYTzC0dQE2BJktE";

var calendarEmail;
var calendarEventsArr;

function showCalendar() {
    requestCalendarData();

    // refresh every 10m
    setTimeout(function () {
        showCalendar()
    }, 60000);
}

function requestCalendarData() {
    var calendarRequest = new XMLHttpRequest();
    calendarRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            parseCalendarData(calendarRequest.responseText);
            displayCalendarData();
        }
    };
    calendarRequest.open("GET", `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${calendarApiKey}&singleEvents=true&orderBy=startTime&maxResults=10`, true);
    calendarRequest.send();
}

function parseCalendarData(response) {
    calendarEventsArr = [];

    var jsonResponse = JSON.parse(response);
    console.log(jsonResponse);

    // assign calendar email to variable
    calendarEmail = jsonResponse.summary;

    // filter out calendar events from json response
    var eventItems = jsonResponse.items;
    for (i in eventItems) {
        this.calendarEventsArr.push({
            startDate: eventItems[i].start.date ?? removeTime(eventItems[i].start.dateTime),
            eventName: eventItems[i].summary
        })
    }

    console.log(calendarEventsArr);

}

function removeTime(string) {
    return string.substring(0, string.indexOf('T'));
}

function displayCalendarData() {
    
    calendar.innerHTML = "";

    // show calendar email
    calendar.appendChild(document.createTextNode(calendarEmail));

    // create calendar table
    var rowSize = calendarEventsArr.length;
    var colSize = 3;
    var table = document.createElement('table');
    table.border = "0";
    table.style.marginTop = "5px";

    for (var r = 0; r < rowSize; r++) {
        var row = document.createElement('tr');

        var firstCol = document.createElement('td');
        firstCol.innerHTML = "<img src='img/cld.png' width='35px' height='35px' style='margin-bottom: 8px;'>";
        firstCol.style.paddingRight = "10px";
        row.appendChild(firstCol);

        for (var key in calendarEventsArr[r]) {
            var column = document.createElement('td');
            if (key == "startDate") {
                column.appendChild(document.createTextNode(calendarEventsArr[r][key]));
            } else if (key == "eventName") {
                column.appendChild(document.createTextNode(calendarEventsArr[r][key]));
            }
            column.style.paddingRight = "10px";
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    
    calendar.appendChild(table);
}