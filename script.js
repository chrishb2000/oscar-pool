/**
 * OSCAR'S POOL SERVICE - JAVASCRIPT
 * Professional Pool Service Website
 * Developed by Christian Herencia
 */

(function() {
    'use strict';

    // ========================================
    // LANGUAGE TRANSLATIONS
    // ========================================
    const translations = {
        en: {
            navHome: 'Home',
            navAbout: 'About Us',
            navServices: 'Services',
            navPortfolio: 'Portfolio',
            navContact: 'Contact',
            heroTitle: "Oscar's Pool Service Remodeling & Construction",
            heroSubtitle: 'Your satisfaction is our goal',
            heroButton: 'Get Free Estimate',
            aboutTitle: 'About Us',
            aboutIntro: "Welcome to Oscar's Pool Service Remodeling & Construction. Throughout the years we've earned the trust of our customers with dedication in what we do.",
            aboutParagraph1: "At Oscar's Pool Service our goal is your satisfaction. We offer many reliable brands of pool equipment installations. We want your pool to be a place where you can go and relax on a beautiful sunny day or a dark cool night. Whether it's winter, summer, spring or fall your pool should be beautiful anytime.",
            aboutParagraph2: 'With proper chemistry in your water you can really enjoy a very good long swim. We work and are familiar with these products:',
            kreepyNote: "If you're looking for a Pool Cleaner, Kreepy Krauly is the one we recommend for inground pools.",
            insuranceBadge: 'Member of UPA INSURANCE',
            servicesTitle: 'Our Services',
            servicesSubtitle: 'Professional pool maintenance and cleaning services',
            service1Title: 'Weekly Pool Service',
            service1Desc: 'Complete pool maintenance including cleaning, vacuuming, and chemical balancing.',
            service2Title: 'Filter Cleaning',
            service2Desc: 'Professional filter cleaning service, recommended 3 times per year.',
            service3Title: 'Chemical Treatment',
            service3Desc: 'Annual chemical balance treatment at the beginning of summer season.',
            service4Title: 'Pool Repairs',
            service4Desc: 'Equipment repair and replacement. Additional parts will be extra.',
            service5Title: 'Spa Service',
            service5Desc: 'Specialized spa maintenance for inground spas. Fiberglass spas may have extra fees.',
            service6Title: 'Remodeling & Construction',
            service6Desc: 'Complete pool remodeling and construction services. Transform your pool into a paradise.',
            startingAt: 'Starting at',
            contactForQuote: 'Contact for quote',
            contactForPricing: 'Contact for pricing',
            freeEstimate: 'Free estimate',
            serviceIncludes: 'Our Service Includes:',
            servingAreas: 'Serving Areas:',
            portfolioTitle: 'Our Portfolio',
            portfolioSubtitle: 'See our latest work and satisfied customers',
            reviewsTitle: 'Customer Reviews',
            contactTitle: 'Contact Us',
            contactSubtitle: 'Get your free estimate today',
            address: 'Address',
            phone: 'Phone',
            email: 'Email',
            businessHours: 'Business Hours',
            hoursText: 'Monday - Friday: 9:00 AM - 5:00 PM',
            weekendText: 'Saturday - Sunday: Closed',
            followUs: 'Follow Us',
            fullName: 'Full Name',
            emailAddress: 'Email Address',
            phoneNumber: 'Phone Number',
            serviceInterested: 'Service Interested In',
            selectService: 'Select a service',
            message: 'Message',
            sendMessage: 'Send Message',
            quickLinks: 'Quick Links',
            services: 'Services',
            contactInfo: 'Contact Info',
            allRightsReserved: 'All Rights Reserved.',
            perMonth: '/month',
            perCleaning: '/cleaning',
            perYear: '/year',
            perWeek: '/week',
            includesListItem1: 'Check chemicals, chlorine and acid',
            includesListItem2: 'Cleaning the surface',
            includesListItem3: 'Vacuum the pool',
            includesListItem4: 'Brush walls and tiles (Calcium cleaning not included)',
            includesListItem5: 'Clean skimmer and pump baskets',
            includesListItem6: 'Balance the chemicals',
            includesListItem7: 'Once a month we balance the alkalinity'
        },
        es: {
            navHome: 'Inicio',
            navAbout: 'Quiénes Somos',
            navServices: 'Servicios',
            navPortfolio: 'Portafolio',
            navContact: 'Contacto',
            heroTitle: "Oscar's Pool Service Remodeling y Construcción",
            heroSubtitle: 'Su satisfacción es nuestra meta',
            heroButton: 'Obtenga Estimado Gratis',
            aboutTitle: 'Quiénes Somos',
            aboutIntro: "Bienvenido a Oscar's Pool Service Remodeling & Construction. A lo largo de los años hemos ganado la confianza de nuestros clientes con dedicación en lo que hacemos.",
            aboutParagraph1: "En Oscar's Pool Service nuestra meta es su satisfacción. Ofrecemos muchas marcas confiables de instalaciones de equipos para piscinas. Queremos que su piscina sea un lugar donde pueda ir y relajarse en un hermoso día soleado o una noche fresca y oscura. Ya sea invierno, verano, primavera u otoño, su piscina debe verse hermosa en cualquier momento.",
            aboutParagraph2: 'Con la química adecuada en su agua, realmente puede disfrutar de un muy buen nado largo. Trabajamos y estamos familiarizados con estos productos:',
            kreepyNote: 'Si está buscando un limpiador de piscinas, Kreepy Krauly es el que recomendamos para piscinas enterradas.',
            insuranceBadge: 'Miembro de UPA INSURANCE',
            servicesTitle: 'Nuestros Servicios',
            servicesSubtitle: 'Servicios profesionales de mantenimiento y limpieza de piscinas',
            service1Title: 'Servicio Semanal de Piscina',
            service1Desc: 'Mantenimiento completo de piscina incluyendo limpieza, aspirado y balanceo químico.',
            service2Title: 'Limpieza de Filtros',
            service2Desc: 'Servicio profesional de limpieza de filtros, recomendado 3 veces al año.',
            service3Title: 'Tratamiento Químico',
            service3Desc: 'Tratamiento anual de balance químico al inicio de la temporada de verano.',
            service4Title: 'Reparaciones de Piscina',
            service4Desc: 'Reparación y reemplazo de equipos. Piezas adicionales tendrán costo extra.',
            service5Title: 'Servicio de Spa',
            service5Desc: 'Mantenimiento especializado de spas para spas enterrados. Spas de fibra de vidrio pueden tener costos adicionales.',
            service6Title: 'Remodelación y Construcción',
            service6Desc: 'Servicios completos de remodelación y construcción de piscinas. Transforme su piscina en un paraíso.',
            startingAt: 'Desde',
            contactForQuote: 'Contacte para cotización',
            contactForPricing: 'Contacte para precios',
            freeEstimate: 'Estimado gratis',
            serviceIncludes: 'Nuestro Servicio Incluye:',
            servingAreas: 'Áreas de Servicio:',
            portfolioTitle: 'Nuestro Portafolio',
            portfolioSubtitle: 'Vea nuestro trabajo más reciente y clientes satisfechos',
            reviewsTitle: 'Reseñas de Clientes',
            contactTitle: 'Contáctenos',
            contactSubtitle: 'Obtenga su estimado gratis hoy',
            address: 'Dirección',
            phone: 'Teléfono',
            email: 'Correo',
            businessHours: 'Horario de Atención',
            hoursText: 'Lunes - Viernes: 9:00 AM - 5:00 PM',
            weekendText: 'Sábado - Domingo: Cerrado',
            followUs: 'Síguenos',
            fullName: 'Nombre Completo',
            emailAddress: 'Correo Electrónico',
            phoneNumber: 'Número de Teléfono',
            serviceInterested: 'Servicio de Interés',
            selectService: 'Seleccione un servicio',
            message: 'Mensaje',
            sendMessage: 'Enviar Mensaje',
            quickLinks: 'Enlaces Rápidos',
            services: 'Servicios',
            contactInfo: 'Información de Contacto',
            allRightsReserved: 'Todos los Derechos Reservados.',
            perMonth: '/mes',
            perCleaning: '/limpieza',
            perYear: '/año',
            perWeek: '/semana',
            includesListItem1: 'Verificar químicos, cloro y ácido',
            includesListItem2: 'Limpieza de la superficie',
            includesListItem3: 'Aspirar la piscina',
            includesListItem4: 'Cepillar paredes y azulejos (Limpieza de calcio no incluida)',
            includesListItem5: 'Limpiar canastas de skimmer y bomba',
            includesListItem6: 'Balancear los químicos',
            includesListItem7: 'Una vez al mes balanceamos la alcalinidad'
        }
    };

    // ========================================
    // DOM ELEMENTS
    // ========================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const langButtons = document.querySelectorAll('.lang-btn');
    const scrollTopBtn = document.getElementById('scrollTop');
    const contactForm = document.getElementById('contactForm');
    const currentYearEl = document.getElementById('currentYear');
    
    // Carousel elements
    const carouselTrack = document.getElementById('carouselTrack');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
    
    // Modal elements
    const portfolioModal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Custom cursor elements
    const cursorDot = document.getElementById('cursorDot');
    const cursorOutline = document.getElementById('cursorOutline');

    // ========================================
    // STATE
    // ========================================
    let currentLang = 'en';
    let currentSlide = 0;
    let currentModalImage = 0;
    let carouselInterval;
    let autoPlayEnabled = true;
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    // ========================================
    // INITIALIZATION
    // ========================================
    function init() {
        setcurrentYear();
        setupEventListeners();
        startCarousel();
        setupIntersectionObserver();
        loadLanguageFromURL();
    }

    function setcurrentYear() {
        if (currentYearEl) {
            currentYearEl.textContent = new Date().getFullYear();
        }
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================
    function setupEventListeners() {
        // Navbar scroll effect
        window.addEventListener('scroll', handleScroll);
        
        // Mobile nav toggle
        if (navToggle) {
            navToggle.addEventListener('click', toggleMobileNav);
        }
        
        // Smooth scroll for nav links
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
        });
        
        // Language switcher
        langButtons.forEach(btn => {
            btn.addEventListener('click', handleLanguageSwitch);
        });
        
        // Scroll to top button
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', scrollToTop);
        }
        
        // Contact form submission
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }
        
        // Carousel controls
        if (prevBtn) {
            prevBtn.addEventListener('click', () => changeSlide(-1));
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', () => changeSlide(1));
        }
        
        // Carousel indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => goToSlide(index));
        });
        
        // Portfolio modal
        portfolioItems.forEach((item, index) => {
            item.addEventListener('click', () => openModal(index));
        });
        
        if (modalClose) {
            modalClose.addEventListener('click', closeModal);
        }
        
        if (modalPrev) {
            modalPrev.addEventListener('click', () => changeModalImage(-1));
        }
        
        if (modalNext) {
            modalNext.addEventListener('click', () => changeModalImage(1));
        }
        
        // Close modal on outside click
        if (portfolioModal) {
            portfolioModal.addEventListener('click', (e) => {
                if (e.target === portfolioModal) {
                    closeModal();
                }
            });
        }
        
        // Keyboard navigation for modal
        document.addEventListener('keydown', (e) => {
            if (portfolioModal && portfolioModal.classList.contains('active')) {
                if (e.key === 'Escape') {
                    closeModal();
                } else if (e.key === 'ArrowLeft') {
                    changeModalImage(-1);
                } else if (e.key === 'ArrowRight') {
                    changeModalImage(1);
                }
            }
        });
        
        // Pause carousel on hover
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', () => {
                autoPlayEnabled = false;
                clearInterval(carouselInterval);
            });
            
            hero.addEventListener('mouseleave', () => {
                autoPlayEnabled = true;
                startCarousel();
            });
            
            // Touch/swipe support for carousel
            hero.addEventListener('touchstart', handleTouchStart, { passive: true });
            hero.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
        
        // Scroll animations observer
        setupScrollAnimations();
        
        // Custom cursor
        setupCustomCursor();
    }

    // ========================================
    // SCROLL HANDLERS
    // ========================================
    function handleScroll() {
        // Navbar background on scroll
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Scroll to top button visibility
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }
        
        // Active nav link on scroll
        updateActiveNavLink();
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // ========================================
    // MOBILE NAVIGATION
    // ========================================
    function toggleMobileNav() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    }

    function handleNavClick(e) {
        const href = e.currentTarget.getAttribute('href');
        
        // Close mobile menu on link click
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        // Smooth scroll handled by CSS
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // ========================================
    // LANGUAGE SWITCHER
    // ========================================
    function handleLanguageSwitch(e) {
        const lang = e.currentTarget.getAttribute('data-lang');
        
        if (lang !== currentLang) {
            currentLang = lang;
            updateLanguage();
            updateURLLanguage();
        }
    }

    function updateLanguage() {
        const t = translations[currentLang];
        
        // Update nav links
        document.querySelectorAll('.nav-link[data-en]').forEach(link => {
            link.textContent = t[link.getAttribute('data-en').toLowerCase().replace(/\s+/g, '') === 'home' ? 'navHome' :
                               link.getAttribute('data-en').toLowerCase().replace(/\s+/g, '') === 'aboutus' ? 'navAbout' :
                               link.getAttribute('data-en').toLowerCase().replace(/\s+/g, '') === 'services' ? 'navServices' :
                               link.getAttribute('data-en').toLowerCase().replace(/\s+/g, '') === 'portfolio' ? 'navPortfolio' : 'navContact'];
        });
        
        // Update elements with data-en attributes
        document.querySelectorAll('[data-en]').forEach(el => {
            const enText = el.getAttribute('data-en');
            const key = findTranslationKey(enText);
            if (key && t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    if (el.placeholder) {
                        el.placeholder = t[key];
                    }
                } else {
                    el.textContent = t[key];
                }
            }
        });
        
        // Update language buttons
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
    }

    function findTranslationKey(enText) {
        const normalized = enText.toLowerCase().replace(/[^a-z]/g, '');
        const keys = Object.keys(translations.en);
        
        for (const key of keys) {
            const normalizedKey = translations.en[key].toLowerCase().replace(/[^a-z]/g, '');
            if (normalizedKey === normalized) {
                return key;
            }
        }
        return null;
    }

    function updateURLLanguage() {
        const url = new URL(window.location);
        if (currentLang === 'es') {
            url.searchParams.set('lang', 'es');
        } else {
            url.searchParams.delete('lang');
        }
        window.history.pushState({}, '', url);
    }

    function loadLanguageFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get('lang');
        
        if (lang === 'es') {
            currentLang = 'es';
            updateLanguage();
        }
    }

    // ========================================
    // CAROUSEL
    // ========================================
    function startCarousel() {
        if (autoPlayEnabled) {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(() => {
                changeSlide(1);
            }, 5000);
        }
    }

    function changeSlide(direction) {
        currentSlide += direction;
        
        if (currentSlide < 0) {
            currentSlide = carouselSlides.length - 1;
        } else if (currentSlide >= carouselSlides.length) {
            currentSlide = 0;
        }
        
        updateCarousel(direction);
    }

    function goToSlide(index) {
        const direction = index > currentSlide ? 1 : -1;
        currentSlide = index;
        updateCarousel(direction);
    }

    function updateCarousel(direction = 1) {
        // Update track position with dynamic transition
        carouselTrack.style.transition = 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)';
        carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Add parallax effect to images
        carouselSlides.forEach((slide, index) => {
            const img = slide.querySelector('img');
            const offset = (index - currentSlide) * 20;
            if (img) {
                img.style.transform = `scale(1.1) translateX(${offset}px)`;
            }
        });
        
        // Update indicators with stagger animation
        indicators.forEach((indicator, index) => {
            const delay = Math.abs(index - currentSlide) * 0.1;
            setTimeout(() => {
                indicator.classList.toggle('active', index === currentSlide);
            }, delay * 100);
        });
        
        // Update slides active state
        carouselSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
            
            // Add entrance animation to content
            if (index === currentSlide) {
                const content = slide.querySelector('.hero-content');
                if (content) {
                    content.style.animation = 'none';
                    content.offsetHeight; // Trigger reflow
                    content.style.animation = 'fadeInUp 1s ease-out forwards';
                }
            }
        });
        
        // Trigger custom event for slide change
        const event = new CustomEvent('slideChange', { 
            detail: { currentSlide, direction } 
        });
        document.dispatchEvent(event);
    }

    // ========================================
    // PORTFOLIO MODAL
    // ========================================
    function openModal(index) {
        currentModalImage = index;
        const img = portfolioItems[index].querySelector('img');
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        portfolioModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        portfolioModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function changeModalImage(direction) {
        currentModalImage += direction;
        
        if (currentModalImage < 0) {
            currentModalImage = portfolioItems.length - 1;
        } else if (currentModalImage >= portfolioItems.length) {
            currentModalImage = 0;
        }
        
        const img = portfolioItems[currentModalImage].querySelector('img');
        modalImage.src = img.src;
        modalImage.alt = img.alt;
    }

    // ========================================
    // CONTACT FORM
    // ========================================
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        alert(currentLang === 'en' 
            ? 'Thank you for your message! We will contact you soon.' 
            : '¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.');
        
        contactForm.reset();
    }

    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    function setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        // Observe elements for animation
        document.querySelectorAll('.service-card, .testimonial-card, .portfolio-item').forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
    }

    // ========================================
    // TOUCH/SWIPE SUPPORT
    // ========================================
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        touchEndX = e.changedTouches[0].clientX;
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                changeSlide(1);
            } else {
                // Swipe right - previous slide
                changeSlide(-1);
            }
        }
    }

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    function setupScrollAnimations() {
        // Create intersection observer for scroll animations
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add stagger animation to children
                    const children = entry.target.querySelectorAll('[data-animate]');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate-in');
                        }, index * 100);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe elements for scroll animations
        const animateElements = document.querySelectorAll(
            '.service-card, .testimonial-card, .about-content, .contact-item, .portfolio-item'
        );
        
        animateElements.forEach(el => {
            el.setAttribute('data-animate', 'true');
            animationObserver.observe(el);
        });
        
        // Parallax effect on scroll
        window.addEventListener('scroll', handleParallaxScroll, { passive: true });
    }

    function handleParallaxScroll() {
        const scrolled = window.scrollY;
        
        // Parallax for hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
        
        // Parallax for section backgrounds
        document.querySelectorAll('.parallax-bg').forEach(el => {
            const speed = el.getAttribute('data-parallax-speed') || 0.5;
            el.style.backgroundPositionY = `${scrolled * speed}px`;
        });
    }

    // ========================================
    // CUSTOM CURSOR
    // ========================================
    function setupCustomCursor() {
        // Only enable custom cursor on desktop
        if (window.innerWidth < 768 || !cursorDot || !cursorOutline) {
            return;
        }
        
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let outlineX = 0;
        let outlineY = 0;
        let isHovering = false;
        
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Smooth cursor animation
        function animateCursor() {
            // Lerp for smooth follow
            cursorX += (mouseX - cursorX) * 0.5;
            cursorY += (mouseY - cursorY) * 0.5;
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            
            const scale = isHovering ? 1.5 : 1;
            const dotScale = isHovering ? 0.5 : 1;
            
            cursorDot.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px) scale(${dotScale})`;
            cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px) scale(${scale})`;
            
            requestAnimationFrame(animateCursor);
        }
        
        animateCursor();
        
        // Cursor hover effects
        const hoverElements = document.querySelectorAll('a, button, .portfolio-item, input, textarea, select');
        
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                isHovering = true;
                cursorOutline.style.borderColor = 'var(--primary-color)';
            });
            
            el.addEventListener('mouseleave', () => {
                isHovering = false;
                cursorOutline.style.borderColor = 'rgba(0, 119, 182, 0.5)';
            });
        });
        
        // Active state
        document.addEventListener('mousedown', () => {
            cursorDot.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px) scale(0.8)`;
            cursorOutline.style.transform = `translate(${outlineX - 20}px, ${outlineY - 20}px) scale(0.9)`;
        });
        
        document.addEventListener('mouseup', () => {
            // Will be handled by animateCursor based on isHovering state
        });
    }

    // ========================================
    // INITIALIZE ON DOM READY
    // ========================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
