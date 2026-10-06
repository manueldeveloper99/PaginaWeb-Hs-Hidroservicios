document.addEventListener('DOMContentLoaded', () => {


    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('toggle-active');
            navLinks.classList.toggle('nav-active');
        });

        // Close menu when clicking a link
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                mobileToggle.classList.remove('toggle-active');
                navLinks.classList.remove('nav-active');
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initial Hero Animation
    setTimeout(() => {
        document.querySelector('.fade-in-left').classList.add('visible');
        document.querySelector('.fade-in-right').classList.add('visible');
    }, 100);

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-up, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-up');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for Milwaukee background
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rate = scrolled * 0.15;
            parallaxBg.style.transform = `translate3d(0, ${rate}px, 0)`;
        });
    }
});
