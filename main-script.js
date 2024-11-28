document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('user-name');
    const submitButton = document.getElementById('submit-name');
    const userGreeting = document.getElementById('user-greeting');
    const nameInputSection = document.getElementById('name-input');
    const mainContent = document.getElementById('main-content');
    const buttons = document.querySelectorAll('.animated-button');
    const descriptions = document.querySelectorAll('.description');

    // Guardar el nombre del usuario en sessionStorage cuando se envíe
    submitButton.addEventListener('click', function() {
        const userName = nameInput.value.trim();
        if (userName) {
            // Guardar el nombre en sessionStorage
            sessionStorage.setItem('userName', userName);
            userGreeting.textContent = `¡Bienvenido, ${userName}!`;
            nameInputSection.classList.add('hidden');
            mainContent.classList.remove('hidden');
        } else {
            alert('Por favor, ingresa tu nombre.');
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            
            // Objeto con las rutas de redirección
            const routes = {
                'page1': 'page1.html',
                'page2': 'formulario.html',
                'page3': 'operaciones.html',
            };

            // Verificar si existe una ruta para la página
            if (routes[page]) {
                // Guardar la página actual para poder volver
                sessionStorage.setItem('lastPage', window.location.href);
                
                // Redireccionar a la página correspondiente
                window.location.href = routes[page];
            } else {
                console.error(`No se encontró la ruta para: ${page}`);
            }
        });

        button.addEventListener('mouseover', function() {
            const page = this.getAttribute('data-page');
            descriptions.forEach(desc => {
                if (desc.getAttribute('data-page') === page) {
                    desc.style.display = 'block';
                } else {
                    desc.style.display = 'none';
                }
            });
        });
    });

    // Verificar si hay un nombre guardado al cargar la página
    const savedUserName = sessionStorage.getItem('userName');
    if (savedUserName) {
        nameInput.value = savedUserName;
        userGreeting.textContent = `¡Bienvenido, ${savedUserName}!`;
        nameInputSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
    }
});