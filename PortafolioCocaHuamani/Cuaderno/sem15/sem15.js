// JavaScript para Semana 15 - Introducción a Flask

document.addEventListener("DOMContentLoaded", function() {
    // Inicializar animaciones
    initializeAnimations();

    // Efectos interactivos
    initializeInteractiveEffects();

    // Simulador de Flask
    initializeFlaskSimulator();

    // Demostración de despliegue
    initializeDeploymentDemo();
});

// Función para inicializar animaciones de entrada
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animatedElements = [
        ".flask-features .feature-card",
        ".example-block",
        ".flow-step",
        ".project-features .feature-item",
        ".summary-card"
    ];

    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(element);
        });
    });
}

// Función para efectos interactivos
function initializeInteractiveEffects() {
    // Efecto hover para tarjetas de características de Flask
    const flaskFeatureCards = document.querySelectorAll(".flask-features .feature-card");
    flaskFeatureCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px) scale(1.05)";
            this.style.boxShadow = "0 20px 40px rgba(102, 126, 234, 0.3)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)";
            this.style.boxShadow = "none";
        });

        card.addEventListener("click", function() {
            const title = this.querySelector("h4").textContent;
            showFlaskFeatureInfo(title);
        });
    });

    // Efecto hover para pasos de despliegue
    const flowSteps = document.querySelectorAll(".flow-step");
    flowSteps.forEach(step => {
        step.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px) scale(1.05)";
            this.style.boxShadow = "0 20px 40px rgba(159, 122, 234, 0.3)";
        });

        step.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)";
            this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
        });

        step.addEventListener("click", function() {
            const title = this.querySelector("h5").textContent;
            showDeploymentStepInfo(title);
        });
    });

    // Efecto de escritura en ejemplos de código
    const codeBlocks = document.querySelectorAll(".code-example code");
    codeBlocks.forEach(codeBlock => {
        codeBlock.addEventListener("mouseenter", function() {
            if (!this.classList.contains("typing")) {
                this.classList.add("typing");
                this.style.background = "linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)";
                this.style.transition = "background 0.5s ease";
            }
        });

        codeBlock.addEventListener("mouseleave", function() {
            this.classList.remove("typing");
            this.style.background = "transparent";
        });
    });

    // Efecto para el botón de GitHub
    const githubBtn = document.querySelector(".github-btn");
    if (githubBtn) {
        githubBtn.addEventListener("mouseenter", function() {
            createGithubStars(this);
        });

        githubBtn.addEventListener("click", function(e) {
            e.preventDefault();
            showGithubMessage();
        });
    }
}

// Función para mostrar información de características de Flask
function showFlaskFeatureInfo(feature) {
    const infoMessages = {
        "Ligero y Flexible": "Flask es un microframework que ofrece solo lo esencial, permitiendo a los desarrolladores elegir sus propias herramientas y librerías.",
        "Basado en Werkzeug y Jinja2": "Utiliza Werkzeug para el manejo de peticiones y respuestas WSGI, y Jinja2 para el motor de plantillas, ambos componentes robustos y probados.",
        "Extensible": "Flask tiene un ecosistema rico de extensiones que añaden funcionalidades como ORMs, autenticación, formularios, etc., sin ser parte del core.",
        "Fácil de Usar": "Su API simple y su documentación clara hacen que Flask sea fácil de aprender y usar, ideal para prototipos rápidos y APIs."
    };

    const message = infoMessages[feature] || `Información sobre ${feature}`;
    showTemporaryMessage(message, "#667eea");
}

// Función para mostrar información de pasos de despliegue
function showDeploymentStepInfo(step) {
    const infoMessages = {
        "Nginx": "Nginx actúa como un proxy inverso, sirviendo archivos estáticos, balanceando la carga y manejando SSL/TLS antes de pasar las peticiones a Gunicorn.",
        "Gunicorn": "Gunicorn es un servidor WSGI que ejecuta la aplicación Flask, manejando múltiples procesos de trabajo para servir las peticiones de manera eficiente.",
        "Flask App": "La aplicación Flask es el código Python que define las rutas, la lógica de negocio y renderiza las plantillas, siendo ejecutada por Gunicorn."
    };

    const message = infoMessages[step] || `Información sobre ${step}`;
    showTemporaryMessage(message, "#9f7aea");
}

