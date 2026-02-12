function createEmojis() {
    const emojis = ['💖','💕','💘','🌹','✨','💝'];
    const container = document.body;

    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (Math.random() * 5 + 5) + "s";
        emoji.style.fontSize = (Math.random() * 20 + 20) + "px";
        container.appendChild(emoji);
    }
}

createEmojis();

const messageText =
"Happy Valentine’s Day to the one who makes my world brighter ❤️\n\n" +
"Every day with you feels like a blessing,\n" +
"and today I just want to remind you how deeply I appreciate you.\n\n" +
"Thank you for being such a beautiful part of my life.\n" +
"Enjoy this token of mine\n" +
"I lovee youu";

const typewriter = document.getElementById("typewriter");
const finalContent = document.getElementById("finalContent");
const music = document.getElementById("bgMusic");

let index = 0;
let typingSpeed = 10;

music.play();
typeEffect();

function typeEffect() {
    if (index < messageText.length) {
        if (messageText.charAt(index) === "\n") {
            typewriter.innerHTML += "<br>";
        } else {
            typewriter.innerHTML += messageText.charAt(index);
        }
        index++;
        setTimeout(typeEffect, typingSpeed);
    } else {
        finalContent.classList.remove("hidden");
        startSlideshow(); 
    }
}

let currentSlide = 0;
let slideInterval;


function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active");
        if (index === currentSlide) {
            slide.classList.add("active");
        }
    });

    currentSlide++;
    if (currentSlide >= slides.length) currentSlide =
    0;
}

function startSlideshow() {
    const slides = document.querySelectorAll(".slide")
    if(slides.length === 0) return;
    slides.forEach(slide =>{
        slide.style.opacity = 0;
        slide.classList.remove("active")
    });

    slides[0].classList.add("active");
    slides[0].style.opacity = 1;

    setInterval = setInterval(() => {
        slides[currentSlide].classList.remove("active");
        slides[currentSlide].style.opacity = 0;

        currentSlide++;
        if(currentSlide >= slides.length)
            currentSlide = 0;

        slides[currentSlide].classList.add("active");
        slides[currentSlide].style.opacity = 1;
    }, 3000);
}