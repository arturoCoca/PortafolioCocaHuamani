// JavaScript para Semana 13 - APIs RESTful

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tabs
    initializeTabs();
    
    // Inicializar animaciones
    initializeAnimations();
    
    // Efectos interactivos
    initializeInteractiveEffects();
    
    // Simulador de API REST
    initializeRESTSimulator();
    
    // Demostración de métodos HTTP
    initializeHTTPMethodsDemo();
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
        '.principle-card',
        '.method-card',
        '.benefit-item',
        '.method-option',
        '.concept-card',
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
    // Efecto hover para tarjetas de principios REST
    const principleCards = document.querySelectorAll('.principle-card');
    principleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
            createRESTParticles(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        card.addEventListener('click', function() {
            const title = this.querySelector('h5').textContent;
            showRESTInfo(title);
        });
    });
    
    // Efecto hover para tarjetas de métodos HTTP
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('click', function() {
            const method = this.querySelector('h4').textContent;
            demonstrateHTTPMethod(method);
        });
    });
    
    // Efecto hover para opciones de métodos AJAX
    const methodOptions = document.querySelectorAll('.method-option');
    methodOptions.forEach(option => {
        option.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
            this.style.boxShadow = '0 20px 40px rgba(66, 153, 225, 0.3)';
        });
        
        option.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        option.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            showAJAXInfo(title);
        });
    });
    
    // Efecto para tarjetas de conceptos de seguridad
    const conceptCards = document.querySelectorAll('.concept-card');
    conceptCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            showSecurityInfo(title);
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
    
    // Efecto para endpoints de API
    const endpointItems = document.querySelectorAll('.endpoint-item');
    endpointItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.1)';
            this.style.borderRadius = '8px';
            this.style.padding = '1rem';
            this.style.margin = '0.2rem 0';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'transparent';
            this.style.padding = '0.8rem 0';
            this.style.margin = '0';
        });
        
        item.addEventListener('click', function() {
            const method = this.querySelector('.method').textContent;
            const endpoint = this.querySelector('code').textContent;
            demonstrateAPICall(method, endpoint);
        });
    });
}

// Función para mostrar información de REST
function showRESTInfo(principle) {
    const infoMessages = {
        'Cliente-Servidor': 'La separación cliente-servidor permite que ambos evolucionen independientemente, mejorando la escalabilidad y mantenibilidad.',
        'Sin Estado': 'Cada petición HTTP contiene toda la información necesaria, eliminando la dependencia del estado del servidor.',
        'Cacheable': 'Las respuestas pueden ser cacheadas para mejorar el rendimiento y reducir la carga del servidor.',
        'Interfaz Uniforme': 'Uso consistente de métodos HTTP (GET, POST, PUT, DELETE) para operaciones CRUD.',
        'Sistema en Capas': 'Arquitectura modular que permite proxies, gateways y balanceadores de carga.',
        'Código bajo Demanda': 'Capacidad opcional de enviar código ejecutable al cliente (JavaScript, applets).'
    };
    
    const message = infoMessages[principle] || `Información sobre ${principle}`;
    showTemporaryMessage(message, '#667eea');
}

// Función para mostrar información de AJAX
function showAJAXInfo(method) {
    const infoMessages = {
        'Fetch API': 'API moderna nativa del navegador que utiliza promesas y proporciona una interfaz más limpia que XMLHttpRequest.',
        'Axios': 'Librería popular que simplifica las peticiones HTTP con interceptores, transformaciones automáticas y mejor manejo de errores.',
        'jQuery AJAX': 'Método tradicional que simplifica AJAX pero requiere la librería jQuery como dependencia.'
    };
    
    const message = infoMessages[method] || `Información sobre ${method}`;
    showTemporaryMessage(message, '#4299e1');
}

