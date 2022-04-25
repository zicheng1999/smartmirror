// -------------------
// enable gesture type
// -------------------
/**var controller = Leap.loop({enableGestures: true}, function(frame){
  if(frame.valid && frame.gestures.length > 0){
    frame.gestures.forEach(function(gesture){
        switch (gesture.type){
          case "circle":
              console.log("Circle Gesture");
              break;
          case "keyTap":
              console.log("Key Tap Gesture");
              break;
          case "screenTap":
              console.log("Screen Tap Gesture");
              break;
          case "swipe":
              console.log("Swipe Gesture");
              break;
        }
    });
  }
});
*/
// -------------
// leap listener
// -------------
//$("document").ready( function(){

      //var changeSlide = $("#carouselExampleIndicators").carousel("next");

//});

var controller = new Leap.Controller({ enableGestures: true, background: false });

controller.loop(function (frame) {
    try {
        // show cursor on screen
        // moveCursor(frame);

        // Display Gesture object data
        detectGestures(frame);

    } catch (err) {
        console.log("out of bounds");
    }
});

/*controller.on('deviceStreaming', function () {
   swipeText.innerHTML = "Swipe left/right to navigate";
});
controller.on('deviceStopped', function () {
    swipeText.innerHTML = "<b style='color: red;'>Leap motion device not detected!</b>";
});
controller.on('deviceStopped', function () {
    swipeText.innerHTML = "<b style='color: red;'>Leap motion device not detected!</b>";
});
controller.on('deviceRemoved', function () {
    swipeText.innerHTML = "<b style='color: red;'>Leap motion device disconnected</b>";
});*/


// -------------
// swipe gesture
// -------------

function detectGestures(frame) {
    if (frame.gestures.length > 0) {
        for (var i = 0; i < frame.gestures.length; i++) {
            var gesture = frame.gestures[i];

            // IF GESTURE IS A SWIPE
            if (gesture.type == "swipe") {
                //Classify swipe as either horizontal or vertical
                var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
                //Classify as right-left or up-down
                if (isHorizontal) { // horizontal swipe
                    if (gesture.direction[0] > 0) {
                        swipeDirection = "right";
						document.getElementById('prevSlide').click();
                    }
                    else {
                        swipeDirection = "left";
						document.getElementById('nextSlide').click();
                    }
                }
                else { //vertical swipe
                    if (gesture.direction[1] > 0) {
                        swipeDirection = "up";
						//turn-on display
						document.getElementById('overlay').click();
                    }
                    else {
                        swipeDirection = "down";
                        //turn-off display			
						document.getElementById('onOverlay').click();					
                    }
                }
                console.log(swipeDirection);
            }
			
			// IF GESTURE IS A KEY TAP OR A SCREEN TAP
			/*
            else if (gesture.type == "keyTap" || gesture.type == "screenTap") {
                console.log("keyTap");
            }
			*/

// --------------
// circle gesture
// --------------

			// IF GESTURE IS A CIRCLE
            else if (gesture.type == "circle") {
                var clockwise = (gesture.normal[2] <= 0); // if third element of normal is negative, then clockwise
				if(clockwise) {
					console.log("clockwise");
					document.getElementById('plus-btn').click();
				}
				else {
					console.log("anti-clockwise");
                    document.getElementById('minus-btn').click();
                    }
				//console.log("circle");
                }
				
            }
        }
	}

			