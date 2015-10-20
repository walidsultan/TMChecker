var interval = 5000;

var maxHeartRate = 140;
var minHeartRate=55;

$(document).ready(function() {
	getState();
	setInterval(getState, interval);
})

function getState() {

	var stateNumber = Math.floor(Math.random() * 3);
	var heartRate=minHeartRate+ Math.floor(Math.random() * (maxHeartRate-minHeartRate));
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

}