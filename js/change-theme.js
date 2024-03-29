let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThtmeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

lightThtmeButton.onclick = function () {
    // код переключения цвета темы
    document.body.classList.remove('dark');
    darkThemeButton.classList.remove('active');
    lightThtmeButton.classList.add('active');
};

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThtmeButton.classList.remove('active');
};

sansSerifFontButton.onclick = function () {
    // код переключения шрифта
    document.body.classList.remove('serif');
    serifFontButton.classList.remove('active');
    sansSerifFontButton.classList.add('active');
};

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');
};
