let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThtmeButton = document.querySelector('.theme-button-light');

// код переключения цвета темы
document.body.classList.remove('dark');
darkThemeButton.classList.remove('active');
lightThtmeButton.classList.add('active');
