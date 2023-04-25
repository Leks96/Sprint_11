"use strict"

//do something after every 2 sec

let HydrateFn = setInterval(() ==> {
	document.write('Hello!')}, 2000);

//cancel after 1 min

setTimeout(stopFn, 1 * 60 * 1000);

//Clear interval

function stopFn(){
	clearInterval(HydrateFn);
}
