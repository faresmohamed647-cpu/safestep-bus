// ===================================
// MAIN JAVASCRIPT FILE
// ===================================

(function() {
    'use strict';

    // ===================================
    // NAVIGATION
    // ===================================
    
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect on navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target)) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
        
        // Close mobile menu when clicking a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Set active navigation link
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavLink();

    // ===================================
    // SECTION IMAGE PLACEHOLDERS
    // ===================================

    function initImagePlaceholders() {
        const pageKey = window.location.pathname.split('/').pop() || 'index.html';
        const pageName = pageKey
            .replace('.html', '')
            .replace(/-/g, ' ');

        const mediaLibrary = {
            default: [
                {
                    src: 'img/aboutnew.jpg',
                    alt: 'Students boarding a school bus',
                    eyebrow: 'School Transport',
                    title: 'Safer pickups and smoother boarding',
                    caption: 'Use real transport visuals to make every section feel more convincing and polished.',
                    tags: ['Live View', 'Student Safety'],
                    metricValue: '24/7',
                    metricLabel: 'Monitoring'
                },
                {
                    src: 'img/feature1.jpg',
                    alt: 'School bus tracking illustration',
                    eyebrow: 'Tracking Flow',
                    title: 'Clear app-style imagery for each feature',
                    caption: 'Illustrative visuals fit feature, FAQ, login, and onboarding sections really well.',
                    tags: ['GPS', 'Parents App'],
                    metricValue: 'ETA',
                    metricLabel: 'Updates'
                },
                {
                    src: 'img/pack2.jpg',
                    alt: 'School buses lined up',
                    eyebrow: 'Fleet View',
                    title: 'Fleet-focused visuals with stronger presence',
                    caption: 'Large transport photos make the layout feel more premium than plain placeholder blocks.',
                    tags: ['Fleet', 'Routes'],
                    metricValue: '250+',
                    metricLabel: 'Schools'
                },
                {
                    src: 'img/service1.jpg',
                    alt: 'Location pin on a digital map',
                    eyebrow: 'Smart Routing',
                    title: 'Map and route moments where they make sense',
                    caption: 'Route visuals reinforce the tracking story in a cleaner and more purposeful way.',
                    tags: ['Map', 'Tracking'],
                    metricValue: 'GPS',
                    metricLabel: 'Precision'
                },
                {
                    src: 'img/service5.jpg',
                    alt: 'Emergency alert on a mobile phone',
                    eyebrow: 'Alerts',
                    title: 'Important notifications highlighted visually',
                    caption: 'Emergency and alert sections now feel like product moments instead of filler space.',
                    tags: ['SOS', 'Alerts'],
                    metricValue: 'Instant',
                    metricLabel: 'Response'
                },
                {
                    src: 'img/service6.jpg',
                    alt: 'Shield and SSL security graphic',
                    eyebrow: 'Security',
                    title: 'Trust and safety details with better visual weight',
                    caption: 'Security-themed imagery works well for pricing, login, and trust-building sections.',
                    tags: ['Secure', 'Encrypted'],
                    metricValue: 'SSL',
                    metricLabel: 'Protected'
                },
                {
                    src: 'img/service4.jpg',
                    alt: 'Background check verification illustration',
                    eyebrow: 'Compliance',
                    title: 'Verification visuals for operations sections',
                    caption: 'Helpful for admin, onboarding, and process-driven pages that need more clarity.',
                    tags: ['Checks', 'Verified'],
                    metricValue: '100%',
                    metricLabel: 'Checked'
                },
                {
                    src: 'img/map.png',
                    alt: 'World map graphic',
                    eyebrow: 'Coverage',
                    title: 'Broader system coverage at a glance',
                    caption: 'Map graphics help the dashboard and operations areas feel richer without clutter.',
                    tags: ['Coverage', 'Scale'],
                    metricValue: 'Global',
                    metricLabel: 'Reach'
                }
            ],
            'index.html': [0, 1, 3, 2],
            'about.html': [0, 2, 6, 7, 1],
            'features.html': [1, 3, 4, 5, 6],
            'how-it-works.html': [1, 7, 3, 6, 2],
            'tracking.html': [7, 3, 2],
            'dashboard.html': [2, 7, 5],
            'pricing.html': [5, 1, 2],
            'contact.html': [0, 4, 3],
            'faq.html': [1, 5, 4],
            'login.html': [5, 1],
            'register.html': [1, 5, 6]
        };

        const sectionImageIndexes = mediaLibrary[pageKey] || mediaLibrary.default.map((_, index) => index);

        const placeholderTargets = [
            'section',
            '.tracking-header',
            '.tracking-stats',
            '.tracking-grid',
            '.dash-header',
            '.stats-grid',
            '.main-grid',
            '.bottom-grid',
            '.auth-header',
            '.auth-card',
            '.trust-grid'
        ];

        const skipTargetMatchers = [
            '.hero-image',
            '.dashboard-preview',
            '.map-container',
            '.buses-list',
            '.footer',
            '.footer-content',
            '.footer-bottom'
        ];

        const usedHosts = new Set();
        const targets = document.querySelectorAll(placeholderTargets.join(', '));

        targets.forEach((target, index) => {
            if (!(target instanceof HTMLElement)) {
                return;
            }

            if (skipTargetMatchers.some(selector => target.matches(selector))) {
                return;
            }

            if (target.querySelector('.section-media-slot')) {
                return;
            }

            const directContainer = target.firstElementChild;
            const host = directContainer instanceof HTMLElement && directContainer.classList.contains('container')
                ? directContainer
                : target;

            if (!(host instanceof HTMLElement) || usedHosts.has(host)) {
                return;
            }

            if (host.closest('.footer')) {
                return;
            }

            const hostTag = host.tagName.toLowerCase();
            const isCompactTarget =
                target.classList.contains('tracking-stats') ||
                target.classList.contains('stats-grid') ||
                target.classList.contains('trust-grid');

            const tone = ['blue', 'purple', 'green'][index % 3];
            const heading = target.querySelector('h1, h2, h3');
            const titleText = heading
                ? heading.textContent.replace(/\s+/g, ' ').trim()
                : `${pageName} visual`;
            const mediaIndex = sectionImageIndexes[index % sectionImageIndexes.length];
            const media = mediaLibrary.default[mediaIndex];
            const isIllustration = /\.(png|svg)$/i.test(media.src) || media.src.includes('feature1') || media.src.includes('service');
            const noteTitle = isCompactTarget ? 'Quick Visual' : 'Featured Visual';
            const noteText = isCompactTarget
                ? 'Small image support keeps dense sections from looking flat.'
                : media.caption;
            const tagsMarkup = media.tags
                .map(tag => `<span class="section-media-tag">${tag}</span>`)
                .join('');

            const placeholderMarkup = `
                <div class="section-media-slot fade-in-up ${hostTag === 'div' ? 'inline-media-slot' : ''} ${isCompactTarget ? 'compact-media-slot' : ''}" data-media-tone="${tone}">
                    <div class="section-media-shell">
                        <div class="section-media-grid">
                            <div class="section-media-preview">
                                <img src="${media.src}" alt="${media.alt}" class="section-media-photo ${isIllustration ? 'is-illustration' : ''}" loading="lazy">
                                <div class="section-media-scrim"></div>
                                <div class="section-media-frame">
                                    <span class="section-media-chip">${media.eyebrow}</span>
                                    <div class="section-media-title">${titleText}</div>
                                    <p class="section-media-caption">${media.caption}</p>
                                    <div class="section-media-tags">
                                        ${tagsMarkup}
                                    </div>
                                </div>
                                <div class="section-media-metric">
                                    <strong>${media.metricValue}</strong>
                                    <span>${media.metricLabel}</span>
                                </div>
                            </div>
                            <div class="section-media-notes" aria-hidden="true">
                                <div class="section-media-note">
                                    <div>
                                        <strong>${noteTitle}</strong>
                                        <span>${noteText}</span>
                                    </div>
                                </div>
                                <div class="section-media-mini">
                                    <img src="${media.src}" alt="" class="${isIllustration ? 'is-illustration' : ''}" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            host.insertAdjacentHTML('beforeend', placeholderMarkup);
            usedHosts.add(host);
        });
    }

    initImagePlaceholders();

    function enhanceHomeHero() {
        const previewMap = document.querySelector('.preview-map');
        if (!(previewMap instanceof HTMLElement) || previewMap.querySelector('.preview-photo')) {
            return;
        }

        previewMap.insertAdjacentHTML('afterbegin', `
            <img src="img/aboutnew.jpg" alt="Students boarding a school bus" class="preview-photo" loading="eager">
            <div class="preview-spotlight">
                <strong>Morning Pickup</strong>
                <span>Live boarding visibility</span>
            </div>
        `);
    }

    enhanceHomeHero();
    
    // ===================================
    // ANIMATED COUNTERS
    // ===================================
    
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }
    
    // Initialize counters when visible
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (statNumbers.length > 0) {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        statNumbers.forEach(stat => {
            counterObserver.observe(stat);
        });
    }
    
    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-scroll], .fade-in-up, .fade-in-down, .slide-in-left, .slide-in-right, .scale-in');
        
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const scrollObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Add visible class to fade-in elements
                    if (entry.target.classList.contains('fade-in-up') ||
                        entry.target.classList.contains('fade-in-down') ||
                        entry.target.classList.contains('slide-in-left') ||
                        entry.target.classList.contains('slide-in-right') ||
                        entry.target.classList.contains('scale-in')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'none';
                    }
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            scrollObserver.observe(element);
        });
    }
    
    initScrollAnimations();
    
    // ===================================
    // SMOOTH SCROLL
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ===================================
    // FORM UTILITIES
    // ===================================
    
    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple-effect');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // Add ripple to all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        
        button.addEventListener('click', createRipple);
    });
    
    // ===================================
    // UTILITY FUNCTIONS
    // ===================================
    
    // Debounce function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Throttle function
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // ===================================
    // LAZY LOADING IMAGES
    // ===================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===================================
    // BACK TO TOP BUTTON
    // ===================================
    
    function createBackToTop() {
        const backToTop = document.createElement('button');
        backToTop.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        `;
        backToTop.classList.add('back-to-top');
        backToTop.setAttribute('aria-label', 'Back to top');
        
        backToTop.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        `;
        
        document.body.appendChild(backToTop);
        
        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        }, 200));
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        backToTop.addEventListener('mouseenter', () => {
            backToTop.style.transform = 'translateY(-5px)';
        });
        
        backToTop.addEventListener('mouseleave', () => {
            backToTop.style.transform = 'translateY(0)';
        });
    }
    
    createBackToTop();
    
    // ===================================
    // NOTIFICATION SYSTEM
    // ===================================
    
    window.showNotification = function(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        notification.style.cssText = `
            position: fixed;
            top: 1rem;
            right: 1rem;
            padding: 1rem 1.5rem;
            background: rgba(15, 15, 20, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 0.75rem;
            color: white;
            z-index: 10000;
            animation: slideInFromTop 0.3s ease-out;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        `;
        
        if (type === 'success') {
            notification.style.borderColor = '#22c55e';
        } else if (type === 'error') {
            notification.style.borderColor = '#ef4444';
        } else if (type === 'warning') {
            notification.style.borderColor = '#f59e0b';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutToTop 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, duration);
    };
    
    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================
    
    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.querySelectorAll('[class*="animate"]').forEach(el => {
            el.style.animation = 'none';
            el.style.transition = 'none';
        });
    }
    
    // ===================================
    // PAGE LOAD ANIMATION
    // ===================================
    
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Remove loading class from elements
        document.querySelectorAll('.loading').forEach(el => {
            el.classList.remove('loading');
        });
    });
    
    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    
    console.log('%cBusTracker Pro', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cSchool Bus Tracking System', 'font-size: 14px; color: #60a5fa;');
    console.log('Version: 1.0.0');
    
})();

// ===================================
// CSS RIPPLE EFFECT STYLES
// ===================================

const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .back-to-top:hover {
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5) !important;
    }
`;
document.head.appendChild(style);
