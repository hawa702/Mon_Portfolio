// Menu mobile (ouvrir/fermer)
const menuBtn = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});

// Surligner le lien actif selon la section visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.header .navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});
