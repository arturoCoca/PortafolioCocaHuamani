// JavaScript para Semana 10 - Lenguaje Python

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tabs
    initializeTabs();
    
    // Animaciones de entrada
    initializeAnimations();
    
    // Efectos interactivos
    initializeInteractiveEffects();
    
    // Simulador de código Python
    initializePythonSimulator();
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
        '.rule-card',
        '.structure-card',
        '.control-section',
        '.oop-section',
        '.exception-section',
        '.modules-section',
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
            this.style.boxShadow = '0 20px 40px rgba(55, 118, 171, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Efecto de escritura en ejemplos de código
    const codeBlocks = document.querySelectorAll('.code-example code');
    codeBlocks.forEach(codeBlock => {
        const originalText = codeBlock.textContent;
        
        codeBlock.addEventListener('mouseenter', function() {
            if (!this.classList.contains('typing')) {
                this.classList.add('typing');
                // Efecto de resaltado en lugar de reescritura para mejor UX
                this.style.background = 'linear-gradient(90deg, rgba(55, 118, 171, 0.1) 0%, transparent 100%)';
                this.style.transition = 'background 0.5s ease';
            }
        });
        
        codeBlock.addEventListener('mouseleave', function() {
            this.classList.remove('typing');
            this.style.background = 'transparent';
        });
    });
    
    // Efecto de click en tarjetas de estructura de datos
    const structureCards = document.querySelectorAll('.structure-card');
    structureCards.forEach(card => {
        card.addEventListener('click', function() {
            // Efecto de click
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px) scale(1)';
            }, 150);
            
            // Mostrar información adicional
            const title = this.querySelector('h3').textContent;
            showPythonInfo(title);
        });
    });
    
    // Animación de las características de Python
    const pythonOverview = document.querySelector('.python-overview');
    if (pythonOverview) {
        pythonOverview.addEventListener('mouseenter', function() {
            createPythonParticles(this);
        });
    }
}

// Función para mostrar información de Python
function showPythonInfo(dataType) {
    const infoMessages = {
        'Listas': 'Las listas en Python son mutables y pueden contener elementos de diferentes tipos. Son ideales para colecciones que cambian de tamaño.',
        'Tuplas': 'Las tuplas son inmutables y se usan para datos que no deben cambiar. Son más eficientes en memoria que las listas.',
        'Diccionarios': 'Los diccionarios almacenan pares clave-valor y son muy eficientes para búsquedas rápidas por clave.'
    };
    
    const message = infoMessages[dataType] || `Información sobre ${dataType} en Python`;
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
        background: linear-gradient(135deg, #3776ab 0%, #ffd43b 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(55, 118, 171, 0.3);
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

// Función para crear partículas de Python
function createPythonParticles(element) {
    const rect = element.getBoundingClientRect();
    const pythonSymbols = ['🐍', '🔧', '⚡', '🚀', '💻'];
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.textContent = pythonSymbols[Math.floor(Math.random() * pythonSymbols.length)];
        particle.style.cssText = `
            position: fixed;
            font-size: 1.5rem;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: pythonParticleFloat 2s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        }, 2000);
    }
}

// Función para inicializar simulador de Python
function initializePythonSimulator() {
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
            background: #3776ab;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background 0.3s ease;
        `;
        
        runButton.addEventListener('mouseenter', function() {
            this.style.background = '#ffd43b';
            this.style.color = '#3776ab';
        });
        
        runButton.addEventListener('mouseleave', function() {
            this.style.background = '#3776ab';
            this.style.color = 'white';
        });
        
        runButton.addEventListener('click', function() {
            simulatePythonExecution(example);
        });
        
        example.style.position = 'relative';
        example.appendChild(runButton);
    });
}

// Función para simular ejecución de código Python
function simulatePythonExecution(codeExample) {
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
    if (code.includes('print(')) {
        output = '>>> Código ejecutado exitosamente\n>>> Salida simulada de Python';
    } else if (code.includes('def ')) {
        output = '>>> Función definida correctamente';
    } else if (code.includes('class ')) {
        output = '>>> Clase creada exitosamente';
    } else if (code.includes('import ')) {
        output = '>>> Módulos importados correctamente';
    } else {
        output = '>>> Código Python válido';
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
    @keyframes pythonParticleFloat {
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
        color: #3776ab;
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
    
    .rule-card:hover h4::before {
        animation: wiggle 0.5s ease-in-out;
    }
    
    @keyframes wiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-5deg); }
        75% { transform: rotate(5deg); }
    }
    
    .run-code-btn:hover {
        animation: pulse 0.5s ease-in-out;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
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
    const pythonOverview = document.querySelector('.python-overview');
    if (pythonOverview) {
        pythonOverview.style.opacity = '0';
        pythonOverview.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            pythonOverview.style.opacity = '1';
            pythonOverview.style.transform = 'translateY(0)';
            pythonOverview.style.transition = 'opacity 1s ease, transform 1s ease';
        }, 300);
    }
});

