// scroll suave en el menú
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// efecto de tipeo en el rol del hero (respeta prefers-reduced-motion)
const roleEl = document.querySelector('.role-text');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (roleEl && !prefersReducedMotion) {
  const texto = roleEl.dataset.texto || roleEl.textContent;
  roleEl.textContent = '';
  let i = 0;

  function tipear() {
    if (i < texto.length) {
      roleEl.textContent += texto.charAt(i);
      i++;
      setTimeout(tipear, 35);
    }
  }

  tipear();
}