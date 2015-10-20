var interval = 5000;

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
		state = 'Sleeping';
		break;
	case 1:
		state = 'Walking';
		break;
	case 2:
		state = 'Running';
		break;
	}

	$('.state').text(state);
	$('.heartRate').text(heartRate);

	//vibrate();
	
	notify();
}

function notify(state, heartRate) {
	if (heartRate > 75 && (state == 'Sleeping' || state == 'Walking')) {
		vibrate();
	}
}

// Vibrate for 2 seconds
//
function vibrate() {
	navigator.notification.vibrate(1000);
}