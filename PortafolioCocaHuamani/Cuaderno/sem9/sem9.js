// JavaScript para Semana 9 - Tecnología Web Backend

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tabs de lenguajes
    initializeTabs();
    
    // Animaciones de entrada
    initializeAnimations();
    
    // Efectos interactivos
    initializeInteractiveEffects();
    
    // Configurar botón de GitHub
    setupGitHubButton();
});

// Función para inicializar las pestañas de lenguajes
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover clase active de todos los botones y contenidos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase active al botón clickeado y su contenido
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Efecto de transición
            const activeContent = document.getElementById(targetTab);
            activeContent.style.opacity = '0';
            activeContent.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                activeContent.style.opacity = '1';
                activeContent.style.transform = 'translateY(0)';
                activeContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            }, 50);
        });
    });
}

// Función para inicializar animaciones de entrada
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos a animar
    const animatedElements = [
        '.layer',
        '.pattern-card',
        '.server-card',
        '.flow-step',
        '.step',
        '.activity-card',
        '.summary-card'
    ];
    
    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        });
    });
}

// Función para efectos interactivos
function initializeInteractiveEffects() {
    // Efecto hover para las capas de arquitectura
    const layers = document.querySelectorAll('.layer');
    layers.forEach(layer => {
        layer.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        layer.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto para los tags de tecnología
    const techTags = document.querySelectorAll('.layer-content span');
    techTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }, 100);
            
            // Mostrar información (simulación)
            showTechInfo(this.textContent);
        });
    });
    
    // Animación de los pasos del flujo
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function() {
            // Animar el número del paso
            const stepNumber = this.querySelector('.step-number');
            stepNumber.style.transform = 'scale(1.2) rotate(360deg)';
            stepNumber.style.transition = 'transform 0.5s ease';
        });
        
        step.addEventListener('mouseleave', function() {
            const stepNumber = this.querySelector('.step-number');
            stepNumber.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Efecto de escritura para ejemplos de código
    const codeBlocks = document.querySelectorAll('.code-example code');
    codeBlocks.forEach(codeBlock => {
        const originalText = codeBlock.textContent;
        
        codeBlock.addEventListener('mouseenter', function() {
            if (!this.classList.contains('typing')) {
                this.classList.add('typing');
                typeWriter(this, originalText, 50);
            }
        });
    });
}

// Función para configurar el botón de GitHub
function setupGitHubButton() {
    const githubBtn = document.getElementById('github-link');
    
    if (githubBtn) {
        githubBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Efecto de click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Mostrar mensaje
            showTemporaryMessage('Enlace al proyecto backend será actualizado próximamente');
        });
        
        // Efecto de partículas al hacer hover
        githubBtn.addEventListener('mouseenter', function() {
            createParticles(this);
        });
    }
}

// Función para mostrar información de tecnología
function showTechInfo(techName) {
    const infoMessages = {
        'HTML': 'HyperText Markup Language - Lenguaje de marcado para estructurar contenido web',
        'CSS': 'Cascading Style Sheets - Lenguaje para describir la presentación de documentos',
        'JavaScript': 'Lenguaje de programación para crear contenido dinámico e interactivo',
        'PHP': 'PHP: Hypertext Preprocessor - Lenguaje de scripting del lado del servidor',
        'Java/JSP': 'Java Server Pages - Tecnología para crear páginas web dinámicas',
        'Node.js': 'Entorno de ejecución de JavaScript en el servidor',
        'Python': 'Lenguaje de programación de alto nivel y propósito general',
        'MySQL': 'Sistema de gestión de bases de datos relacionales',
        'PostgreSQL': 'Sistema de gestión de bases de datos objeto-relacional',
        'MongoDB': 'Base de datos NoSQL orientada a documentos'
    };
    
    const message = infoMessages[techName] || `Información sobre ${techName}`;
    showTemporaryMessage(message);
}

// Función para mostrar mensajes temporales
function showTemporaryMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
        font-size: 0.9rem;
        line-height: 1.4;
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    
    document.body.appendChild(messageDiv);
    
    // Mostrar mensaje
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar mensaje después de 4 segundos
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }
        }, 300);
    }, 4000);
}

// Función de efecto de escritura
function typeWriter(element, text, speed) {
    element.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.remove('typing');
        }
    }
    
    type();
}

// Función para crear partículas
function createParticles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 6; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #fff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: particleFloat 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 1000);
    }
}

// Agregar estilos de animación CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0);
        }
    }
    
    .typing {
        border-right: 2px solid #3b82f6;
        animation: blink 1s infinite;
    }
    
    @keyframes blink {
        0%, 50% { border-color: #3b82f6; }
        51%, 100% { border-color: transparent; }
    }
    
    .layer:hover .layer-content span {
        animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
    
    .server-card:hover i {
        animation: bounce 1s ease-in-out infinite;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;

document.head.appendChild(style);

// Función para manejar el scroll suave entre secciones
function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Agregar navegación suave (si hay enlaces internos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        smoothScrollToSection(targetId);
    });
});

