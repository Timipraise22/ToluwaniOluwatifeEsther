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
" To Oluwatife Toluwanimi:\n" +
"Idunnu mi\n" +
"Olarenwaju mi \n"+
"Coming this far with you and still getting to know youu more everyday feels so special to me. With you,I feel at peace, I feel guienely loved especially in the way you treat me and even get annoyed over things that could hurt me even when they dont affect you directly.That alone shows how deeply you care.❤️\n\n" +
"I still can't fully wrap mybhead arouun d our first physical meeting. Time went by so fast, and I honestly didn’t want you to leave because I wanted more of you… more time, more moments. It was all fun and beautiful until it was time to say goodbye. I’ll be completely honest, those moments were some of the happiest of my life, and I’m looking forward to the next time we see each other again, maybe on your birthday like you wished.\n\n" +
"I truly appreciate how intentional you are about loving me. The way you care for me, the excitement in your face whenever we talk, the way you worry about me and never want to see me sad… and how you notice even the smallest details about me, it means more than you know.\n\n" +
"I love your sense of humor, your personality, and your smile. You always wonder why I like seeing your face so much, it’s because it brightens my entire mood and changes everything in that moment..\n\n" +
"I honestly can’t wait until we see each other again so that  I can feel your touch and hold you so tight.\n\n" +
"I love you so much, Oluwatife mi. And like I’ve always said, I will always find new reasons to love you every single day. I pray we never fall out of love and that we continue this beautiful journey together with peace, good health, and great expectations for the future.\n\n" +
"Happy Valentine Pookie\n" +
"I lovee youu";

const typewriter = document.getElementById("typewriter");
const finalContent = document.getElementById("finalContent");
const music = document.getElementById("bgMusic");

let index = 0;
let typingSpeed = 1;

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