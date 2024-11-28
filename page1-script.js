document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('personalDataForm');
    const clearBtn = document.getElementById('clearBtn');
    const navButtons = document.querySelectorAll('.nav-button');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            sendFormData();
        }
    });

    clearBtn.addEventListener('click', function() {
        form.reset();
    });

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            navigateToPage(page);
        });
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        return isValid;
    }

    function sendFormData() {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Aquí normalmente enviarías los datos a un servidor
        // Por ahora, solo mostraremos un mensaje de éxito
        alert('Datos enviados con éxito:\n' + JSON.stringify(data, null, 2));
        
        // En una aplicación real, aquí irían las llamadas a la API para enviar el correo
        console.log('Enviando correo con los datos del formulario...');
    }

    function navigateToPage(page) {
        // En una aplicación real, aquí irían las redirecciones a las otras páginas
        console.log(`Navegando a la página: ${page}`);
    }
});