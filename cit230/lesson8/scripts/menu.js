function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}


//Rating line

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}