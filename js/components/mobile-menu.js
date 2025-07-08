export function initMobileMenu() {
  const burgerBtn = document.getElementById('burger-btn');
  const headerNav = document.getElementById('header-nav');

  if (burgerBtn && headerNav) {
    burgerBtn.addEventListener('click', () => {
      headerNav.classList.toggle('is-active');
    });
  }
}