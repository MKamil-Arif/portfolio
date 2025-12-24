// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    mobileMenuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Particles.js initialization with better interaction settings
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": window.innerWidth < 768 ? 60 : 120,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "window", // Changed from "canvas" to "window" for better detection
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab" // Particles will follow mouse
                },
                "onclick": {
                    "enable": true,
                    "mode": "push" // Click will push particles away
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 200, // Increased distance for better effect
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Ensure particles canvas is properly positioned for interaction
    const particlesContainer = document.getElementById('particles-js');
    if (particlesContainer) {
        const canvas = particlesContainer.querySelector('canvas');
        if (canvas) {
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.pointerEvents = 'auto'; // Ensure canvas receives mouse events
        }
    }
});

// Skill tag animation smoother
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        tag.style.transform = 'scale(1.1) translateY(-2px)';
        setTimeout(() => tag.style.transform = '', 200);
    });
});


// Form submission handling
const form = document.querySelector('.contact-form')
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const button = this.querySelector('button[type="submit"]');
        const originalText = button.textContent;

        button.textContent = 'Sending...';
        button.disabled = true;

        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            button.textContent = 'Message Sent!';
            button.style.backgroundColor = '#10b981';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
                button.disabled = false;
                this.reset();
            }, 2000);
        }, 1500);
    });
}

// Add scroll effect for navbar
let lastScroll = 0;
const navbar = document.querySelector('.sticky-nav');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Add active navigation highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === current) {
            item.classList.add('active');
            item.style.color = 'var(--accent-color)';
        } else {
            item.style.color = '';
        }
    });
});

// yahan say aslii game start hoga
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });
reveals.forEach(el => observer.observe(el));
function setTheme(mode) {
    if (mode === 'cyber') {
        document.documentElement.style.setProperty('--accent-color', '#22d3ee');
    } else {
        document.documentElement.style.setProperty('--accent-color', '#58a6ff');
    }
}

/* ======================= */
/* COMMAND PALETTE LOGIC   */
/* ======================= */
const palette = document.getElementById('command-palette');
const commandInput = document.getElementById('command-input');
const resultsList = document.getElementById('command-results');
const commands = [
    { name: 'about', action: () => scrollToSection('about') },
    { name: 'skills', action: () => scrollToSection('skills') },
    { name: 'work', action: () => scrollToSection('work') },
    { name: 'contact', action: () => scrollToSection('contact') },
    { name: 'theme cyber', action: () => setTheme('cyber') },
    { name: 'theme default', action: () => setTheme('default') }
];
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
    closePalette();
}
function openPalette() {
    palette.classList.remove('hidden');
    commandInput.value = '';
    resultsList.innerHTML = '';
    commandInput.focus();
}
function closePalette() {
    palette.classList.add('hidden');
}
document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        openPalette();
    }
    if (e.key === 'Escape') {
        closePalette();
    }
});
commandInput.addEventListener('input', () => {
    const value = commandInput.value.toLowerCase();
    resultsList.innerHTML = '';
    commands
        .filter(cmd => cmd.name.includes(value))
        .forEach(cmd => {
            const li = document.createElement('li');
            li.textContent = cmd.name;
            li.addEventListener('click', cmd.action);
            resultsList.appendChild(li);
        });
});
// Command palette enter key: allow partial match
commandInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const match = commands.find(cmd => cmd.name.includes(commandInput.value.toLowerCase()));
        if (match) match.action();
    }
});


/* ======================= */
/* PROJECT MODAL LOGIC     */
/* ======================= */
const projectData = {
    shopflow: {
        title: 'ShopFlow',
        tagline: 'Modern E-commerce Platform',
        problem: 'Client needed a scalable e-commerce solution with real-time inventory and analytics.',
        solution: 'Built a full-stack platform with React, Node.js and Stripe integration.',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        results: 'Sales increased by 65% within the first quarter.'
    }
};
const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-modal');
function openProjectModal(key) {
    const data = projectData[key];
    if (!data) return;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-tagline').textContent = data.tagline;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-solution').textContent = data.solution;
    document.getElementById('modal-results').textContent = data.results;
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = t;
        techContainer.appendChild(span);
    });
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');
}
function closeProjectModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
}
closeModalBtn.addEventListener('click', closeProjectModal);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeProjectModal();
    }
});

/* ======================= */
/* CUSTOM CURSOR LOGIC     */
/* ======================= */
const cursor = document.querySelector('.custom-cursor');
if (cursor) {
    document.addEventListener('mousemove', e => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
        });
    });
}

/* ======================= */
/* TIMELINE ANIMATION      */
/* ======================= */
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.2 }
);
timelineItems.forEach(item => timelineObserver.observe(item));