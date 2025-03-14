const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dots');
let currentPosition = 0;
const totalImages = 3;

// Create dots
for(let i = 0; i < totalImages; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if(i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    const activeIndex = Math.abs(currentPosition / 100) % totalImages;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function slideImages() {
    currentPosition = (currentPosition - 100) % (totalImages * 100);
    
    if (currentPosition === -(totalImages * 100)) {
        currentPosition = 0;
    }
    
    slider.style.transform = `translateX(${currentPosition / 3}%)`;
    updateDots();
}

// Optional: Add click functionality to dots
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentPosition = -(index * 100);
        slider.style.transform = `translateX(${currentPosition / 3}%)`;
        updateDots();
    });
});

// Change slide every 3 seconds
setInterval(slideImages, 3000);

const menuIcon = document.querySelector('nav .fa-bars');
const closeIcon = document.querySelector('nav .fa-circle-xmark');
const navList = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Function to check if we're in mobile view
function isMobileView() {
    return window.innerWidth <= 1025; // matches your media query breakpoint
}

menuIcon.addEventListener('click', () => {
    navList.style.right = '0';
    menuIcon.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    if (isMobileView()) {
        navList.style.right = '-200px';
        menuIcon.style.display = 'block';
    }
});

// Only apply mobile menu behavior if in mobile view
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMobileView()) {
            navList.style.right = '-200px';
            menuIcon.style.display = 'block';
        }
    });
});

// Reset styles when resizing window
window.addEventListener('resize', () => {
    if (!isMobileView()) {
        navList.style.right = '';
        menuIcon.style.display = '';
    }
});