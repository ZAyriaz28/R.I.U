document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');  // animación hamburguesa
    menu.classList.toggle('active');  // mostrar/ocultar menú
  });
});


