document.addEventListener('DOMContentLoaded', function() {
    // Sistema de pestañas
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase active de todos los botones y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            btn.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Mostrar/ocultar resultados de código Emmet
    const showResultBtns = document.querySelectorAll('.show-result-btn');
    
    showResultBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const resultDiv = btn.nextElementSibling;
            if (resultDiv.style.display === 'none' || !resultDiv.style.display) {
                resultDiv.style.display = 'block';
                btn.textContent = 'Ocultar Resultado';
            } else {
                resultDiv.style.display = 'none';
                btn.textContent = 'Mostrar Resultado';
            }
        });
    });
    
    // Efecto de scroll suave para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
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
    
    document.querySelectorAll('.card, .protocol-card, .role-card, .feature').forEach(card => {
        observer.observe(card);
    });
    
    // Mostrar año actual en el footer
    const yearSpan = document.querySelector('.footer-copy span');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});