// JavaScript para Semana 11 - Introducción a Django

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tabs
    initializeTabs();
    
    // Animaciones de entrada
    initializeAnimations();
    
    // Efectos interactivos
    initializeInteractiveEffects();
    
    // Simulador de Django
    initializeDjangoSimulator();
});

// Función para inicializar las pestañas
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
        '.feature-card',
        '.install-step',
        '.mvc-layer',
        '.mtv-layer',
        '.flow-step',
        '.command-card',
        '.apache-step',
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
    // Efecto hover para las tarjetas de características
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(9, 46, 32, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Animación del flujo MTV
    const flowSteps = document.querySelectorAll('.flow-step');
    flowSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', function() {
            // Resaltar el paso actual
            this.style.transform = 'scale(1.1)';
            this.style.zIndex = '10';
            
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
            
            // Restaurar todos los pasos
            flowSteps.forEach(otherStep => {
                otherStep.style.opacity = '1';
                otherStep.style.transform = 'scale(1)';
            });
        });
    });
    
    // Efecto de escritura en ejemplos de código
    const codeBlocks = document.querySelectorAll('.code-example code');
    codeBlocks.forEach(codeBlock => {
        codeBlock.addEventListener('mouseenter', function() {
            if (!this.classList.contains('typing')) {
                this.classList.add('typing');
                this.style.background = 'linear-gradient(90deg, rgba(9, 46, 32, 0.1) 0%, transparent 100%)';
                this.style.transition = 'background 0.5s ease';
            }
        });
        
        codeBlock.addEventListener('mouseleave', function() {
            this.classList.remove('typing');
            this.style.background = 'transparent';
        });
    });
    
    // Efecto de click en capas MTV
    const mtvLayers = document.querySelectorAll('.mtv-layer');
    mtvLayers.forEach(layer => {
        layer.addEventListener('click', function() {
            // Efecto de click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateX(10px) scale(1)';
            }, 150);
            
            // Mostrar información adicional
            const title = this.querySelector('h4').textContent;
            showDjangoInfo(title);
        });
    });
    
    // Animación de la introducción a Django
    const djangoOverview = document.querySelector('.django-overview');
    if (djangoOverview) {
        djangoOverview.addEventListener('mouseenter', function() {
            createDjangoParticles(this);
        });
    }
}

// Función para mostrar información de Django
function showDjangoInfo(layerType) {
    const infoMessages = {
        'Model': 'Los modelos en Django definen la estructura de datos y proporcionan una API de alto nivel para interactuar con la base de datos usando el ORM.',
        'Template': 'Las plantillas en Django separan la presentación de la lógica, permitiendo crear interfaces dinámicas con herencia y bloques reutilizables.',
        'View': 'Las vistas contienen la lógica de negocio, procesan peticiones HTTP y coordinan entre modelos y plantillas para generar respuestas.'
    };
    
    const message = infoMessages[layerType] || `Información sobre ${layerType} en Django`;
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
        background: linear-gradient(135deg, #092e20 0%, #0c4b33 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(9, 46, 32, 0.3);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 350px;
        font-size: 0.9rem;
        line-height: 1.4;
        border: 1px solid rgba(68, 183, 139, 0.3);
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

// Función para crear partículas de Django
function createDjangoParticles(element) {
    const rect = element.getBoundingClientRect();
    const djangoSymbols = ['🚀', '⚙️', '🔧', '💻', '🐍'];
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.textContent = djangoSymbols[Math.floor(Math.random() * djangoSymbols.length)];
        particle.style.cssText = `
            position: fixed;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: djangoParticleFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 2000);
    }
}

// Función para inicializar simulador de Django
function initializeDjangoSimulator() {
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
            background: #092e20;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background 0.3s ease;
        `;
        
        runButton.addEventListener('mouseenter', function() {
            this.style.background = '#44b78b';
        });
        
        runButton.addEventListener('mouseleave', function() {
            this.style.background = '#092e20';
        });
        
        runButton.addEventListener('click', function() {
            simulateDjangoExecution(example);
        });
        
        example.style.position = 'relative';
        example.appendChild(runButton);
    });
}

// Función para simular ejecución de código Django
function simulateDjangoExecution(codeExample) {
    const code = codeExample.querySelector('code').textContent;
    
    // Crear div de salida
    let outputDiv = codeExample.querySelector('.code-output');
    if (!outputDiv) {
        outputDiv = document.createElement('div');
        outputDiv.className = 'code-output';
        outputDiv.style.cssText = `
            background: #0f172a;
            color: #44b78b;
            padding: 1rem;
            margin-top: 0.5rem;
            border-radius: 5px;
            font-family: 'Source Code Pro', monospace;
            font-size: 0.9rem;
            border-left: 3px solid #44b78b;
        `;
        codeExample.appendChild(outputDiv);
    }
    
    // Simular salida basada en el contenido del código
    let output = '';
    if (code.includes('django-admin startproject')) {
        output = '>>> Proyecto Django creado exitosamente\n>>> Estructura de archivos generada';
    } else if (code.includes('python manage.py')) {
        output = '>>> Comando Django ejecutado correctamente\n>>> Servidor de desarrollo iniciado en http://127.0.0.1:8000/';
    } else if (code.includes('class') && code.includes('models.Model')) {
        output = '>>> Modelo Django definido correctamente\n>>> Listo para crear migraciones';
    } else if (code.includes('def') && code.includes('request')) {
        output = '>>> Vista Django configurada\n>>> Función de vista lista para procesar peticiones';
    } else if (code.includes('urlpatterns')) {
        output = '>>> URLs configuradas correctamente\n>>> Sistema de enrutamiento activo';
    } else if (code.includes('{% extends')) {
        output = '>>> Plantilla Django válida\n>>> Sistema de herencia configurado';
    } else {
        output = '>>> Código Django válido\n>>> Listo para integración';
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

// Función para demostrar el flujo MTV
function demonstrateMTVFlow() {
    const flowSteps = document.querySelectorAll('.flow-step');
    
    flowSteps.forEach((step, index) => {
        setTimeout(() => {
            step.style.background = '#44b78b';
            step.style.color = 'white';
            step.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                step.style.background = '#fff';
                step.style.color = 'inherit';
                step.style.transform = 'scale(1)';
            }, 1000);
        }, index * 500);
    });
}

// Agregar estilos de animación CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes djangoParticleFloat {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) rotate(360deg) scale(0.5);
        }
    }
    
    .typing {
        position: relative;
    }
    
    .typing::after {
        content: '|';
        animation: blink 1s infinite;
        color: #092e20;
    }
    
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    .feature-card:hover i {
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
    
    .install-step:hover h4::before {
        animation: spin 1s ease-in-out;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
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
        0% { box-shadow: 0 0 5px rgba(9, 46, 32, 0.5); }
        100% { box-shadow: 0 0 20px rgba(68, 183, 139, 0.8); }
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

// Efecto de carga inicial
window.addEventListener('load', function() {
    const djangoOverview = document.querySelector('.django-overview');
    if (djangoOverview) {
        djangoOverview.style.opacity = '0';
        djangoOverview.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            djangoOverview.style.opacity = '1';
            djangoOverview.style.transform = 'translateY(0)';
            djangoOverview.style.transition = 'opacity 1s ease, transform 1s ease';
        }, 300);
    }
    
    // Demostrar flujo MTV después de 3 segundos
    setTimeout(() => {
        if (document.querySelector('.flow-diagram')) {
            demonstrateMTVFlow();
        }
    }, 3000);
});

