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
    
    // Demo de variables y tipos
    const variablesDemoBtn = document.getElementById('variables-demo');
    if (variablesDemoBtn) {
        variablesDemoBtn.addEventListener('click', () => {
            const output = document.getElementById('variables-output');
            output.innerHTML = '';
            
            // Ejemplos de variables
            let nombre = "Juan";
            const edad = 30;
            let esMayor = true;
            const frutas = ["manzana", "banana", "naranja"];
            const persona = { nombre: "María", edad: 25, profesion: "Desarrolladora" };
            
            // Mostrar resultados
            output.innerHTML += `<p>Nombre: ${nombre} (${typeof nombre})</p>`;
            output.innerHTML += `<p>Edad: ${edad} (${typeof edad})</p>`;
            output.innerHTML += `<p>Es mayor: ${esMayor} (${typeof esMayor})</p>`;
            output.innerHTML += `<p>Frutas: ${frutas.join(', ')} (${typeof frutas})</p>`;
            output.innerHTML += `<p>Persona: ${JSON.stringify(persona)} (${typeof persona})</p>`;
        });
    }
    
    // Demo de funciones y control
    const functionsDemoBtn = document.getElementById('functions-demo');
    if (functionsDemoBtn) {
        functionsDemoBtn.addEventListener('click', () => {
            const output = document.getElementById('functions-output');
            output.innerHTML = '';
            
            // Funciones
            function saludar(nombre) {
                return `Hola, ${nombre}!`;
            }
            
            const sumar = (a, b) => a + b;
            
            // Condicionales
            const edad = 25;
            let mensaje = '';
            if (edad >= 18) {
                mensaje = "Mayor de edad";
            } else {
                mensaje = "Menor de edad";
            }
            
            // Bucles
            const frutas = ["manzana", "banana", "naranja"];
            let listaFrutas = '';
            for (let i = 0; i < frutas.length; i++) {
                listaFrutas += `<li>${frutas[i]}</li>`;
            }
            
            // Mostrar resultados
            output.innerHTML += `<p>${saludar('Ana')}</p>`;
            output.innerHTML += `<p>Suma: 5 + 3 = ${sumar(5, 3)}</p>`;
            output.innerHTML += `<p>Edad ${edad}: ${mensaje}</p>`;
            output.innerHTML += `<p>Frutas:</p><ul>${listaFrutas}</ul>`;
        });
    }
    
    // Demo de manipulación del DOM
    const domDemoBtn = document.getElementById('dom-demo-btn');
    if (domDemoBtn) {
        domDemoBtn.addEventListener('click', () => {
            const title = document.getElementById('dom-title');
            const items = document.querySelectorAll('.dom-item');
            
            // Modificar elementos existentes
            title.textContent = 'Título Modificado';
            title.style.color = 'blue';
            
            // Modificar lista
            items.forEach((item, index) => {
                item.textContent = `Elemento ${index + 1} modificado`;
            });
            
            // Crear nuevo elemento
            const newItem = document.createElement('li');
            newItem.className = 'dom-item';
            newItem.textContent = 'Nuevo elemento añadido';
            document.querySelector('#dom-demo-area ul').appendChild(newItem);
        });
    }
    
    // Demo de eventos
    const eventDemoBtn = document.getElementById('event-demo-btn');
    if (eventDemoBtn) {
        let clickCount = 0;
        const counterElement = document.getElementById('event-counter');
        
        eventDemoBtn.addEventListener('click', () => {
            clickCount++;
            counterElement.textContent = `Clicks: ${clickCount}`;
        });
        
        const eventDemoForm = document.getElementById('event-demo-form');
        eventDemoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(eventDemoForm);
            const data = Object.fromEntries(formData);
            alert(`Formulario enviado: ${JSON.stringify(data)}`);
            eventDemoForm.reset();
        });
    }
    
    // Demo de Web Storage
    const saveStorageBtn = document.getElementById('save-storage');
    const readStorageBtn = document.getElementById('read-storage');
    const clearStorageBtn = document.getElementById('clear-storage');
    const storageInput = document.getElementById('storage-input');
    const storageOutput = document.getElementById('storage-output');
    
    if (saveStorageBtn) {
        saveStorageBtn.addEventListener('click', () => {
            if (storageInput.value.trim()) {
                localStorage.setItem('demoData', storageInput.value);
                storageOutput.textContent = `Datos guardados: "${storageInput.value}"`;
                storageInput.value = '';
            } else {
                storageOutput.textContent = 'Por favor ingresa un valor';
            }
        });
    }
    
    if (readStorageBtn) {
        readStorageBtn.addEventListener('click', () => {
            const data = localStorage.getItem('demoData');
            storageOutput.textContent = data 
                ? `Datos recuperados: "${data}"` 
                : 'No hay datos guardados';
        });
    }
    
    if (clearStorageBtn) {
        clearStorageBtn.addEventListener('click', () => {
            localStorage.removeItem('demoData');
            storageOutput.textContent = 'Datos eliminados del almacenamiento';
        });
    }
    
    // Demo de depuración
    const debugDemoBtn = document.getElementById('debug-demo');
    if (debugDemoBtn) {
        debugDemoBtn.addEventListener('click', () => {
            const output = document.getElementById('debug-output');
            output.innerHTML = '';
            
            console.log('Este es un mensaje normal');
            console.warn('Este es un mensaje de advertencia');
            console.error('Este es un mensaje de error');
            
            output.innerHTML = '<p>Mensajes enviados a la consola. Abre las herramientas de desarrollador (F12) para verlos.</p>';
        });
    }
    
    const debuggerDemoBtn = document.getElementById('debugger-demo');
    if (debuggerDemoBtn) {
        debuggerDemoBtn.addEventListener('click', () => {
            function funcionConDebugger() {
                const a = 5;
                const b = 10;
                debugger; // Esto pausará la ejecución si las herramientas de desarrollador están abiertas
                const suma = a + b;
                alert(`La suma es: ${suma}`);
            }
            funcionConDebugger();
        });
    }
    
    // Lista de tareas con JavaScript puro
    const todoForm = document.getElementById('js-todo-form');
    const todoInput = document.getElementById('js-todo-input');
    const todoList = document.getElementById('js-todo-list');
    
    // Cargar tareas guardadas
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => addTodoToDOM(todo.text, todo.completed, todo.id));
    }
    
    // Añadir tarea al DOM
    function addTodoToDOM(text, completed = false, id = Date.now()) {
        const li = document.createElement('li');
        if (completed) li.classList.add('completed');
        
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTodos();
        });
        
        const button = document.createElement('button');
        button.textContent = '×';
        button.className = 'delete-btn';
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
            saveTodos();
        });
        
        li.dataset.id = id;
        li.appendChild(span);
        li.appendChild(button);
        todoList.appendChild(li);
    }
    
    // Guardar tareas en localStorage
    function saveTodos() {
        const todos = [];
        document.querySelectorAll('#js-todo-list li').forEach(li => {
            todos.push({
                id: li.dataset.id,
                text: li.querySelector('span').textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    // Manejar envío del formulario
    if (todoForm) {
        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = todoInput.value.trim();
            if (text) {
                addTodoToDOM(text);
                todoInput.value = '';
                saveTodos();
            }
        });
    }
    
    // Cargar tareas al iniciar
    loadTodos();
    
    // Mostrar año actual en el footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
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
});