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
    
    // Cambiar tema demo
    const themeBtn = document.getElementById('change-theme');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const root = document.documentElement;
            const currentTheme = root.style.getPropertyValue('--primary-color');
            
            if (currentTheme === '' || currentTheme === '#3498db') {
                root.style.setProperty('--primary-color', '#e74c3c');
                themeBtn.textContent = 'Tema Rojo';
            } else {
                root.style.setProperty('--primary-color', '#3498db');
                themeBtn.textContent = 'Tema Azul';
            }
            
            // Actualizar el cuadro de demostración
            document.querySelector('.theme-box').style.backgroundColor = 
                getComputedStyle(root).getPropertyValue('--primary-color');
        });
    }
    
    // Demo de scroll animation
    const scrollAnimationDemo = document.querySelector('.scroll-animation');
    if (scrollAnimationDemo) {
        window.addEventListener('scroll', () => {
            const rect = scrollAnimationDemo.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
                scrollAnimationDemo.style.animation = 'fadeIn 1s ease';
            }
        });
    }
    
    // Mostrar año actual en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
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
    
    document.querySelectorAll('.card, .exercise, .reflection-card').forEach(el => {
        observer.observe(el);
    });
    
    // Demo interactiva de Container Queries
    const cqDemo = document.querySelector('.container-query-demo');
    if (cqDemo) {
        const resizeInfo = document.createElement('div');
        resizeInfo.className = 'resize-info';
        resizeInfo.textContent = '← Redimensiona para ver el efecto →';
        cqDemo.parentNode.insertBefore(resizeInfo, cqDemo.nextSibling);
        
        const updateSizeInfo = () => {
            const width = cqDemo.offsetWidth;
            resizeInfo.textContent = `Ancho actual: ${width}px ← Redimensiona para ver el efecto →`;
        };
        
        updateSizeInfo();
        
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateSizeInfo, 200);
        });
    }
});