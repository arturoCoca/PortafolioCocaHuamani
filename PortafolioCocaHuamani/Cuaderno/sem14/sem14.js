// JavaScript para Semana 14 - Microservicios

document.addEventListener("DOMContentLoaded", function() {
    // Inicializar animaciones
    initializeAnimations();

    // Efectos interactivos
    initializeInteractiveEffects();

    // Simulador de Docker
    initializeDockerSimulator();

    // Simulador de Kubernetes
    initializeKubernetesSimulator();

    // Demostración de arquitectura
    initializeArchitectureDemo();
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
        ".architecture-card",
        ".principle-item",
        ".benefit-card",
        ".component-card",
        ".example-section",
        ".feature-item",
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
    // Efecto hover para tarjetas de arquitectura
    const architectureCards = document.querySelectorAll(".architecture-card");
    architectureCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px) scale(1.02)";
            this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)";
            this.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
        });

        card.addEventListener("click", function() {
            const title = this.querySelector("h4").textContent;
            showArchitectureInfo(title);
        });
    });

    // Efecto hover para principios de microservicios
    const principleItems = document.querySelectorAll(".principle-item");
    principleItems.forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-5px)";
            this.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
        });

        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
        });

        item.addEventListener("click", function() {
            const title = this.querySelector("h4").textContent;
            showPrincipleInfo(title);
        });
    });

    // Efecto hover para beneficios de Docker
    const dockerBenefitCards = document.querySelectorAll(".docker-benefits .benefit-card");
    dockerBenefitCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px) scale(1.05)";
            this.style.boxShadow = "0 20px 40px rgba(66, 153, 225, 0.3)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(-5px) scale(1)";
            this.style.boxShadow = "none";
        });

        card.addEventListener("click", function() {
            const title = this.querySelector("h4").textContent;
            showDockerBenefitInfo(title);
        });
    });

    // Efecto hover para componentes de Kubernetes
    const k8sComponentCards = document.querySelectorAll(".component-card");
    k8sComponentCards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px) scale(1.05)";
            this.style.boxShadow = "0 20px 40px rgba(159, 122, 234, 0.3)";
        });

        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(-5px) scale(1)";
            this.style.boxShadow = "none";
        });

        card.addEventListener("click", function() {
            const title = this.querySelector("h5").textContent;
            showK8sComponentInfo(title);
        });
    });

    // Efecto hover para características de API Gateway y Service Mesh
    const gatewayMeshFeatures = document.querySelectorAll(".gateway-features .feature-item, .mesh-benefits .benefit-item");
    gatewayMeshFeatures.forEach(item => {
        item.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-5px)";
            this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
        });

        item.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
        });

        item.addEventListener("click", function() {
            const title = this.querySelector("h4").textContent;
            showGatewayMeshInfo(title);
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

// Función para mostrar información de arquitectura
function showArchitectureInfo(architectureType) {
    const infoMessages = {
        "Arquitectura Monolítica": "Un monolito es una aplicación construida como una única unidad cohesiva. Es simple de desarrollar inicialmente pero difícil de escalar y mantener a largo plazo.",
        "Arquitectura de Microservicios": "Los microservicios son pequeñas aplicaciones independientes que se comunican entre sí. Ofrecen escalabilidad, flexibilidad y resiliencia, pero añaden complejidad de gestión."
    };

    const message = infoMessages[architectureType] || `Información sobre ${architectureType}`;
    const color = architectureType.includes("Monolítica") ? "#f56565" : "#48bb78";
    showTemporaryMessage(message, color);
}

// Función para mostrar información de principios de microservicios
function showPrincipleInfo(principle) {
    const infoMessages = {
        "Single Responsibility": "Cada microservicio debe tener una única responsabilidad bien definida, haciendo que sea más fácil de entender, desarrollar y desplegar.",
        "Loose Coupling": "Los microservicios deben ser independientes entre sí, con mínimas dependencias, para que los cambios en uno no afecten a otros.",
        "High Cohesion": "Las funcionalidades relacionadas deben agruparse dentro del mismo microservicio, aumentando la cohesión interna.",
        "Database per Service": "Cada microservicio debe tener su propia base de datos, lo que permite la elección de la tecnología de base de datos más adecuada y la independencia de datos.",
        "Decentralized": "El gobierno y la toma de decisiones deben ser descentralizados, permitiendo a los equipos autonomía sobre sus servicios.",
        "Fault Tolerance": "Los microservicios deben diseñarse para ser resilientes a fallos, implementando patrones como circuit breakers y reintentos."
    };

    const message = infoMessages[principle] || `Información sobre ${principle}`;
    showTemporaryMessage(message, "#667eea");
}

// Función para mostrar información de beneficios de Docker
function showDockerBenefitInfo(benefit) {
    const infoMessages = {
        "Portabilidad": "Los contenedores Docker pueden ejecutarse de manera consistente en cualquier entorno, desde el desarrollo hasta la producción.",
        "Aislamiento": "Cada aplicación se ejecuta en su propio contenedor aislado, evitando conflictos de dependencias y garantizando un entorno limpio.",
        "Eficiencia": "Los contenedores son ligeros y comparten el kernel del sistema operativo, lo que los hace más eficientes que las máquinas virtuales.",
        "Escalabilidad": "Docker facilita el escalado horizontal de aplicaciones, permitiendo replicar contenedores rápidamente para manejar mayor carga."
    };

    const message = infoMessages[benefit] || `Información sobre ${benefit}`;
    showTemporaryMessage(message, "#4299e1");
}

// Función para mostrar información de componentes de Kubernetes
function showK8sComponentInfo(component) {
    const infoMessages = {
        "Pod": "La unidad más pequeña de despliegue en Kubernetes, que puede contener uno o más contenedores.",
        "Deployment": "Define cómo desplegar y escalar un conjunto de Pods, gestionando las actualizaciones y el rollback.",
        "Service": "Abstracción que define un conjunto lógico de Pods y una política para acceder a ellos, proporcionando balanceo de carga.",
        "Ingress": "Gestiona el acceso externo a los servicios dentro del clúster, proporcionando enrutamiento HTTP/HTTPS.",
        "ConfigMap": "Almacena datos de configuración no sensibles en pares clave-valor, desacoplando la configuración de la imagen del contenedor.",
        "Secret": "Almacena datos sensibles como contraseñas, tokens OAuth y claves SSH de forma segura."
    };

    const message = infoMessages[component] || `Información sobre ${component}`;
    showTemporaryMessage(message, "#9f7aea");
}

// Función para mostrar información de API Gateway y Service Mesh
function showGatewayMeshInfo(feature) {
    const infoMessages = {
        "Enrutamiento": "El API Gateway dirige las peticiones entrantes al microservicio adecuado.",
        "Autenticación": "El API Gateway puede centralizar la autenticación de usuarios antes de que las peticiones lleguen a los microservicios.",
        "Rate Limiting": "Controla el número de peticiones que un cliente puede hacer en un período de tiempo determinado.",
        "Monitoreo": "El API Gateway recopila métricas y logs de todas las peticiones, facilitando el monitoreo centralizado.",
        "Observabilidad": "Un service mesh proporciona métricas, logs y trazas automáticas para entender el comportamiento de los servicios.",
        "Seguridad": "Implementa mTLS (mutual TLS) automáticamente entre servicios, cifrando y autenticando la comunicación.",
        "Traffic Management": "Permite controlar el flujo de tráfico entre servicios, incluyendo balanceo de carga avanzado y circuit breakers.",
        "Policy Enforcement": "Aplica políticas de acceso y otras reglas de negocio a la comunicación entre servicios."
    };

    const message = infoMessages[feature] || `Información sobre ${feature}`;
    const color = feature.includes("Gateway") ? "#ed8936" : "#38b2ac";
    showTemporaryMessage(message, color);
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
    showTemporaryMessage("🚀 Proyecto de Microservicios completo disponible en GitHub con documentación y ejemplos", "#2d3748");
}

// Función para inicializar simulador de Docker
function initializeDockerSimulator() {
    const dockerfileExample = document.querySelector(".docker-examples .example-section:nth-child(1) .code-example");
    const composeExample = document.querySelector(".docker-examples .example-section:nth-child(2) .code-example");

    if (dockerfileExample) {
        addRunButton(dockerfileExample, simulateDockerfileExecution);
    }
    if (composeExample) {
        addRunButton(composeExample, simulateComposeExecution);
    }
}

// Función para simular ejecución de Dockerfile
function simulateDockerfileExecution(codeExample) {
    const code = codeExample.querySelector("code").textContent;
    let output = "";

    if (code.includes("FROM python")) {
        output = ">>> Construyendo imagen Docker...
>>> Paso 1/8: FROM python:3.11-slim
>>> Paso 2/8: WORKDIR /app
>>> ...
>>> Paso 8/8: CMD [\"gunicorn\"]
>>> Imagen construida exitosamente: myapp:latest";
    } else {
        output = ">>> Comando Dockerfile ejecutado.";
    }
    displaySimulationOutput(codeExample, output);
}

// Función para simular ejecución de Docker Compose
function simulateComposeExecution(codeExample) {
    const code = codeExample.querySelector("code").textContent;
    let output = "";

    if (code.includes("services:")) {
        output = ">>> Levantando servicios Docker Compose...
>>> Creating network microservices-network
>>> Creating user-db ... done
>>> Creating order-db ... done
>>> Creating payment-db ... done
>>> Creating redis ... done
>>> Creating user-service ... done
>>> Creating order-service ... done
>>> Creating payment-service ... done
>>> Creating api-gateway ... done
>>> Todos los servicios están corriendo.";
    } else {
        output = ">>> Comando Docker Compose ejecutado.";
    }
    displaySimulationOutput(codeExample, output);
}

// Función para inicializar simulador de Kubernetes
function initializeKubernetesSimulator() {
    const deploymentExample = document.querySelector(".kubernetes-examples .example-section:nth-child(1) .code-example");
    const ingressExample = document.querySelector(".kubernetes-examples .example-section:nth-child(2) .code-example");

    if (deploymentExample) {
        addRunButton(deploymentExample, simulateK8sDeploymentExecution);
    }
    if (ingressExample) {
        addRunButton(ingressExample, simulateK8sIngressExecution);
    }
}

// Función para simular ejecución de Deployment de Kubernetes
function simulateK8sDeploymentExecution(codeExample) {
    const code = codeExample.querySelector("code").textContent;
    let output = "";

    if (code.includes("kind: Deployment")) {
        output = ">>> Aplicando configuración de Deployment...
>>> deployment.apps/user-service created
>>> service/user-service created
>>> Pods de user-service escalados a 3 réplicas.";
    } else {
        output = ">>> Comando Kubernetes ejecutado.";
    }
    displaySimulationOutput(codeExample, output);
}

// Función para simular ejecución de Ingress de Kubernetes
function simulateK8sIngressExecution(codeExample) {
    const code = codeExample.querySelector("code").textContent;
    let output = "";

    if (code.includes("kind: Ingress")) {
        output = ">>> Aplicando configuración de Ingress...
>>> ingress.networking.k8s.io/microservices-ingress created
>>> Reglas de enrutamiento configuradas para /users, /orders, /payments.";
    } else {
        output = ">>> Comando Kubernetes ejecutado.";
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

// Función para demostrar la arquitectura de microservicios
function initializeArchitectureDemo() {
    const monolithCard = document.querySelector(".architecture-card.monolith");
    const microservicesCard = document.querySelector(".architecture-card.microservices");

    if (monolithCard && microservicesCard) {
        const demoButton = document.createElement("button");
        demoButton.textContent = "🔄 Demostrar Comparación de Arquitecturas";
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
            this.style.transform = "translateY(-2px)";
            this.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.4)";
        });

        demoButton.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 5px 15px rgba(102, 126, 234, 0.3)";
        });

        demoButton.addEventListener("click", function() {
            demonstrateArchitectureComparison(monolithCard, microservicesCard);
        });

        document.querySelector(".architecture-comparison").appendChild(demoButton);
    }
}

