var slide_counter = 0;
var slide_array = [
"<style>body {background-color: #ff0000;}</style>",
"<style>body {background-color: #00ff00;}</style>",
"<style>body {background-color: #0000ff;}</style>",
"<style>body {background-color: #ffff00;}</style>",
"<style>body {background-color: #ff00ff;}</style>",
"<style>body {background-color: #000000;}</style>",
"<style>body {background-color: #ffffff;}</style>",
"<style>body {background-color: #00ffff;}</style>",
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
