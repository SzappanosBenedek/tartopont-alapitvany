// ===================================
// TartóPont Alapítvány - Main JavaScript
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');

            // Update ARIA attributes for accessibility
            const isExpanded = navMenu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideMenu = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ===================================
    // Smooth Scrolling for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value,
                gdprConsent: document.getElementById('gdprContact').checked
            };

            // Validate GDPR consent
            if (!formData.gdprConsent) {
                alert('Kérjük, fogadja el az adatkezelési tájékoztatót!');
                return;
            }

            // Here you would normally send the data to a server
            // For now, we'll just show a success message
            console.log('Form data:', formData);

            // Show success message
            alert('Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.');

            // Reset form
            contactForm.reset();
        });
    }

    // ===================================
    // Newsletter Form Handling
    // ===================================
    const newsletterForms = document.querySelectorAll('#newsletterForm');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const emailInput = this.querySelector('.newsletter-input');
            const gdprCheckbox = this.querySelector('#gdprConsent');

            if (!gdprCheckbox.checked) {
                alert('Kérjük, fogadja el az adatkezelési tájékoztatót!');
                return;
            }

            const email = emailInput.value;

            // Here you would normally send to a newsletter service
            console.log('Newsletter subscription:', email);

            // Show success message
            alert('Köszönjük! Sikeresen feliratkozott hírlevelünkre.');

            // Reset form
            this.reset();
        });
    });

    // ===================================
    // Header Scroll Effect
    // ===================================
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // Animate Elements on Scroll
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.card, .belief-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// Copy Bank Account Number
// ===================================
function copyBankAccount() {
    const bankAccount = document.getElementById('bankAccount');
    const text = bankAccount.textContent.trim();

    // Create a temporary textarea to copy from
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);

    // Select and copy
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');

        // Show success feedback
        const btn = document.getElementById('copyBankBtn');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'Másolva!';
        btn.style.backgroundColor = '#7CB342';
        btn.style.color = 'white';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.backgroundColor = 'white';
            btn.style.color = 'var(--color-primary-blue)';
        }, 2000);

    } catch (err) {
        console.error('Failed to copy:', err);
        alert('A másolás nem sikerült. Kérjük, másolja ki manuálisan: ' + text);
    }

    // Clean up
    document.body.removeChild(textarea);
}

// ===================================
// Image Loading Error Handling
// ===================================
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('error', function () {
            // If image fails to load, replace with a placeholder
            this.style.backgroundColor = '#E1E8ED';
            this.style.minHeight = '300px';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.alt = 'Kép betöltése folyamatban...';
        });
    });
});