// Función para mostrar información de seguridad
function showSecurityInfo(concept) {
    const infoMessages = {
        'CSRF (Cross-Site Request Forgery)': 'Protección contra ataques que ejecutan acciones maliciosas usando la sesión autenticada del usuario.',
        'CORS (Cross-Origin Resource Sharing)': 'Mecanismo que permite o restringe el acceso a recursos desde diferentes dominios por seguridad.'
    };
    
    const message = infoMessages[concept] || `Información sobre ${concept}`;
    const color = concept.includes('CSRF') ? '#f56565' : '#48bb78';
    showTemporaryMessage(message, color);
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

// Función para crear partículas REST
function createRESTParticles(element) {
    const rect = element.getBoundingClientRect();
    const restSymbols = ['🔄', '⚡', '🌐', '📡', '🔗'];
    
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.textContent = restSymbols[Math.floor(Math.random() * restSymbols.length)];
        particle.style.cssText = `
            position: fixed;
            font-size: 1.2rem;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
            animation: restParticleFloat 1.5s ease-out forwards;
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
    showTemporaryMessage('🚀 API RESTful completa disponible en GitHub con documentación y ejemplos', '#2d3748');
}

// Función para demostrar métodos HTTP
function demonstrateHTTPMethod(method) {
    const methodInfo = {
        'GET': {
            description: 'Obtiene recursos del servidor sin modificarlos',
            example: 'GET /api/usuarios/ - Obtener lista de usuarios',
            color: '#48bb78'
        },
        'POST': {
            description: 'Crea nuevos recursos en el servidor',
            example: 'POST /api/usuarios/ - Crear nuevo usuario',
            color: '#4299e1'
        },
        'PUT': {
            description: 'Actualiza completamente un recurso existente',
            example: 'PUT /api/usuarios/1/ - Actualizar usuario completo',
            color: '#ed8936'
        },
        'PATCH': {
            description: 'Actualiza parcialmente un recurso existente',
            example: 'PATCH /api/usuarios/1/ - Actualizar campos específicos',
            color: '#9f7aea'
        },
        'DELETE': {
            description: 'Elimina un recurso del servidor',
            example: 'DELETE /api/usuarios/1/ - Eliminar usuario',
            color: '#f56565'
        }
    };
    
    const info = methodInfo[method];
    if (info) {
        showTemporaryMessage(`${method}: ${info.description}. Ejemplo: ${info.example}`, info.color);
    }
}

// Función para demostrar llamadas a API
function demonstrateAPICall(method, endpoint) {
    const callInfo = {
        'GET': 'Obteniendo datos...',
        'POST': 'Creando recurso...',
        'PUT': 'Actualizando recurso...',
        'DELETE': 'Eliminando recurso...'
    };
    
    const message = `${callInfo[method] || 'Procesando...'} ${endpoint}`;
    showTemporaryMessage(message, '#667eea');
    
    // Simular respuesta después de 2 segundos
    setTimeout(() => {
        const responses = {
            'GET': '✅ Datos obtenidos exitosamente',
            'POST': '✅ Recurso creado correctamente',
            'PUT': '✅ Recurso actualizado',
            'DELETE': '✅ Recurso eliminado'
        };
        showTemporaryMessage(responses[method] || '✅ Operación completada', '#48bb78');
    }, 2000);
}

// Función para inicializar simulador REST
function initializeRESTSimulator() {
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
            simulateRESTExecution(example);
        });
        
        example.style.position = 'relative';
        example.appendChild(runButton);
    });
}

// Función para simular ejecución de código REST
function simulateRESTExecution(codeExample) {
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
    if (code.includes('fetch') || code.includes('axios')) {
        output = '>>> Petición HTTP enviada\n>>> Respuesta recibida: 200 OK\n>>> Datos procesados correctamente';
    } else if (code.includes('serializers')) {
        output = '>>> Serializer configurado\n>>> Validación automática habilitada\n>>> Transformación de datos lista';
    } else if (code.includes('CORS') || code.includes('cors')) {
        output = '>>> CORS configurado correctamente\n>>> Orígenes permitidos establecidos\n>>> Headers de seguridad aplicados';
    } else if (code.includes('CSRF') || code.includes('csrf')) {
        output = '>>> Protección CSRF activada\n>>> Token generado automáticamente\n>>> Middleware configurado';
    } else if (code.includes('filter') || code.includes('Filter')) {
        output = '>>> Sistema de filtros configurado\n>>> Búsqueda y ordenamiento habilitados\n>>> Paginación implementada';
    } else if (code.includes('_links') || code.includes('HATEOAS')) {
        output = '>>> HATEOAS implementado\n>>> Enlaces dinámicos generados\n>>> API autodescriptiva activa';
    } else {
        output = '>>> Código REST ejecutado\n>>> API funcionando correctamente';
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

// Función para inicializar demostración de métodos HTTP
function initializeHTTPMethodsDemo() {
    // Crear botón para demostrar flujo completo
    const methodsSection = document.querySelector('.http-methods');
    if (methodsSection) {
        const demoButton = document.createElement('button');
        demoButton.textContent = '🚀 Demostrar Flujo REST Completo';
        demoButton.style.cssText = `
            display: block;
            margin: 2rem auto;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            transition: transform 0.3s ease;
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
        `;
        
        demoButton.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
        });
        
        demoButton.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
        });
        
        demoButton.addEventListener('click', function() {
            demonstrateCompleteRESTFlow();
        });
        
        methodsSection.appendChild(demoButton);
    }
}

// Función para demostrar flujo REST completo
function demonstrateCompleteRESTFlow() {
    const methods = ['GET', 'POST', 'PUT', 'DELETE'];
    const methodCards = document.querySelectorAll('.method-card');
    
    methods.forEach((method, index) => {
        setTimeout(() => {
            const card = Array.from(methodCards).find(card => 
                card.querySelector('h4').textContent === method
            );
            
            if (card) {
                // Resaltar tarjeta
                card.style.transform = 'scale(1.1)';
                card.style.zIndex = '10';
                card.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.4)';
                
                // Mostrar información del método
                demonstrateHTTPMethod(method);
                
                // Restaurar tarjeta después de 1 segundo
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                    card.style.zIndex = '1';
                    card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
                }, 1000);
            }
        }, index * 1500);
    });
    
    // Mensaje final
    setTimeout(() => {
        showTemporaryMessage('🎉 Flujo REST completo demostrado: CRUD operations implementadas', '#48bb78');
    }, methods.length * 1500);
}

// Agregar estilos de animación CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes restParticleFloat {
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
    
    .principle-card:hover i,
    .method-option:hover h4,
    .feature-item:hover i {
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
    
    .method-card:hover h4 {
        animation: glow 1s ease-in-out infinite alternate;
    }
    
    @keyframes glow {
        0% { text-shadow: 0 0 5px currentColor; }
        100% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
    }
    
    .endpoint-item:hover .method {
        animation: methodPulse 1s ease-in-out infinite;
    }
    
    @keyframes methodPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;

document.head.appendChild(style);

// Efecto de carga inicial
window.addEventListener('load', function() {
    const overviewSections = document.querySelectorAll('.rest-overview, .ajax-overview, .project-showcase');
    
    overviewSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            section.style.transition = 'opacity 1s ease, transform 1s ease';
        }, 300 + (index * 200));
    });
    
    // Demostrar flujo REST después de 3 segundos
    setTimeout(() => {
        if (document.querySelector('.methods-grid')) {
            const welcomeMessage = '🌟 Bienvenido a APIs RESTful - Haz clic en las tarjetas para explorar';
            showTemporaryMessage(welcomeMessage, '#667eea');
        }
    }, 3000);
});

