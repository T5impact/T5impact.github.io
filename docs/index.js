// Typing effect for hero text
const typingText = document.querySelector('.typing-effect');

const phrases = ["Web Design", "Web Development", "UI/UX Innovation", "Cutting-edge Technology"];
let phraseIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < phrases[phraseIndex].length) {
        typingText.textContent += phrases[phraseIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        typingText.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeText(); // Start typing effect after the page loads
});

// Scroll animations for fade-in effect on sections
const fadeInSections = document.querySelectorAll('.fade-in');

function checkInView() {
    fadeInSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('fade-in-visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', checkInView);

// Particles Hero Section

particlesJS("particles-js", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffcc00"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffcc00",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

document.addEventListener('scroll', debounce(checkInView));

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const closeBtn = document.querySelector('.close-btn');
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const body = document.body;

// Function to toggle sidebar
function toggleSidebar(open) {
    if (open) {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        body.style.overflow = 'hidden';  // Prevent background scroll
    } else {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        body.style.overflow = 'auto';  // Allow background scroll again
    }
}

// Open sidebar
hamburger.addEventListener('click', () => toggleSidebar(true));

// Close sidebar
closeBtn.addEventListener('click', () => toggleSidebar(false));

// Close sidebar when clicking outside the sidebar
sidebarOverlay.addEventListener('click', () => toggleSidebar(false));

// Close sidebar when a sidebar link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => toggleSidebar(false));
});



// Close sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});