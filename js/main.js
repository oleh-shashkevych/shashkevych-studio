// Импортируем нашу функцию из модуля
import { initMobileMenu } from './components/mobile-menu.js';

// Ждем, пока весь HTML-документ загрузится
document.addEventListener('DOMContentLoaded', () => {

  // Запускаем инициализацию мобильного меню
  initMobileMenu();

  // В будущем тут будут вызовы других модулей:
  // initSlider();
  // initModals();

});

console.log('JS работает!');