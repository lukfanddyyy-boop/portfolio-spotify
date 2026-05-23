// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.remove('opacity-0', 'invisible');
        scrollTopBtn.classList.add('opacity-100');
    } else {
        scrollTopBtn.classList.add('opacity-0', 'invisible');
        scrollTopBtn.classList.remove('opacity-100');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !subject || !message) {
        alert('Mohon isi semua field!');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Email tidak valid!');
        return;
    }
    
    alert(`Terima kasih ${name}! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.`);
    contactForm.reset();
});

// Intersection Observer untuk Lazy Loading
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.group').forEach(card => {
    observer.observe(card);
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenu.classList.add('hidden');
    }
});

// Track Events
function trackEvent(category, action) {
    console.log(`Event tracked: ${category} - ${action}`);
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('Navigation', link.textContent.trim());
    });
});

// Performance Monitoring
window.addEventListener('load', () => {
    if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    }
});

// Initialize Scroll Animations
const initializeScrollAnimations = () => {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
        el.style.animation = 'fadeInUp 0.6s ease-out forwards';
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initializeScrollAnimations();
});

// Project Cards Interactivity
const projectCards = document.querySelectorAll('.group');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Welcome Message
console.log('%c✨ Welcome to Luky Irfandi Portfolio ✨', 'color: #4ade80; font-size: 16px; font-weight: bold;');
console.log('%cDeveloped with passion from SMKN 11 Malang', 'color: #3b82f6; font-size: 12px;');
console.log('%cContact: @lukyirfndi | +62 857 5597 0913', 'color: #a855f7; font-size: 12px;');
