// Slideshow functionality
let currentSlide = [0, 0]; // Track current slide for each slideshow

function changeSlide(direction, slideshowIndex) {
    const slideshows = document.querySelectorAll('.works-slideshow');
    const slides = slideshows[slideshowIndex].querySelectorAll('.slide');
    
    currentSlide[slideshowIndex] += direction;
    
    // Wrap around
    if (currentSlide[slideshowIndex] >= slides.length) {
        currentSlide[slideshowIndex] = 0;
    }
    if (currentSlide[slideshowIndex] < 0) {
        currentSlide[slideshowIndex] = slides.length - 1;
    }
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show current slide
    slides[currentSlide[slideshowIndex]].classList.add('active');
}

// Auto-advance slideshows
function autoAdvanceSlideshows() {
    const slideshows = document.querySelectorAll('.works-slideshow');
    slideshows.forEach((slideshow, index) => {
        changeSlide(1, index);
    });
}

// Start auto-advance every 5 seconds
setInterval(autoAdvanceSlideshows, 5000);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#FFFFFF';
        header.style.backdropFilter = 'none';
    }
});

// Form validation and submission (for contact page)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff6b6b';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = '#ff6b6b';
            isValid = false;
        }
    }
    
    return isValid;
}

// Initialize animations on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.service-card, .works-slideshow, .vision-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
