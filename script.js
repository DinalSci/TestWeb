document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Preloader Animation
    const preloader = document.getElementById('preloader');
    const preloaderLogo = document.getElementById('preloader-logo');

    const tl = gsap.timeline();

    tl.to(preloaderLogo, {
        opacity: 1,
        duration: 1.5,
        ease: "power2.inOut"
    })
        .to(preloaderLogo, {
            opacity: 0,
            y: -10,
            duration: 1,
            delay: 0.5,
            ease: "power2.inOut"
        })
        .to(preloader, {
            yPercent: -100,
            duration: 1.2,
            ease: "power4.inOut",
            onComplete: () => {
                initHeroAnimations();
            }
        });

    // Hero Animations
    function initHeroAnimations() {
        gsap.to('.hero-sub', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.to('.hero-title', {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: 0.2,
            ease: "power4.out"
        });

        gsap.to('.hero-btn', {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: "power3.out"
        });

        gsap.to('.hero-img', {
            scale: 1,
            duration: 3,
            ease: "power2.out"
        });
    }

    // Scroll Animations for Sections
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            delay: i % 2 * 0.2,
            ease: "power3.out"
        });
    });

    // Subtle parallax for the Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        gsap.to('.hero-img', {
            y: scrolled * 0.3,
            duration: 0.1
        });
    });

    // Hover effect for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { color: '#D4AF37', duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            // Logic for handling link color when mix-blend-mode is active
            // We'll let CSS handle most of it, this is for fine-tuning
        });
    });
});
