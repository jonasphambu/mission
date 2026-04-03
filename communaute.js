  
        // Animation au scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 200);
                }
            });
        }, { threshold: 0.1 });

         // Menu hamburger functionality
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Initialisation
        document.addEventListener('DOMContentLoaded', function() {
            // Observer les cartes
            document.querySelectorAll('.section-card').forEach(card => {
                observer.observe(card);
            });
        });

        // Effets de hover pour les icônes
        document.addEventListener('mousemove', function(e) {
            const cards = document.querySelectorAll('.section-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
                    const icon = card.querySelector('.section-icon');
                    if (icon) {
                        const moveX = (x - rect.width / 2) / 25;
                        const moveY = (y - rect.height / 2) / 25;
                        icon.style.transform = `translate(${moveX}px, ${moveY}px) rotate(5deg)`;
                    }
                }
            });
        });
    