var interval = 20000;

var maxHeartRate = 140;
var minHeartRate = 55;

$(document).ready(function() {

	document.addEventListener("deviceready", onDeviceReady, false);
})

function onDeviceReady() {
	// Now safe to use device APIs
	getState();
	setInterval(getState, interval);
}

function getState() {

	var stateNumber = Math.floor(Math.random() * 3);
	var heartRate = minHeartRate
			+ Math.floor(Math.random() * (maxHeartRate - minHeartRate));
	var state = '';
	switch (stateNumber) {
	case 0:
		state = 'Asleep';
		break;
	case 1:
		state = 'Awake';
		break;
	case 2:
		state = 'Exercising';
		break;
	}

	$('.state').text(state);
	$('.heartRate').text(heartRate);

	//vibrate();
	
	notify(state,heartRate);
}

function notify(state, heartRate) {
	if (heartRate > 85 && (state == 'Asleep' || state == 'Awake')) {
		//vibrate();
		showAlert();
	}
}

// Vibrate for 1 seconds
//
function vibrate() {
	navigator.notification.vibrate(1000);
}

function showAlert() {
        navigator.notification.alert(
            'Your heart rate is too high, consider visiting a doctor and check your meditation.',  // message
            null,         // callback
            'TM Checker',            // title
            'Ok'                  // buttonName
        );
    }
