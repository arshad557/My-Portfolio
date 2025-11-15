// Typing effect for hero text
const typingText = document.getElementById('typing-text');
const text = "Student at Modern Education Society's College of Engineering | AI Engineer & Java Developer";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Animate skills on scroll
const skills = document.querySelectorAll('.skill');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.progress');
            const count = entry.target.getAttribute('data-count');
            progress.style.width = count + '%';
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));

// Fade in sections on scroll
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => sectionObserver.observe(section));

// Contact form handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. (Demo: In production, integrate with a backend service.)`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});