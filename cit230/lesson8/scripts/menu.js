function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


//Rating line

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
var slider = document.getElementById("myRange");
var output = document.getElementById("ratingValue");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}