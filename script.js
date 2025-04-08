AOS.init();

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel');
const totalSlides = slides.length;


slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

let index = 0;

function nextSlide() {
    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${index * 100}%)`;

    if (index === totalSlides) {
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(0)';
            index = 0;
        }, 600);
    }
}

setInterval(nextSlide, 2000);
