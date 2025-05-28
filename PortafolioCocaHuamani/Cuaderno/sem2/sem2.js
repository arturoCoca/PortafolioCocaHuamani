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
            
            // Scroll suave al contenido
            const tabContainer = btn.closest('.tabs');
            const contentElement = document.getElementById(tabId);
            if (tabContainer && contentElement) {
                tabContainer.scrollTo({
                    top: contentElement.offsetTop - tabContainer.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
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
    
    document.querySelectorAll('.card, .code-block, .feature').forEach(el => {
        observer.observe(el);
    });
    
    // Ejemplo interactivo de Drag and Drop
    const initDragAndDrop = () => {
        const dropzones = document.querySelectorAll('[ondrop]');
        if (dropzones.length > 0) {
            dropzones.forEach(zone => {
                zone.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    this.style.backgroundColor = 'rgba(52, 152, 219, 0.1)';
                });
                
                zone.addEventListener('dragleave', function() {
                    this.style.backgroundColor = '';
                });
                
                zone.addEventListener('drop', function(e) {
                    e.preventDefault();
                    this.style.backgroundColor = '';
                    const id = e.dataTransfer.getData('text');
                    const draggedElement = document.getElementById(id);
                    if (draggedElement) {
                        this.appendChild(draggedElement);
                    }
                });
            });
            
            const draggables = document.querySelectorAll('[draggable="true"]');
            draggables.forEach(item => {
                item.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text', this.id);
                    this.style.opacity = '0.5';
                });
                
                item.addEventListener('dragend', function() {
                    this.style.opacity = '1';
                });
            });
        }
    };
    
    initDragAndDrop();
    
    // Ejemplo interactivo de Web Storage - Ampliado
    const initWebStorageDemo = () => {
        const storageDemo = document.getElementById('storage-demo');
        if (storageDemo) {
            const saveBtn = storageDemo.querySelector('#save-storage');
            const readBtn = storageDemo.querySelector('#read-storage');
            const clearBtn = storageDemo.querySelector('#clear-storage');
            const input = storageDemo.querySelector('#storage-input');
            const output = storageDemo.querySelector('#storage-output');
            
            // Cargar valor guardado al iniciar
            const savedValue = localStorage.getItem('demoData');
            if (savedValue) {
                input.value = savedValue;
                output.textContent = `Valor guardado: ${savedValue}`;
            }
            
            saveBtn.addEventListener('click', () => {
                if (input.value.trim() === '') {
                    output.textContent = 'Por favor introduce un valor';
                    output.style.color = 'var(--danger-color)';
                    return;
                }
                
                localStorage.setItem('demoData', input.value);
                output.textContent = `Valor guardado: ${input.value}`;
                output.style.color = 'var(--success-color)';
                
                // Animación de confirmación
                saveBtn.innerHTML = '<i class="fas fa-check"></i> Guardado!';
                setTimeout(() => {
                    saveBtn.textContent = 'Guardar';
                }, 2000);
            });
            
            readBtn.addEventListener('click', () => {
                const data = localStorage.getItem('demoData');
                if (data) {
                    output.textContent = `Valor recuperado: ${data}`;
                    output.style.color = 'var(--success-color)';
                } else {
                    output.textContent = 'No hay datos guardados';
                    output.style.color = 'var(--warning-color)';
                }
            });
            
            clearBtn.addEventListener('click', () => {
                localStorage.removeItem('demoData');
                input.value = '';
                output.textContent = 'Datos eliminados del almacenamiento';
                output.style.color = 'var(--danger-color)';
                
                // Animación de confirmación
                clearBtn.innerHTML = '<i class="fas fa-trash"></i> Eliminado!';
                setTimeout(() => {
                    clearBtn.textContent = 'Limpiar';
                }, 2000);
            });
        }
    };
        


    initWebStorageDemo();

    // Validación de formulario de demostración
    const initFormValidation = () => {
        const form = document.querySelector('.demo-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Validación personalizada
                const phone = form.querySelector('#phone');
                if (phone.value && !phone.checkValidity()) {
                    phone.setCustomValidity('Por favor ingresa un número de 9 dígitos');
                    phone.reportValidity();
                    return;
                }
                
                // Simular envío exitoso
                alert('Formulario enviado con éxito! (Esta es una simulación)');
                form.reset();
            });
            
            // Limpiar validación al editar
            form.querySelectorAll('input, textarea').forEach(input => {
                input.addEventListener('input', () => {
                    input.setCustomValidity('');
                });
            });
        }
    };
    
    initFormValidation();
    
});