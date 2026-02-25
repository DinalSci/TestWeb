document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Text Splitting Helper for "Patta" Reveals
    function splitText(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            const text = el.innerText;
            el.innerHTML = text.split(' ').map(word =>
                `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`
            ).join(' ');
        });
    }

    // Initialize Text Splitting
    splitText('.split-text');

    // Preloader Animation
    const preloader = document.getElementById('preloader');
    const preloaderLogo = document.getElementById('preloader-logo');

    const tl = gsap.timeline();

    tl.to(preloaderLogo, {
        opacity: 1,
        scale: 1.1,
        duration: 2,
        ease: "expo.out"
    })
        .to(preloaderLogo, {
            opacity: 0,
            y: -10,
            filter: "blur(10px)",
            duration: 1,
            ease: "power2.inOut"
        })
        .to(preloader, {
            yPercent: -100,
            duration: 1.5,
            ease: "expo.inOut",
            onComplete: () => {
                initHeroAnimations();
            }
        });

    // Hero Animations
    function initHeroAnimations() {
        const heroTl = gsap.timeline();

        heroTl.to('.hero-sub', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        })
            .to('.hero-title span span', {
                y: 0,
                duration: 1.5,
                stagger: 0.1,
                ease: "expo.out"
            }, "-=0.8")
            .to('.hero-btn', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            }, "-=1")
            .to('.hero-img', {
                scale: 1,
                duration: 4,
                ease: "power2.out"
            }, "-=2.5");
    }

    // Scroll Animations for Product Cards
    gsap.utils.toArray('.product-card').forEach((card, i) => {
        const img = card.querySelector('img');
        const content = card.querySelectorAll('h3, p');

        gsap.from(img, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            scale: 1.2,
            duration: 2,
            ease: "power2.out"
        });

        gsap.from(content, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Parallax Depth Effect
    gsap.to('.hero-img', {
        scrollTrigger: {
            trigger: 'body',
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        yPercent: 30,
        ease: "none"
    });

    // Hover effect for nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, { color: '#D4AF37', duration: 0.3 });
        });
        link.addEventListener('mouseleave', () => {
            // Mix-blend CSS handles this mostly
        });
    });
});
