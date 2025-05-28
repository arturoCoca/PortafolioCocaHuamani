document.addEventListener('DOMContentLoaded', function() {
    // Sistema de pestañas
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Mostrar año actual en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Animación de carga progresiva
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card, .exercise, .reflection-card').forEach(el => {
        observer.observe(el);
    });
    
    // Demo adicional para useState con formulario complejo
    const complexFormDemo = document.getElementById('complex-form-demo');
    if (complexFormDemo) {
        // Este demo se maneja completamente con React en el HTML
        // Aquí podríamos añadir lógica adicional si fuera necesario
    }
    
    // Demo de transición entre temas
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }
    
    // Ejemplo de error boundary (solo para demostración)
    class ErrorBoundary {
        constructor() {
            this.init();
        }
        
        init() {
            const errorButtons = document.querySelectorAll('.error-button');
            errorButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    try {
                        // Simular error
                        throw new Error('Error simulado para demostración');
                    } catch (error) {
                        console.error('Error capturado:', error);
                        alert('Error capturado. Mira la consola para detalles.');
                    }
                });
            });
        }
    }
    
    new ErrorBoundary();
    
    // Mostrar/ocultar detalles de ejemplos
    const detailButtons = document.querySelectorAll('.details-button');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const details = btn.nextElementSibling;
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
            btn.textContent = details.style.display === 'none' ? 'Mostrar detalles' : 'Ocultar detalles';
        });
    });
    
    // Copiar código al portapapeles
    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.parentElement.querySelector('code');
            if (codeBlock) {
                navigator.clipboard.writeText(codeBlock.textContent)
                    .then(() => {
                        btn.textContent = '¡Copiado!';
                        setTimeout(() => {
                            btn.textContent = 'Copiar código';
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Error al copiar:', err);
                    });
            }
        });
    });
    
    // Scroll suave para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tooltips para iconos
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(el => {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = el.getAttribute('data-tooltip');
        el.appendChild(tooltip);
        
        el.addEventListener('mouseenter', () => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });
        
        el.addEventListener('mouseleave', () => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });
    });
});