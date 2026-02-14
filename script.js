/**
 * Mahana Landing Page - Interactive Features
 * Vanilla JS, Modular Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Animation Library (AOS)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            disable: 'mobile'
        });
    }

    // 2. Initialize Components
    initScrollProgress();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initFAQ();
    initCounterAnimation();
    initForm();
});

/* ============================================================
   1. Scroll Progress Indicator
   ============================================================ */
function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        bar.style.width = scrolled + '%';
    }, { passive: true });
}

/* ============================================================
   2. Sticky Navbar with Blur Effect
   ============================================================ */
function initNavbar() {
    const nav = document.getElementById('navbar');
    const logo = document.getElementById('navbar-logo');
    const links = document.querySelectorAll('.nav-link');
    if (!nav) return;

    window.addEventListener('scroll', () => {
        const logo = document.getElementById('navbar-logo'); // Re-query just in case

        if (window.scrollY > 10) {
            // Scrolled State: White Background, Dark Logo, Dark Links
            nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-slate-200/50');
            nav.classList.remove('bg-transparent', 'border-transparent');

            if (logo) {
                // Check if src needs updating (robust check)
                if (!logo.src.includes('mahana_logo-dark')) {
                    logo.src = './imgs/mahana_logo-dark.png';
                }
            }

            links.forEach(link => {
                link.classList.remove('text-slate-200');
                link.classList.add('text-slate-600');
            });
        } else {
            // Top State: Transparent Background, White Logo, Light Links
            nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-slate-200/50');
            nav.classList.add('bg-transparent', 'border-transparent');

            if (logo) {
                // Check if src needs updating
                if (logo.src.includes('mahana_logo-dark') || !logo.src.includes('mahana_logo')) {
                    logo.src = './imgs/mahana_logo.png';
                }
            }

            links.forEach(link => {
                link.classList.add('text-slate-200');
                link.classList.remove('text-slate-600');
            });
        }
    }, { passive: true });
}

/* ============================================================
   3. Mobile Hamburger Menu
   ============================================================ */
function initMobileMenu() {
    const btn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('open');
        if (isOpen) {
            menu.classList.remove('open');
            menu.classList.add('-translate-y-[150%]'); // Slide Up
        } else {
            menu.classList.add('open');
            menu.classList.remove('-translate-y-[150%]'); // Slide Down
        }
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            menu.classList.add('-translate-y-[150%]');
        });
    });
}

/* ============================================================
   4. Smooth Scroll
   ============================================================ */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ============================================================
   5. FAQ Accordion
   ============================================================ */
function initFAQ() {
    const toggles = document.querySelectorAll('.faq-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.nextElementSibling;
            const icon = toggle.querySelector('.icon-plus');

            // Toggle current
            const isOpen = !content.classList.contains('hidden');

            // Close all others (Accordian behavior)
            document.querySelectorAll('.faq-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('open');
                el.style.maxHeight = null;
            });
            document.querySelectorAll('.icon-plus').forEach(el => {
                el.classList.remove('rotate-45', 'text-accent');
            });

            if (isOpen) {
                // If was open, we just closed it (and all others)
            } else {
                // Open this one
                content.classList.remove('hidden');
                // Small delay to allow display:block to render before transition
                requestAnimationFrame(() => {
                    content.classList.add('open');
                    content.style.maxHeight = content.scrollHeight + "px";
                });
                icon.classList.add('rotate-45', 'text-accent');
            }
        });
    });
}

/* ============================================================
   6. Animated Number Counters
   ============================================================ */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-animation');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000; // ms
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out quint
        const ease = 1 - Math.pow(1 - progress, 5);

        const current = Math.floor(target * ease);
        el.innerText = current > 0 ? "+" + current : current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.innerText = "+" + target; // Ensure final value
        }
    }

    requestAnimationFrame(update);
}

/* ============================================================
   7. Contact Form Handling
   ============================================================ */
function initForm() {
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    if (!form || !successMsg) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate API call
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;
        btn.classList.add('opacity-75', 'cursor-not-allowed');

        setTimeout(() => {
            // Success State
            form.classList.add('opacity-0', 'pointer-events-none'); // Fade out form
            successMsg.classList.remove('hidden'); // Show success

            // Reset for demo purposes (optional)
            // setTimeout(() => {
            //    form.reset();
            //    form.classList.remove('opacity-0', 'pointer-events-none');
            //    successMsg.classList.add('hidden');
            //    btn.innerText = originalText;
            //    btn.disabled = false;
            //    btn.classList.remove('opacity-75', 'cursor-not-allowed');
            // }, 5000);

        }, 1500);
    });
}
