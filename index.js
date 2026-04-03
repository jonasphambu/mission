        // Animation on scroll for sections
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // Animate cards inside sections with delay
                    if (entry.target.id === 'faculties' || entry.target.id === 'teachers') {
                        const cards = entry.target.querySelectorAll('.faculty-card, .teacher-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('animated');
                            }, index * 200);
                        });
                    }
                    
                    // Animate about image
                    if (entry.target.id === 'about') {
                        const aboutImage = entry.target.querySelector('.about-image');
                        setTimeout(() => {
                            aboutImage.classList.add('animated');
                        }, 300);
                    }
                }
            });
        }, observerOptions);
        
        // Observe sections for animation
        document.querySelectorAll('.faculties, .teachers, .about, footer').forEach(section => {
            sectionObserver.observe(section);
        });
        
        // Animate social icons on hover
        document.querySelectorAll('.social-icons a, .teacher-social a').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.querySelector('i').style.transform = 'rotate(360deg)';
                this.querySelector('i').style.transition = 'transform 0.5s ease';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.querySelector('i').style.transform = 'rotate(0deg)';
            });
        });
        
        // Logo animation on page load
        window.addEventListener('load', function() {
            const logoIcon = document.querySelector('.logo i');
            logoIcon.style.animation = 'pulse 2s infinite';
        });

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
        
        // Text rotation in hero section
        const textCarousels = document.querySelectorAll('.text-carousel');
        
        textCarousels.forEach(carousel => {
            const textItems = carousel.querySelectorAll('.text-item');
            let currentIndex = 0;
            
            function rotateText() {
                // Hide current text
                textItems[currentIndex].classList.remove('active');
                
                // Move to next text
                currentIndex = (currentIndex + 1) % textItems.length;
                
                // Show next text
                textItems[currentIndex].classList.add('active');
            }
            
            // Start text rotation every 5 seconds
            setInterval(rotateText, 5000);
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
        
        // Hide header on scroll down, show on scroll up
        let lastScrollY = window.scrollY;
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            lastScrollY = window.scrollY;
        });
        
        // Animation on button click
        document.querySelectorAll('.btn, .nav-link').forEach(button => {
            button.addEventListener('click', function(e) {
                // Simple animation effect on click
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });


        
// Hero Slider - Style ISTA Matadi
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.hero-indicator');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 secondes

    // Fonction pour changer de slide
    function showSlide(index) {
        // Retirer la classe active de tous les slides et indicateurs
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        // Ajouter la classe active au slide et indicateur courant
        slides[index].classList.add('active');
        indicators[index].classList.add('active');

        currentSlide = index;
    }

    // Fonction pour passer au slide suivant
    function nextSlide() {
        let nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex);
    }

    // Démarrer le slider automatique
    let slideTimer = setInterval(nextSlide, slideInterval);

    // Gestion des clics sur les indicateurs
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            clearInterval(slideTimer);
            showSlide(index);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });
     });
     
     
// DROPDOWN SUR MOBILE
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});