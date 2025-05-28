/**
 * Main JavaScript for Fanpech Website
 * Implements interactive elements, animations and functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize loader
    initLoader();
    
    // Initialize particles background
    initParticles();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize glitch text effect
    initGlitchEffect();
    
    // Initialize services filter
    initServicesFilter();
    
    // Initialize technology diagram
    initTechDiagram();
    
    // Initialize technology tabs
    initTechTabs();
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize back to top button
    initBackToTop();
    
    // Initialize animations
    initAnimations();
});

// Loader initialization
function initLoader() {
    const loader = document.querySelector('.loader');
    
    // Hide loader after page is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
            // Enable scrolling on body
            document.body.style.overflow = 'auto';
        }, 2000);
    });
    
    // Disable scrolling while loader is active
    document.body.style.overflow = 'hidden';
}

// Particles background initialization
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#00F5FF', '#9D00FF', '#00FFA3']
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
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
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00F5FF',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Header scroll effect initialization
function initHeaderScroll() {
    const header = document.querySelector('.header');
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Update active menu item based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth scrolling initialization
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            window.scrollTo({
                top: targetElement.offsetTop - headerHeight,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-list').classList.remove('active');
            document.querySelector('.menu-toggle').classList.remove('active');
        });
    });
}

// Mobile menu initialization
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
}

// Glitch text effect initialization
function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch-text');
    
    if (!glitchText) return;
    
    // Random glitch effect
    setInterval(function() {
        glitchText.classList.add('active');
        
        setTimeout(function() {
            glitchText.classList.remove('active');
        }, 200);
    }, 3000);
}

// Services filter initialization
function initServicesFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Filter service cards
            serviceCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Technology diagram initialization
function initTechDiagram() {
    const diagramNodes = document.querySelectorAll('.diagram-node');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const svg = document.querySelector('.connections-svg');
    
    // Draw connections between center and nodes
    if (svg) {
        const centerX = 250; // Center of SVG
        const centerY = 250; // Center of SVG
        
        diagramNodes.forEach(node => {
            const rect = node.getBoundingClientRect();
            const diagramRect = document.querySelector('.diagram-container').getBoundingClientRect();
            
            // Calculate node center position relative to diagram
            const nodeX = (rect.left + rect.width / 2) - diagramRect.left;
            const nodeY = (rect.top + rect.height / 2) - diagramRect.top;
            
            // Create line element
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', centerX);
            line.setAttribute('y1', centerY);
            line.setAttribute('x2', nodeX);
            line.setAttribute('y2', nodeY);
            line.setAttribute('stroke', '#00F5FF');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('stroke-dasharray', '5,5');
            line.setAttribute('class', 'connection-line');
            
            svg.appendChild(line);
        });
    }
    
    // Node click event
    diagramNodes.forEach(node => {
        node.addEventListener('click', function() {
            const nodeId = this.getAttribute('data-node');
            
            // Activate corresponding tab
            tabBtns.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-tab') === nodeId) {
                    btn.classList.add('active');
                    btn.click();
                }
            });
            
            // Highlight node
            diagramNodes.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Technology tabs initialization
function initTechTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    const diagramNodes = document.querySelectorAll('.diagram-node');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
            
            // Highlight corresponding node
            diagramNodes.forEach(node => {
                node.classList.remove('active');
                if (node.getAttribute('data-node') === tabId) {
                    node.classList.add('active');
                }
            });
        });
    });
}

// Testimonial slider initialization
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    let currentSlide = 0;
    
    // Show initial slide
    showSlide(currentSlide);
    
    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }
            showSlide(currentSlide);
        });
    }
    
    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        });
    }
    
    // Dot click
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto slide
    setInterval(function() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    }, 5000);
    
    // Show slide function
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
}

// Contact form initialization
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (name && email && subject && message) {
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                submitBtn.innerHTML = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(function() {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                    
                    // Reset button
                    submitBtn.innerHTML = 'Enviar Mensaje';
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                alert('Por favor, completa todos los campos del formulario.');
            }
        });
    }
    
    // Initialize map
    initMap();
}

// Map initialization
function initMap() {
    // This would normally use Google Maps or similar API
    // For this example, we'll create a simple placeholder
    const mapElement = document.getElementById('map');
    
    if (mapElement) {
        // Create a simple map placeholder
        const mapContext = document.createElement('div');
        mapContext.style.width = '100%';
        mapContext.style.height = '100%';
        mapContext.style.display = 'flex';
        mapContext.style.justifyContent = 'center';
        mapContext.style.alignItems = 'center';
        mapContext.style.backgroundColor = '#1a1a1a';
        mapContext.style.color = '#00F5FF';
        mapContext.style.fontSize = '1.6rem';
        mapContext.innerHTML = '<i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-right: 1rem;"></i> Ubicación de Fanpech: Av. Tecnológica 123, Ciudad Innovación';
        
        mapElement.appendChild(mapContext);
    }
}

// Back to top button initialization
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Animations initialization using GSAP
function initAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-content', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.5
    });
    
    // About section animations
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%'
        },
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.image-container', {
        scrollTrigger: {
            trigger: '.image-container',
            start: 'top 80%'
        },
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Timeline animations
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.timeline',
            start: 'top 70%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out'
    });
    
    // Services animations
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 70%'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Technology animations
    gsap.from('.diagram-node', {
        scrollTrigger: {
            trigger: '.tech-diagram',
            start: 'top 70%'
        },
        duration: 0.8,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });
    
    gsap.from('.connection-line', {
        scrollTrigger: {
            trigger: '.tech-diagram',
            start: 'top 70%'
        },
        duration: 1.5,
        strokeDashoffset: 100,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 1
    });
    
    // Clients animations
    gsap.from('.client-logo', {
        scrollTrigger: {
            trigger: '.clients-carousel',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // Contact animations
    gsap.from('.info-item', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%'
        },
        duration: 0.8,
        x: -50,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    gsap.from('.form-group', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Section headers animations
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.section-header',
            start: 'top 80%'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
}

// Create placeholder images for development
function createPlaceholderImages() {
    // Client logos
    const clientLogos = document.querySelectorAll('.client-logo img');
    clientLogos.forEach((logo, index) => {
        if (!logo.getAttribute('src') || logo.getAttribute('src').includes('client')) {
            logo.setAttribute('src', `https://via.placeholder.com/150x80/1a1a1a/00F5FF?text=Cliente+${index + 1}`);
        }
    });
    
    // Testimonial images
    const testimonialImages = document.querySelectorAll('.author-image img');
    testimonialImages.forEach((img, index) => {
        if (!img.getAttribute('src') || img.getAttribute('src').includes('testimonial')) {
            img.setAttribute('src', `https://via.placeholder.com/60x60/1a1a1a/00F5FF?text=${index + 1}`);
        }
    });
    
    // About image
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage && (!aboutImage.getAttribute('src') || aboutImage.getAttribute('src').includes('about-image'))) {
        aboutImage.setAttribute('src', 'https://via.placeholder.com/600x400/1a1a1a/00F5FF?text=Equipo+Fanpech');
    }
}

// Call placeholder function after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createPlaceholderImages();
});
