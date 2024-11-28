// Inicializar EmailJS
(function() {
    emailjs.init('PFCS77000wDVF-QDS');
})();

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validación de usuario y contraseña
    if (username === 'USER' && password === 'PASS') { 
        // Preparar el template para el correo
        const templateParams = {
            username: username,
            login_time: new Date().toLocaleString(),
            to_email: 'arzamendia.eliasdavid@gmail.com'
        };

        // Enviar el correo usando EmailJS
        emailjs.send('service_sgwk73h', 'template_b7i49i6', templateParams)
            .then(function(response) {
                console.log('Correo enviado!', response.status, response.text);
                errorMessage.style.color = 'green';
                errorMessage.textContent = 'Login exitoso, redirigiendo...';
                
                // Guardar estado de autenticación
                sessionStorage.setItem('isAuthenticated', 'true');
                sessionStorage.setItem('username', username);
                
                // Redirección después de 2 segundos
                setTimeout(() => {
                    window.location.href = 'main.html';
                }, 2000);
            }, function(error) {
                console.log('Error al enviar el correo:', error);
                errorMessage.style.color = 'red';
                errorMessage.textContent = 'Login exitoso, pero hubo un error al enviar la notificación';
            });
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});