// JavaScript para Semana 12 - Django Avanzado

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones
    initializeAnimations();
    
    // Efectos interactivos
    initializeInteractiveEffects();
    
    // Simulador de Django avanzado
    initializeDjangoAdvancedSimulator();
    
    // Demostración de flujo de middleware
    initializeMiddlewareFlow();
});

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
        '.form-type-card',
        '.admin-feature',
        '.benefit-card',
        '.flow-step',
        '.example-section',
        '.feature-item',
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
    // Efecto hover para tarjetas de tipos de formularios
    const formTypeCards = document.querySelectorAll('.form-type-card');
    formTypeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
            createFormParticles(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showFormInfo(title);
        });
    });
    
    // Efecto hover para características del admin
    const adminFeatures = document.querySelectorAll('.admin-feature');
    adminFeatures.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.3)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        feature.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showAdminInfo(title);
        });
    });
    
    // Efecto hover para beneficios JWT
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(72, 187, 120, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showJWTInfo(title);
        });
    });
    
    // Efecto de escritura en ejemplos de código
    const codeBlocks = document.querySelectorAll('.code-example code');
    codeBlocks.forEach(codeBlock => {
        codeBlock.addEventListener('mouseenter', function() {
            if (!this.classList.contains('typing')) {
                this.classList.add('typing');
                this.style.background = 'linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)';
                this.style.transition = 'background 0.5s ease';
            }
        });
        
        codeBlock.addEventListener('mouseleave', function() {
            this.classList.remove('typing');
            this.style.background = 'transparent';
        });
    });
    
    // Efecto para el botón de GitHub
    const githubBtn = document.querySelector('.github-btn');
    if (githubBtn) {
        githubBtn.addEventListener('mouseenter', function() {
            createGithubStars(this);
        });
        
        githubBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showGithubMessage();
        });
    }
}

// Función para mostrar información de formularios
function showFormInfo(formType) {
    const infoMessages = {
        'Formularios Básicos': 'Los formularios básicos en Django proporcionan validación automática, protección CSRF y renderizado HTML limpio.',
        'ModelForms': 'Los ModelForms generan automáticamente formularios basados en modelos, simplificando el desarrollo y mantenimiento.',
        'Formularios Personalizados': 'Permiten validación personalizada, widgets específicos y lógica de negocio compleja.',
        'Formsets': 'Los formsets manejan múltiples formularios simultáneamente, ideal para edición en lote y relaciones complejas.'
    };
    
    const message = infoMessages[formType] || `Información sobre ${formType}`;
    showTemporaryMessage(message, '#667eea');
}

// Función para mostrar información del admin
function showAdminInfo(adminFeature) {
    const infoMessages = {
        'Generación Automática': 'Django Admin genera automáticamente interfaces CRUD basadas en tus modelos sin código adicional.',
        'Personalización': 'Personaliza completamente la interfaz con campos personalizados, filtros avanzados y acciones en lote.',
        'Gestión de Usuarios': 'Sistema completo de usuarios, grupos y permisos con autenticación y autorización granular.',
        'Reportes': 'Genera reportes y estadísticas directamente desde el panel de administración.'
    };
    
    const message = infoMessages[adminFeature] || `Información sobre ${adminFeature}`;
    showTemporaryMessage(message, '#ff6b6b');
}

// Función para mostrar información de JWT
function showJWTInfo(jwtBenefit) {
    const infoMessages = {
        'Seguridad': 'Los tokens JWT están firmados digitalmente, garantizando la integridad y autenticidad de los datos.',
        'Escalabilidad': 'JWT es stateless, permitiendo escalabilidad horizontal sin sesiones en el servidor.',
        'Multiplataforma': 'Compatible con cualquier cliente que pueda manejar HTTP y JSON, incluyendo móviles y SPAs.',
        'Expiración': 'Los tokens tienen tiempo de vida configurable, mejorando la seguridad con renovación automática.'
    };
    
    const message = infoMessages[jwtBenefit] || `Información sobre ${jwtBenefit}`;
    showTemporaryMessage(message, '#48bb78');
}

// Función para mostrar mensajes temporales
function showTemporaryMessage(message, color = '#667eea') {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
        font-size: 0.9rem;
        line-height: 1.4;
        border: 1px solid rgba(255, 255, 255, 0.3);
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

// Función para crear partículas de formularios
function createFormParticles(element) {
    const rect = element.getBoundingClientRect();
    const formSymbols = ['📝', '✅', '🔒', '📋', '💾'];
    
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.textContent = formSymbols[Math.floor(Math.random() * formSymbols.length)];
        particle.style.cssText = `
            position: fixed;
            font-size: 1.2rem;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: formParticleFloat 1.5s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 1500);
    }
}

// Función para crear estrellas de GitHub
function createGithubStars(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('div');
        star.textContent = '⭐';
        star.style.cssText = `
            position: fixed;
            font-size: 1rem;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: githubStarFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(star);
        
        setTimeout(() => {
            if (document.body.contains(star)) {
                document.body.removeChild(star);
            }
        }, 2000);
    }
}

// Función para mostrar mensaje de GitHub
function showGithubMessage() {
    showTemporaryMessage('🚀 Proyecto Django Avanzado disponible en GitHub con código completo y documentación', '#2d3748');
}

