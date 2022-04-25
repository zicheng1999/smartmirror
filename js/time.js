// Show 0s when there is less than two digits
function displayZero(n) {

    if (n < 10) {
      n = "0" + n;
    }

    return n;
}

// Displays the clock on the webpage
function showDate() {

    var today = new Date();
    // assign date to variables dd, mm, yyyy
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth()) // January = 0
    var yyyy = today.getFullYear();
    var monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	// assign day 
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	
	var day = weekday[today.getDay()];

    // assign time values to variables h, m, s
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    // add a zero in front of numbers < 10
    h = displayZero(h);
    m = displayZero(m);
    s = displayZero(s);	

    let hms = h + ":" + m + ":" + s;

    // show date and time in webpage
    // month name is displayed by passing the integer mm through the monthList array
    document.getElementById('dayday', 'date').innerHTML = day + ', ' + monthList[mm] + ' ' + dd + ', ' + yyyy;
    document.getElementById('clock').innerHTML = hms; 

    
    // executes the showDate() function every 500ms so that the day and time will update in realtime
    setTimeout(function() {
      showDate()
    }, 1000);

}

$("document").ready( function(){
    $("#nextSlide").click(function(){
      var next = $("#carouselExampleIndicators").carousel("next");
    });
});	
$("document").ready( function(){
    $("#prevSlide").click(function(){
      var next = $("#carouselExampleIndicators").carousel("prev");
    });
});

   
