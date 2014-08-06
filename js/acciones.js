// JavaScript Document
var lla;

function onBodyLoad() {	
document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
if( window.plugins && window.plugins.LowLatencyAudio ) {

lla = window.plugins.LowLatencyAudio;	

lla.preloadFX('assets/bass.mp3', 'assets/bass.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });
lla.preloadFX('assets/snare.mp3', 'assets/snare.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });
lla.preloadFX('assets/highhat.mp3', 'assets/highhat.mp3', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });
lla.preloadFX('assets/mario.mp3', 'mario', function(msg){}, function(msg){ alert( 'Error: ' + msg ); });	
}
}

function play(drum) {
document.getElementById(drum).className = 'drum touched';
lla.play('mario');
}

function touchEnd(event) {
event.target.className = 'drum';
}

