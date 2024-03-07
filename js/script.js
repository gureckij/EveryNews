let articleSection = document.querySelector('.main-article-section');
let moreButton = articleSection.querySelector('.more');
moreButton.onclick = function () {
    articleSection.classList.remove('short');
};
