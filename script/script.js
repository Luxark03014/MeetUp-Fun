//contact

const registerBtn = document.getElementById('register-btn');
        const modalOverlay = document.getElementById('modal-overlay');
        const closeBtn = document.getElementById('close-btn');
        const registrationForm = document.getElementById('registration-form');
        const eventRegistrationForm = document.getElementById('event-registration-form');

        registerBtn.addEventListener('click', () => {
            modalOverlay.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });

        registrationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no son iguales. Porfavor, intentalo de nuevo.');
                return;
            }

            alert('Registro completado!');
            modalOverlay.classList.remove('active');
            registrationForm.reset();
        });

        eventRegistrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por registrarte!');
            this.reset();
        });
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            setTimeout(() => {
                const formMessage = document.getElementById('form-message');
                formMessage.textContent = 'Gracias por tu mensaje. Nos pondremos en contacto lo antes posible';
                formMessage.style.color = 'var(--color-dark)';
                formMessage.style.opacity = '1';
                
                
                this.reset();

                
                setTimeout(() => {
                    formMessage.style.opacity = '0';
                }, 5000);
            }, 1000);
        });


        //event detail
        
        document.getElementById('registration-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Gracias por registrarte!');
            this.reset();
        });

        //profile
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('personal-info-form');
            const inputs = form.querySelectorAll('input, textarea');

            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.style.transform = 'translateY(-2px)';
                });

                input.addEventListener('blur', () => {
                    input.style.transform = 'translateY(0)';
                });
            });

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Perfil actualizado correctamente!');
            });
        });


        //home
        // Animate feature cards and  testimonials on scroll
        
        // Changing word animation
        