// Función para inicializar flujo de middleware
function initializeMiddlewareFlow() {
    const flowSteps = document.querySelectorAll('.flow-step');
    
    flowSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function() {
            // Resaltar el paso actual
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '10';
            this.style.borderTopColor = '#667eea';
            
            // Animar pasos siguientes
            flowSteps.forEach((otherStep, otherIndex) => {
                if (otherIndex > index) {
                    otherStep.style.opacity = '0.6';
                    otherStep.style.transform = 'scale(0.95)';
                }
            });
        });
        
        step.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
            this.style.borderTopColor = '#4299e1';
            
            // Restaurar todos los pasos
            flowSteps.forEach(otherStep => {
                otherStep.style.opacity = '1';
                otherStep.style.transform = 'scale(1)';
            });
        });
        
        step.addEventListener('click', function() {
            demonstrateMiddlewareFlow();
        });
    });
}

// Función para demostrar el flujo de middleware
function demonstrateMiddlewareFlow() {
    const flowSteps = document.querySelectorAll('.flow-step');
    
    flowSteps.forEach((step, index) => {
        setTimeout(() => {
            step.style.background = '#667eea';
            step.style.color = 'white';
            step.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                step.style.background = '#fff';
                step.style.color = 'inherit';
                step.style.transform = 'scale(1)';
            }, 800);
        }, index * 400);
    });
    
    // Mostrar mensaje explicativo
    setTimeout(() => {
        showTemporaryMessage('Flujo de middleware: Request → Middleware → View → Response', '#4299e1');
    }, flowSteps.length * 400);
}

// Función para inicializar simulador de Django avanzado
function initializeDjangoAdvancedSimulator() {
    // Agregar botones interactivos a ejemplos de código
    const codeExamples = document.querySelectorAll('.code-example');
    
    codeExamples.forEach((example, index) => {
        // Crear botón de "ejecutar"
        const runButton = document.createElement('button');
        runButton.textContent = '▶ Ejecutar';
        runButton.className = 'run-code-btn';
        runButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #667eea;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background 0.3s ease;
        `;
        
        runButton.addEventListener('mouseenter', function() {
            this.style.background = '#5a67d8';
        });
        
        runButton.addEventListener('mouseleave', function() {
            this.style.background = '#667eea';
        });
        
        runButton.addEventListener('click', function() {
            simulateDjangoAdvancedExecution(example);
        });
        
        example.style.position = 'relative';
        example.appendChild(runButton);
    });
}

// Función para simular ejecución de código Django avanzado
function simulateDjangoAdvancedExecution(codeExample) {
    const code = codeExample.querySelector('code').textContent;
    
    // Crear div de salida
    let outputDiv = codeExample.querySelector('.code-output');
    if (!outputDiv) {
        outputDiv = document.createElement('div');
        outputDiv.className = 'code-output';
        outputDiv.style.cssText = `
            background: #0f172a;
            color: #10b981;
            padding: 1rem;
            margin-top: 0.5rem;
            border-radius: 5px;
            font-family: 'Source Code Pro', monospace;
            font-size: 0.9rem;
            border-left: 3px solid #10b981;
        `;
        codeExample.appendChild(outputDiv);
    }
    
    // Simular salida basada en el contenido del código
    let output = '';
    if (code.includes('class') && code.includes('Form')) {
        output = '>>> Formulario Django creado exitosamente\n>>> Validación automática configurada\n>>> Widgets personalizados aplicados';
    } else if (code.includes('@admin.register')) {
        output = '>>> Modelo registrado en Django Admin\n>>> Configuración personalizada aplicada\n>>> Filtros y acciones disponibles';
    } else if (code.includes('MiddlewareMixin')) {
        output = '>>> Middleware personalizado creado\n>>> Procesamiento de request/response configurado\n>>> Listo para agregar a MIDDLEWARE en settings';
    } else if (code.includes('JWT') || code.includes('Token')) {
        output = '>>> Autenticación JWT configurada\n>>> Tokens de acceso y refresh generados\n>>> API REST protegida correctamente';
    } else if (code.includes('session')) {
        output = '>>> Gestión de sesiones implementada\n>>> Datos persistentes en servidor\n>>> Carrito de compras funcional';
    } else {
        output = '>>> Código Django avanzado ejecutado\n>>> Funcionalidades implementadas correctamente';
    }
    
    // Efecto de escritura
    outputDiv.textContent = '';
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < output.length) {
            outputDiv.textContent += output.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 30);
}

// Agregar estilos de animación CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes formParticleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-50px) scale(0.5);
        }
    }
    
    @keyframes githubStarFloat {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-80px) rotate(360deg) scale(0.3);
        }
    }
    
    .typing {
        position: relative;
    }
    
    .typing::after {
        content: '|';
        animation: blink 1s infinite;
        color: #667eea;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .form-type-card:hover i,
    .admin-feature:hover i,
    .benefit-card:hover i {
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
    
    .run-code-btn:hover {
        animation: pulse 0.5s ease-in-out;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    .flow-step:hover .step-number {
        animation: glow 1s ease-in-out infinite alternate;
    }
    
    @keyframes glow {
        0% { box-shadow: 0 0 5px rgba(102, 126, 234, 0.5); }
        100% { box-shadow: 0 0 20px rgba(102, 126, 234, 0.8); }
    }
    
    .github-btn:hover {
        animation: githubPulse 1s ease-in-out infinite;
    }
    
    @keyframes githubPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;

document.head.appendChild(style);

// Efecto de carga inicial
window.addEventListener('load', function() {
    const overviewSections = document.querySelectorAll('.forms-overview, .admin-overview, .jwt-overview, .project-showcase');
    
    overviewSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'opacity 1s ease, transform 1s ease';
        }, 300 + (index * 200));
    });
    
    // Demostrar flujo de middleware después de 5 segundos
    setTimeout(() => {
        if (document.querySelector('.flow-diagram')) {
            demonstrateMiddlewareFlow();
        }
    }, 5000);
});

