const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.classList.toggle('open'); // para animar la hamburguesa si quieres
});

// Accesibilidad: toggle con tecla Enter o Espacio
menuToggle.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('open');
  }
});
