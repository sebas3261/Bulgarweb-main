import { lerp } from "./utils.js";
import { createProjects, createBlogposts } from "./projects.js";

const main = document.querySelector('main');
const videoSections = document.querySelectorAll('.video-section'); // Ajusta si cada video tiene un contenedor
createProjects();
createBlogposts();

// Video Animation
function animateVideos() {
    const videos = document.querySelectorAll('video:not(.no-animate)'); // Selecciona todos los videos excepto los que tengan la clase .no-animate
    videos.forEach((video) => {
        const videoSection = video.closest('.video-section'); // Encuentra el contenedor del video
        if (!videoSection) return; // Evita errores si el contenedor no se encuentra

        let { bottom } = videoSection.getBoundingClientRect();
        let scale = 1 - ((bottom - window.innerHeight) * 0.0005);
        scale = scale < 0.2 ? 0.2 : scale > 1 ? 1 : scale;
        video.style.transform = `scale(${scale})`;
    });
}

// Text Transformation
const headerLeft = document.querySelector('.text__header__left');
const headerRight = document.querySelector('.text__header__right');

function animateHeaders() {
    const videoSection = document.querySelector('#video');
    if (!videoSection) return;

    let { bottom } = videoSection.getBoundingClientRect();
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    headerLeft.style.transform = `translateX(${-textTrans}px)`;
    headerRight.style.transform = `translateX(${textTrans}px)`;
}

// Projects Animation
const projectsSticky = document.querySelector('.projects__sticky');
const projectSlider = document.querySelector('.projects__slider');

let projectTargetX = 0;
let projectCurrentX = 0;

let percentages = {
    small: 700,
    medium: 300,
    large: 100
};

let limit = window.innerWidth <= 600 ? percentages.small :
    window.innerWidth <= 1100 ? percentages.medium :
    percentages.large;

function setLimit() {
    limit = window.innerWidth <= 600 ? percentages.small :
        window.innerWidth <= 1100 ? percentages.medium :
        percentages.large;
}

window.addEventListener('resize', setLimit);

function animateProjects() {
    let offsetTop = projectsSticky.parentElement.offsetTop;
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, 0.1);
    projectSlider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0 , 0)`;
}

// Blog Post Animation
const blogSection = document.getElementById('blog');
const blogPosts = [...document.querySelectorAll('.post')];

function scrollBlogPosts() {
    let blogSectionTop = blogSection.getBoundingClientRect().top;
    blogPosts.forEach((post, i) => {
        if (post.parentElement.getBoundingClientRect().top <= 1) {
            let offset = (blogSectionTop + (window.innerHeight * (i + 1))) * 0.0005;
            offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
            post.style.transform = `scale(${1 + offset})`;
        }
    });
}

// Circle Animation
const circleSection = document.getElementById('circle__section');
const circle = document.querySelector('.circle');

function scrollCircle() {
    let { top } = circleSection.getBoundingClientRect();
    let scaleTop = Math.abs(top);
    let scale = (scaleTop / window.innerHeight);
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
    if (top <= 0) {
        circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
    } else {
        circle.style.transform = `translate(-50%, -50%) scale(0)`;
    }
}

// Discover Text Animation
const dContainer = document.querySelector('.discover__container');
const leftText = document.querySelector('.text__left');
const rightText = document.querySelector('.text__right');

function scrollDiscover() {
    let { bottom } = dContainer.getBoundingClientRect();
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    leftText.style.transform = `translateX(${-textTrans}px)`;
    rightText.style.transform = `translateX(${textTrans}px)`;
}

// Text Reveal Animation
const textReveals = [...document.querySelectorAll('.text__reveal')];

let callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            [...entry.target.querySelectorAll('span')].forEach((span, idx) => {
                setTimeout(() => {
                    span.style.transform = `translateY(0)`;
                }, (idx + 1) * 50);
            });
        }
    });
};

let options = {
    rootMargin: '0px',
    threshold: 1.0
};

let observer = new IntersectionObserver(callback, options);

textReveals.forEach(text => {
    let string = text.innerText;
    let html = '';
    for (let i = 0; i < string.length; i++) {
        html += `<span>${string[i]}</span>`;
    }
    text.innerHTML = html;
    observer.observe(text);
});

// Main Scroll Listener
main.addEventListener('scroll', () => {
    animateVideos();
    animateHeaders();
    scrollBlogPosts();
    scrollCircle();
    scrollDiscover();
});

// Projects Animation Loop
function animate() {
    animateProjects();
    requestAnimationFrame(animate);
}

animate();
