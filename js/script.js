let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThtmeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

// код переключения цвета темы
document.body.classList.remove('dark');
darkThemeButton.classList.remove('active');
lightThtmeButton.classList.add('active');
