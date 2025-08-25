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

        const openModal = () => dropoffModal.classList.remove('hidden');
        const closeModal = () => dropoffModal.classList.add('hidden');

        // Open modal on "Schedule a Drop-Off" click
        ctaButton.addEventListener('click', openModal);

        // Close modal with the 'X' button
        closeButton.addEventListener('click', closeModal);

        // Close modal by clicking the overlay
        dropoffModal.addEventListener('click', (e) => {
            if (e.target === dropoffModal) closeModal();
        });

        // Handle form submission
        dropoffForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(dropoffForm);
            const name = formData.get('name');

            try {
                const response = await fetch('https://formspree.io/f/YOUR_DROPOFF_FORM_ID', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert(`Thank you, ${name}! We have received your drop-off request and will contact you shortly.`);
                    dropoffForm.reset();
                    closeModal();
                } else {
                    alert('Oops! There was a problem submitting your request. Please try again later.');
                }
            } catch (error) {
                alert('Oops! There was a network problem. Please try again later.');
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');

            try {
                const response = await fetch('https://formspree.io/f/YOUR_CONTACT_FORM_ID', {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    alert(`Thank you for your message, ${name}! We will get back to you soon.`);
                    contactForm.reset();
                } else {
                    alert('Oops! There was a problem sending your message. Please try again later.');
                }
            } catch (error) {
                alert('Oops! There was a network problem. Please try again later.');
            }
        });
    }
});
