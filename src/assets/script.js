window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.hero, .services, .formacion, .nosotros, .contacto, .card');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
});