// Función para mostrar mensajes temporales
function showTemporaryMessage(message, color = "#667eea") {
    const messageDiv = document.createElement("div");
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
        messageDiv.style.opacity = "1";
        messageDiv.style.transform = "translateX(0)";
    }, 100);

    // Ocultar mensaje después de 4 segundos
    setTimeout(() => {
        messageDiv.style.opacity = "0";
        messageDiv.style.transform = "translateX(100%)";
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }
        }, 300);
    }, 4000);
}

// Función para crear estrellas de GitHub
function createGithubStars(element) {
    const rect = element.getBoundingClientRect();

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("div");
        star.textContent = "⭐";
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
    showTemporaryMessage("🚀 Proyecto Flask completo disponible en GitHub con documentación y ejemplos", "#2d3748");
}

// Función para inicializar simulador de Flask
function initializeFlaskSimulator() {
    const helloWorldExample = document.querySelector(".flask-example .code-example");
    const routingExample = document.querySelector(".routing-examples .example-block .code-example");
    const sqlalchemyExample = document.querySelector(".database-examples .example-block .code-example");

    if (helloWorldExample) {
        addRunButton(helloWorldExample, simulateFlaskHelloWorld);
    }
    if (routingExample) {
        addRunButton(routingExample, simulateFlaskRouting);
    }
    if (sqlalchemyExample) {
        addRunButton(sqlalchemyExample, simulateFlaskSQLAlchemy);
    }
}

// Función para simular ejecución de Flask Hello World
function simulateFlaskHelloWorld(codeExample) {
    const code = codeExample.querySelector("code").textContent;
    let output = "";

    if (code.includes("app = Flask(__name__)")) {
        output = ">>> Iniciando servidor Flask...
>>> * Running on http://127.0.0.1:5000/
>>> * Debug mode: on
>>> Presiona CTRL+C para salir
>>> ¡Hola, mundo desde Flask!";
    } else {
        output = ">>> Comando Flask ejecutado.";
    }
    displaySimulationOutput(codeExample, output);
}

// Función para simular ejecución de rutas de Flask
function simulateFlaskRouting(codeExample) {
    const code = codeExample.querySelector("code").textContent;
    let output = "";

    if (code.includes("@app.route("/")")) {
        output = ">>> Rutas de Flask configuradas...
>>> Accediendo a /: Página de inicio
>>> Accediendo a /usuario/arturo: Perfil de usuario: arturo
>>> Accediendo a /post/123: Post ID: 123
>>> Accediendo a /path/docs/intro: Subruta: docs/intro";
    } else {
        output = ">>> Comando Flask Routing ejecutado.";
    }
    displaySimulationOutput(codeExample, output);
}

