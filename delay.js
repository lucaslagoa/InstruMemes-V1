function delay(){
	
	var context_delay = new AudioContext();

	var sound = document.querySelector('audio');
	var audio_src = context_delay.createMediaElementSource(sound);

	var delay = context_delay.createDelay();
	var feedback = context_delay.createGain();

	audio_src.connect(context_delay.destination);

	document.addEventListener("DOMContentLoaded", function (event) {
	    var _selector = document.getElementById('checkDelay');
	    _selector.addEventListener('change', function (event) {

	        if (_selector.checked) {
				delay.delayTime.value = document.getElementById("delayid").value;;
				feedback.gain.value = document.getElementById("feedbackid").value;;

				delay.connect(feedback);
	    		feedback.connect(delay);

				audio_src.connect(delay);
				audio_src.connect(context_delay.destination);
				delay.connect(context_delay.destination);

	        } else {
	            audio_src.disconnect(delay);
				delay.disconnect(context_delay.destination);
				audio_src.connect(context_delay.destination);
	        }
	    });
	});
}