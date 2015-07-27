$(document).ready(function() {
	console.log("ready!")
});

var clicked = false

function startLoad() {
	if (clicked) return;
	clicked = true;
	$("#inject").fadeOut();
	console.log("clicked");
	$("#loadingStatus").html("Initializing Injector...");
	var loadingWidth = 0;
	while (loadingWidth < 400) {
		var temp = random(1,100);
		loadingWidth += temp;
		$("#loading").animate({
			width: loadingWidth
		}, temp*40, function() {
			if ($("#loading").width() >= 100) {
				$("#loadingStatus").html("Injecting Code...");
			}
			if ($("#loading").width() >= 200) {
				$("#loadingStatus").html("Loading Snacks...");
			}
			if ($("#loading").width() >= 300) {
				$("#loadingStatus").html("Cleaning Up...");
			}
			if ($("#loading").width() >= 400) {
				$("#loading").css("background-color", "#2ecc71");
				$("#loadingStatus").html("Injection Complete").css("font-size", "30px");
				$("#message").fadeIn(3000).rainbow({
					colors: [
						'#e74c3c',
						'#e67e22',
						'#f1c40f',
						'#1abc9c',
						'#2ecc71',
						'#3498db',
						'#9b59b6'
					],
					animate: true,
					animateInterval: 75,
					pad: false,
					pauseLength: 75,
				});
				$("#song").trigger('play');
			}
		});
		console.log("looped");

	};
};

function random(min, max) {
	var random = Math.floor(Math.random()*(max-min+1)+min);
	return random;
}



var gui = require('nw.gui');
var win = gui.Window.get();
//minimize
document.getElementById('minimize').onclick = function() {
	win.minimize();
};
//close
document.getElementById("close").onclick = function() {
	win.close();
};