// Función para simular ejecución de Flask-SQLAlchemy
function simulateFlaskSQLAlchemy(codeExample) {
    const code = codeExample.querySelector("code").textContent;
    let output = "";

    if (code.includes("db = SQLAlchemy(app)")) {
        output = ">>> Inicializando Flask-SQLAlchemy...
>>> Conectado a la base de datos: sqlite:///site.db
>>> Creando tablas si no existen...
>>> Añadiendo usuario de prueba...
>>> Usuario añadido!
>>> Obteniendo usuarios: [{\'username\': \'testuser\', \'email\': \'test@example.com\'}]";
    } else {
        output = ">>> Comando Flask-SQLAlchemy ejecutado.";
    }
    displaySimulationOutput(codeExample, output);
}

// Función para añadir botón de ejecución a ejemplos de código
function addRunButton(codeExample, simulationFunction) {
    const runButton = document.createElement("button");
    runButton.textContent = "▶ Ejecutar Simulación";
    runButton.className = "run-code-btn";
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

    runButton.addEventListener("mouseenter", function() {
        this.style.background = "#5a67d8";
    });

    runButton.addEventListener("mouseleave", function() {
        this.style.background = "#667eea";
    });

    runButton.addEventListener("click", function() {
        simulationFunction(codeExample);
    });

    codeExample.style.position = "relative";
    codeExample.appendChild(runButton);
}

// Función para mostrar la salida de la simulación
function displaySimulationOutput(codeExample, output) {
    let outputDiv = codeExample.querySelector(".code-output");
    if (!outputDiv) {
        outputDiv = document.createElement("div");
        outputDiv.className = "code-output";
        outputDiv.style.cssText = `
            background: #0f172a;
            color: #10b981;
            padding: 1rem;
            margin-top: 0.5rem;
            border-radius: 5px;
            font-family: 'Source Code Pro', monospace;
            font-size: 0.9rem;
            border-left: 3px solid #10b981;
            white-space: pre-wrap;
        `;
        codeExample.appendChild(outputDiv);
    }

    outputDiv.textContent = "";
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

// Función para demostrar el flujo de despliegue
function initializeDeploymentDemo() {
    const deploymentFlowSection = document.querySelector(".deployment-flow");
    if (deploymentFlowSection) {
        const demoButton = document.createElement("button");
        demoButton.textContent = "🚀 Demostrar Flujo de Despliegue";
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

        demoButton.addEventListener("mouseenter", function() {
            this.style.background = "#5a67d8";
            this.style.transform = "translateY(-2px)";
            this.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
        });

        demoButton.addEventListener("mouseleave", function() {
            this.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 5px 15px rgba(102, 126, 234, 0.3)";
        });

        demoButton.addEventListener("click", function() {
            demonstrateDeploymentFlow();
        });

        deploymentFlowSection.appendChild(demoButton);
    }
}

function demonstrateDeploymentFlow() {
    const steps = document.querySelectorAll(".flow-step");
    const arrows = document.querySelectorAll(".flow-arrow");

    steps.forEach(step => {
        step.style.transform = "scale(1)";
        step.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });
    arrows.forEach(arrow => {
        arrow.style.opacity = "0.5";
    });

    let delay = 0;
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.style.transform = "scale(1.1)";
            step.style.boxShadow = "0 15px 30px rgba(159, 122, 234, 0.5)";
            showTemporaryMessage(`Paso ${index + 1}: ${step.querySelector("h5").textContent}`, "#9f7aea");

            if (index < arrows.length) {
                arrows[index].style.opacity = "1";
                arrows[index].style.transform = "scale(1.2)";
            }

            setTimeout(() => {
                step.style.transform = "scale(1)";
                step.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
                if (index < arrows.length) {
                    arrows[index].style.transform = "scale(1)";
                }
            }, 1500);
        }, delay);
        delay += 2000;
    });

    setTimeout(() => {
        showTemporaryMessage("¡Aplicación Flask desplegada exitosamente!", "#48bb78");
    }, delay);
}

// Agregar estilos de animación CSS dinámicamente
const style = document.createElement("style");
style.textContent = `
    @keyframes float {
        0% { transform: translateX(0) translateY(0); }
        50% { transform: translateX(-50px) translateY(-50px); }
        100% { transform: translateX(0) translateY(0); }
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
        content: "|";
        animation: blink 1s infinite;
        color: #667eea;
    }

    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }

    .run-code-btn:hover {
        animation: pulse 0.5s ease-in-out;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .github-btn:hover {
        animation: githubPulse 1s ease-in-out infinite;
    }

    @keyframes githubPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .flask-features .feature-card:hover i {
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

    .flow-step:hover .step-number {
        animation: rotateScale 0.8s ease-in-out;
    }

    @keyframes rotateScale {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(10deg) scale(1.1); }
        100% { transform: rotate(0deg) scale(1); }
    }

    .project-features .feature-item:hover i {
        animation: pulse 0.8s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;

document.head.appendChild(style);

// Efecto de carga inicial
window.addEventListener("load", function() {
    const overviewSections = document.querySelectorAll(".flask-intro, .routing-templates, .databases-deployment, .github-project");

    overviewSections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";

        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "opacity 1s ease, transform 1s ease";
        }, 300 + (index * 200));
    });

    // Demostrar flujo de despliegue después de 3 segundos
    setTimeout(() => {
        const deploymentFlowSection = document.querySelector(".deployment-flow");
        if (deploymentFlowSection) {
            demonstrateDeploymentFlow();
        }
    }, 3000);
});

