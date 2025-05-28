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
    
    // Mostrar año actual en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Demo interactiva de TypeScript
    const tsDemoBtn = document.getElementById('ts-demo-btn');
    if (tsDemoBtn) {
        tsDemoBtn.addEventListener('click', () => {
            const output = document.getElementById('ts-demo-output');
            output.innerHTML = '';
            
            // Ejemplo de TypeScript (simulado)
            const code = `interface User {
    id: number;
    name: string;
    email: string;
}

function greetUser(user: User) {
    return \`Hola, \${user.name}!\`;
}

const user = { id: 1, name: 'Ana', email: 'ana@example.com' };
output.innerHTML = \`<p>\${greetUser(user)}</p>\`;

// Error intencional (simulado)
// const wrongUser = { id: '1', name: 'Carlos' };
// output.innerHTML += \`<p>\${greetUser(wrongUser)}</p>\`;`;
            
            try {
                // Simulamos la ejecución de TypeScript
                const fakeUser = { id: 1, name: 'Ana', email: 'ana@example.com' };
                output.innerHTML = `<p>Hola, ${fakeUser.name}!</p>`;
                output.innerHTML += `<div class="success-message">Código TypeScript válido</div>`;
                
                // Simulamos un error de TypeScript
                output.innerHTML += `<div class="error-message">// Error: El objeto no coincide con el tipo User (falta email)</div>`;
            } catch (error) {
                output.innerHTML = `<div class="error-message">Error: ${error.message}</div>`;
            }
        });
    }
    
    // Demo de renderizado condicional
    const condRenderBtn = document.getElementById('cond-render-btn');
    if (condRenderBtn) {
        condRenderBtn.addEventListener('click', function() {
            this.textContent = this.textContent.includes('Mostrar') ? 
                'Ocultar Detalles' : 'Mostrar Detalles';
            const details = document.getElementById('cond-render-details');
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });
    }
    
    // Demo de listas
    const listDemoBtn = document.getElementById('list-demo-btn');
    if (listDemoBtn) {
        listDemoBtn.addEventListener('click', () => {
            const output = document.getElementById('list-demo-output');
            output.innerHTML = '';
            
            const items = ['Manzana', 'Banana', 'Naranja', 'Pera'];
            items.forEach(item => {
                output.innerHTML += `<li>${item}</li>`;
            });
        });
    }
    
    // Demo de estilos
    const styleDemoBtn = document.getElementById('style-demo-btn');
    if (styleDemoBtn) {
        styleDemoBtn.addEventListener('click', function() {
            const demoBox = document.getElementById('style-demo-box');
            demoBox.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
            demoBox.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
        });
    }
});