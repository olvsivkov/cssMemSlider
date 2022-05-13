let slides = document.getElementsByClassName("item");
let dots = document.getElementsByClassName("slider-kontroller");
let text = document.querySelector(".mem-text");
text.textContent = "crazy woman"

function opacityStyle() {
    text.style.opacity = "0.5";
    setTimeout(() => text.style.opacity = "0.6", 100);
    setTimeout(() => text.style.opacity = "0.7", 200);
    setTimeout(() => text.style.opacity = "0.8", 300);
    setTimeout(() => text.style.opacity = "1", 500);
}

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
    if (n === 1) {
        text.textContent = "crazy woman"
        opacityStyle()
    }
    if (n === 2) {
        text.textContent = "the cat screams at the girls"
        opacityStyle()
    }
    if (n === 3) {
        text.textContent = "This is fine"
        opacityStyle()
    }
    if (n === 4) {
        text.textContent = "when you shifted the div by 1 pixel in your website"
        opacityStyle()
    }
}

function showSlides(n) {
    let i;
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}