function demonstrateArchitectureComparison(monolithCard, microservicesCard) {
    // Resaltar monolito
    monolithCard.style.transform = "scale(1.05)";
    monolithCard.style.boxShadow = "0 25px 50px rgba(245, 101, 101, 0.5)";
    showTemporaryMessage("Monolito: Simple al inicio, complejo al escalar.", "#f56565");

    setTimeout(() => {
        monolithCard.style.transform = "scale(1)";
        monolithCard.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";

        // Resaltar microservicios
        microservicesCard.style.transform = "scale(1.05)";
        microservicesCard.style.boxShadow = "0 25px 50px rgba(72, 187, 120, 0.5)";
        showTemporaryMessage("Microservicios: Escalables y flexibles, pero con mayor complejidad.", "#48bb78");

        setTimeout(() => {
            microservicesCard.style.transform = "scale(1)";
            microservicesCard.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
            showTemporaryMessage("¡Elige la arquitectura adecuada para tu proyecto!", "#667eea");
        }, 2000);
    }, 2000);
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

    .architecture-card.monolith:hover h4 {
        color: #e53e3e;
    }

    .architecture-card.microservices:hover h4 {
        color: #38a169;
    }

    .principle-item:hover i {
        animation: rotateScale 0.8s ease-in-out;
    }

    @keyframes rotateScale {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(10deg) scale(1.1); }
        100% { transform: rotate(0deg) scale(1); }
    }

    .benefit-card:hover i,
    .component-card:hover i,
    .gateway-features .feature-item:hover i,
    .mesh-benefits .benefit-item:hover i,
    .project-features .feature-item:hover i {
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

    .architecture-diagram .layer:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .architecture-diagram .layer.frontend:hover {
        border-left-color: #3182ce;
    }

    .architecture-diagram .layer.gateway:hover {
        border-left-color: #c05621;
    }

    .architecture-diagram .layer.services:hover {
        border-left-color: #38a169;
    }

    .architecture-diagram .layer.data:hover {
        border-left-color: #805ad5;
    }
`;

document.head.appendChild(style);

// Efecto de carga inicial
window.addEventListener("load", function() {
    const overviewSections = document.querySelectorAll(".microservices-intro, .docker-containerization, .kubernetes-orchestration, .api-gateway-service-mesh, .github-project");

    overviewSections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";

        setTimeout(() => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
            section.style.transition = "opacity 1s ease, transform 1s ease";
        }, 300 + (index * 200));
    });

    // Demostrar comparación de arquitectura después de 3 segundos
    setTimeout(() => {
        const monolithCard = document.querySelector(".architecture-card.monolith");
        const microservicesCard = document.querySelector(".architecture-card.microservices");
        if (monolithCard && microservicesCard) {
            demonstrateArchitectureComparison(monolithCard, microservicesCard);
        }
    }, 3000);
});

