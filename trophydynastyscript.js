const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const image4 = document.querySelector('#image4');
const firstSection = document.querySelector('.firstsection');
const slideshow = document.querySelector('.slideshow');
let currentSlide = 0;
let totalSlides = 5;
let timer;
let timeSlide = 5;

function slideRun() {
timeLeft = 5;

 timer = setInterval(() => {
 timeLeft--;
 
 if (timeLeft <= 0) {
 nextSlide();
 }
}, 1000);
}

function nextSlide() {
	currentSlide++;
	
	if (currentSlide === totalSlides) {
	 currentSlide = 0;	 
	}
	timeLeft = 5; //Ensures it resets the timer every time.
    slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
}


slideRun();
