// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Service cards flip functionality
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const frontLink = card.querySelector('.service-card-front .service-link');
        const backLink = card.querySelector('.service-card-back .service-link');
        
        // Flip to back when clicking "Learn More"
        frontLink.addEventListener('click', function(e) {
            e.preventDefault();
            card.classList.add('flipped');
        });
        
        // Flip back to front when clicking "Go Back"
        backLink.addEventListener('click', function(e) {
            e.preventDefault();
            card.classList.remove('flipped');
        });
    });
    
    // Navigation scroll effect
    const mainNav = document.getElementById('main-nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            mainNav.classList.add('nav-scrolled');
        } else {
            mainNav.classList.remove('nav-scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        const icon = darkModeToggle.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
    
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
});