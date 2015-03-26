var slide_counter = 0;
var slide_array = [
"<style>body {background-color: #1a0aff;}</style>",
"<style>body {background-color: #00ffff;}</style>",
"<style>body {background-color: #00ff55;}</style>",
"<style>body {background-color: #a8ff64;}</style>",
"<style>body {background-color: #de0614;}</style>",
"<style>body {background-color: #a806de;}</style>",
"<style>body {background-color: #605a39;}</style>",
];

var slide_element;
function Next(){
	slide_counter++;
	if(slide_counter > (slide_array.length - 1)){
		slide_counter = 0;
	}
	setTimeout('switchSlide()',1000);
}
function switchSlide(){
	slide_element.innerHTML = slide_array[slide_counter];
	setTimeout('Next()',2000);
}
