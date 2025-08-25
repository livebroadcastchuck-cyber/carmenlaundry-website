document.addEventListener('DOMContentLoaded', () => {
    console.log('Happy developing ✨ - Website is ready!');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // The home logo link should just go to the top
            if (this.getAttribute('href') === '#home') {
                return;
            }
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Modal Form Logic ---
    const ctaButton = document.querySelector('.cta-button');
    const dropoffModal = document.getElementById('dropoff-modal');

    if (ctaButton && dropoffModal) {
        const closeButton = dropoffModal.querySelector('.close-button');
        const dropoffForm = document.getElementById('dropoff-form');

        const openModal = () => pickupModal.classList.remove('hidden');
        const closeModal = () => pickupModal.classList.add('hidden');

        // Open modal on "Schedule a Pickup" click
        ctaButton.addEventListener('click', openModal);

        // Close modal with the 'X' button
        closeButton.addEventListener('click', closeModal);

        // Close modal by clicking the overlay
        pickupModal.addEventListener('click', (e) => {
            if (e.target === pickupModal) closeModal();
        });

        // Handle form submission
        pickupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = pickupForm.querySelector('input[name="name"]').value;
            alert(`Thank you, ${name}! We have received your drop-off request and will contact you shortly.`);
            pickupForm.reset();
            closeModal();
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[name="name"]').value;
            alert(`Thank you for your message, ${name}! We will get back to you soon.`);
            contactForm.reset();
        });
    }
});
